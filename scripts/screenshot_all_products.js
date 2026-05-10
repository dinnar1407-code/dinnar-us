const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, '..', 'public/images/products');
fs.mkdirSync(OUT, { recursive: true });

const BASE = 'http://www.dinnar.cn';
const products = [
  // inspection
  { slug: 'p-391', url: '/inspection/html/?391.html', name: 'p-391' },
  { slug: 'p-511', url: '/inspection/html/?511.html', name: 'p-511' },
  { slug: 'p-527', url: '/inspection/html/?527.html', name: 'p-527' },
  { slug: 'p-589', url: '/inspection/html/?589.html', name: 'p-589' },
  { slug: 'p-602', url: '/inspection/html/?602.html', name: 'p-602' },
  { slug: 'p-631', url: '/inspection/html/?631.html', name: 'p-631' },
  { slug: 'p-644', url: '/inspection/html/?644.html', name: 'p-644' },
  { slug: 'p-657', url: '/inspection/html/?657.html', name: 'p-657' },
  { slug: 'p-671', url: '/inspection/html/?671.html', name: 'p-671' },
  { slug: 'p-741', url: '/inspection/html/?741.html', name: 'p-741' },
  { slug: 'p-754', url: '/inspection/html/?754.html', name: 'p-754' },
  { slug: 'p-778', url: '/inspection/html/?778.html', name: 'p-778' },
  { slug: 'p-790', url: '/inspection/html/?790.html', name: 'p-790' },
  { slug: 'p-803', url: '/inspection/html/?803.html', name: 'p-803' },
  { slug: 'p-843', url: '/inspection/html/?843.html', name: 'p-843' },
  { slug: 'p-844', url: '/inspection/html/?844.html', name: 'p-844' },
  { slug: 'p-870', url: '/inspection/html/?870.html', name: 'p-870' },
  { slug: 'p-909', url: '/inspection/html/?909.html', name: 'p-909' },
  { slug: 'p-933', url: '/inspection/html/?933.html', name: 'p-933' },
  { slug: 'p-953', url: '/inspection/html/?953.html', name: 'p-953' },
  { slug: 'p-965', url: '/inspection/html/?965.html', name: 'p-965' },
  { slug: 'p-1098', url: '/inspection/html/?1098.html', name: 'p-1098' },
  // function
  { slug: 'p-490', url: '/function/html/?490.html', name: 'p-490' },
  { slug: 'p-683', url: '/function/html/?683.html', name: 'p-683' },
  { slug: 'p-695', url: '/function/html/?695.html', name: 'p-695' },
  { slug: 'p-706', url: '/function/html/?706.html', name: 'p-706' },
  { slug: 'p-718', url: '/function/html/?718.html', name: 'p-718' },
  { slug: 'p-910', url: '/function/html/?910.html', name: 'p-910' },
  // intelligence
  { slug: 'p-549', url: '/intelligence/html/?549.html', name: 'p-549' },
  { slug: 'p-817', url: '/intelligence/html/?817.html', name: 'p-817' },
  { slug: 'p-830', url: '/intelligence/html/?830.html', name: 'p-830' },
  { slug: 'p-845', url: '/intelligence/html/?845.html', name: 'p-845' },
  { slug: 'p-859', url: '/intelligence/html/?859.html', name: 'p-859' },
  // measuration
  { slug: 'p-562', url: '/measuration/html/?562.html', name: 'p-562' },
  { slug: 'p-575', url: '/measuration/html/?575.html', name: 'p-575' },
  { slug: 'p-616', url: '/measuration/html/?616.html', name: 'p-616' },
  { slug: 'p-766', url: '/measuration/html/?766.html', name: 'p-766' },
  // software
  { slug: 'p-1072', url: '/software/html/?1072.html', name: 'p-1072' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const total = products.length;
  let done = 0;
  
  for (const { slug, url, name } of products) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    try {
      await page.goto(BASE + url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
      done++;
      console.log(`[${done}/${total}] ✅ ${slug}`);
    } catch (e) {
      done++;
      console.log(`[${done}/${total}] ❌ ${slug}: ${e.message}`);
    }
    await ctx.close();
  }
  
  await browser.close();
  console.log(`\nDone. ${done}/${total} screenshots in ${OUT}/`);
})();
