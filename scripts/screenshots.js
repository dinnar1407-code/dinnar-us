const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = '/Users/wheat/Projects/dinnar-us/public/images/screenshots';
fs.mkdirSync(OUT, { recursive: true });

const urls = [
  { url: 'http://www.dinnar.cn/', name: 'homepage' },
  { url: 'http://www.dinnar.cn/en/', name: 'homepage_en' },
  { url: 'http://www.dinnar.cn/inspection/html/?391.html', name: 'product_watch_backcover' },
  { url: 'http://www.dinnar.cn/inspection/html/?1098.html', name: 'product_aci_s1000' },
  { url: 'http://www.dinnar.cn/function/html/?490.html', name: 'product_watch_light' },
  { url: 'http://www.dinnar.cn/electron/class/', name: 'industry_electron' },
  { url: 'http://www.dinnar.cn/energy/class/', name: 'industry_energy' },
  { url: 'http://www.dinnar.cn/semiconductor/class/', name: 'industry_semiconductor' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const { url, name } of urls) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    try {
      console.log(`📸 ${name}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
      console.log(`  ✅ ${name}.png`);
    } catch (e) {
      console.log(`  ❌ ${name}: ${e.message}`);
    }
    await ctx.close();
  }
  await browser.close();
  console.log(`Done. ${OUT}/`);
})();
