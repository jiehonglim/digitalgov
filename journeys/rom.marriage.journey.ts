import { journey, step } from '@elastic/synthetics';

journey('ROM - Marriage Application', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://www.marriage.gov.sg/civil/marriage-process');
    await page.title();
  });
});
