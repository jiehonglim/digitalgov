import { journey, step } from '@elastic/synthetics';

journey('IRAS - MyTax Portal', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://mytax.iras.gov.sg/login/selection');
    await page.title();
  });
});
