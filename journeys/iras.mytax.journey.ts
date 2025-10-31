import { journey, step } from '@elastic/synthetics';

journey('Iras Mytax', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://mytax.iras.gov.sg/login/selection');
    await page.title();
  });
});
