import { journey, step } from '@elastic/synthetics';

journey('MINDEF - NS Portal', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://www.ns.gov.sg/web/login');
    await page.title();
  });
});
