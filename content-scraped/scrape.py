#!/usr/bin/env python3
"""
Scrape dinnar.cn (zh + en) into ./raw/ as HTML and ./parsed/ as text+JSON.
"""
import concurrent.futures, json, os, re, sys, urllib.request, html
from pathlib import Path

ROOT = Path(__file__).parent
RAW = ROOT / "raw"
PARSED = ROOT / "parsed"
RAW.mkdir(exist_ok=True)
PARSED.mkdir(exist_ok=True)

BASE = "http://www.dinnar.cn"

# Page lists derived from homepage hrefs
ZH_CLASS = [
    "/aboutus/class/",
    "/culture/class/",
    "/electron/class/",
    "/energy/class/",
    "/semiconductor/class/",
    "/display/class/",
    "/other/class/",
    "/technology/class/",
    "/dnai/class/",
    "/news/class/",
]

ZH_PRODUCTS = [
    "/inspection/html/?511.html","/inspection/html/?527.html","/inspection/html/?589.html",
    "/inspection/html/?602.html","/inspection/html/?631.html","/inspection/html/?644.html",
    "/inspection/html/?657.html","/inspection/html/?671.html","/inspection/html/?741.html",
    "/inspection/html/?754.html","/inspection/html/?778.html","/inspection/html/?790.html",
    "/inspection/html/?803.html","/inspection/html/?843.html","/inspection/html/?844.html",
    "/inspection/html/?870.html","/inspection/html/?909.html","/inspection/html/?933.html",
    "/inspection/html/?953.html","/inspection/html/?965.html","/inspection/html/?1098.html",
    "/inspection/html/?391.html",
    "/function/html/?490.html","/function/html/?683.html","/function/html/?695.html",
    "/function/html/?706.html","/function/html/?718.html","/function/html/?910.html",
    "/intelligence/html/?549.html","/intelligence/html/?817.html","/intelligence/html/?830.html",
    "/intelligence/html/?845.html","/intelligence/html/?859.html",
    "/intelligent/html/?923.html","/intelligent/html/?945.html",
    "/measuration/html/?562.html","/measuration/html/?575.html","/measuration/html/?616.html",
    "/measuration/html/?766.html",
    "/software/html/?1072.html",
]

ZH_PATHS = ZH_CLASS + ZH_PRODUCTS
EN_PATHS = ["/en" + p for p in ZH_PATHS]

ALL = ZH_PATHS + EN_PATHS


def safe_name(path: str) -> str:
    return re.sub(r"[^A-Za-z0-9_]+", "_", path).strip("_") or "root"


def fetch(path: str):
    url = BASE + path
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 dinnar-migration"})
        with urllib.request.urlopen(req, timeout=20) as r:
            data = r.read()
            text = data.decode("utf-8", errors="replace")
            (RAW / f"{safe_name(path)}.html").write_text(text, encoding="utf-8")
            return path, text
    except Exception as e:
        return path, None


TAG_RE = re.compile(r"<[^>]+>")
SCRIPT_RE = re.compile(r"<script[^>]*>.*?</script>", re.DOTALL | re.IGNORECASE)
STYLE_RE = re.compile(r"<style[^>]*>.*?</style>", re.DOTALL | re.IGNORECASE)
WS_RE = re.compile(r"\s+")
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.IGNORECASE | re.DOTALL)
META_DESC_RE = re.compile(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', re.IGNORECASE)
META_KW_RE = re.compile(r'<meta\s+name=["\']keywords["\']\s+content=["\']([^"\']*)["\']', re.IGNORECASE)
H_RE = re.compile(r"<h([1-3])[^>]*>(.*?)</h\1>", re.DOTALL | re.IGNORECASE)
IMG_RE = re.compile(r'<img[^>]*src=["\']([^"\']+)["\'][^>]*(?:alt=["\']([^"\']*)["\'])?', re.IGNORECASE)


def clean(text: str) -> str:
    text = SCRIPT_RE.sub(" ", text)
    text = STYLE_RE.sub(" ", text)
    text = TAG_RE.sub(" ", text)
    text = html.unescape(text)
    return WS_RE.sub(" ", text).strip()


def parse(path: str, raw: str) -> dict:
    title = TITLE_RE.search(raw)
    desc = META_DESC_RE.search(raw)
    kw = META_KW_RE.search(raw)
    headings = [{"level": int(m.group(1)), "text": clean(m.group(2))} for m in H_RE.finditer(raw)]
    images = [{"src": m.group(1), "alt": m.group(2) or ""} for m in IMG_RE.finditer(raw)]
    text = clean(raw)
    return {
        "path": path,
        "title": clean(title.group(1)) if title else "",
        "description": desc.group(1) if desc else "",
        "keywords": kw.group(1) if kw else "",
        "headings": headings[:60],
        "images": images[:60],
        "text": text[:20000],
    }


def main():
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
        for path, raw in ex.map(fetch, ALL):
            if raw:
                results[path] = parse(path, raw)
                print(f"OK  {path}")
            else:
                print(f"FAIL {path}")
    (PARSED / "all.json").write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {len(results)} pages to {PARSED}/all.json")


if __name__ == "__main__":
    main()
