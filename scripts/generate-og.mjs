// Renders the Open Graph images (1200×630) and the Apple touch icon into public/.
// Run with `npm run og` after changing the name, role or headline in src/data/profile.ts.
// Uses playwright-core; set CHROMIUM_PATH if Chromium isn't found automatically.
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const name = 'Ravi Shankar Dubey';
const role = 'Software Engineer · Angular · TypeScript · Node.js';
const site = 'ravishankardubey.in';

const editorial = `
<body style="margin:0;width:1200px;height:630px;background:#f6f3ee;color:#1b1a17;font-family:Georgia,serif;display:flex;flex-direction:column;justify-content:space-between;padding:80px;box-sizing:border-box">
  <div style="font:600 22px/1 system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#9a4321">${role}</div>
  <div style="font-size:92px;line-height:1.02;letter-spacing:-.02em">${name}</div>
  <div style="display:flex;justify-content:space-between;font:400 26px system-ui,sans-serif;color:#56524a;border-top:2px solid #e2dcd2;padding-top:28px"><span>VMware by Broadcom · Bangalore</span><span>${site}</span></div>
</body>`;

const consoleCard = `
<body style="margin:0;width:1200px;height:630px;background:#0f1115;color:#e7e9ee;font-family:ui-monospace,Menlo,monospace;display:flex;flex-direction:column;justify-content:space-between;padding:80px;box-sizing:border-box">
  <div style="font-size:26px;color:#f5a524">~/rsdubey</div>
  <div>
    <div style="font-size:28px;color:#f5a524;margin-bottom:20px">&gt; hello, world. I'm</div>
    <div style="font:700 96px/1 system-ui,sans-serif;letter-spacing:-.03em">${name}</div>
  </div>
  <div style="display:flex;justify-content:space-between;font-size:24px;color:#9aa3b2;border-top:1px solid #2e3441;padding-top:28px"><span>Software Engineer · Bangalore</span><span>${site}/console</span></div>
</body>`;

const icon = `
<body style="margin:0;width:180px;height:180px;background:#1b1a17;display:grid;place-items:center">
  <div style="font:600 84px Georgia,serif;color:#f0b08e">RD</div>
</body>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
await mkdir('public/og', { recursive: true });

for (const [html, path, width, height] of [
  [editorial, 'public/og/editorial.png', 1200, 630],
  [consoleCard, 'public/og/console.png', 1200, 630],
  [icon, 'public/apple-touch-icon.png', 180, 180],
]) {
  await page.setViewportSize({ width, height });
  await page.setContent(html);
  await page.screenshot({ path, type: 'png' });
  console.log(`wrote ${path}`);
}

await browser.close();
