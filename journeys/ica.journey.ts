import { journey, step } from '@elastic/synthetics';

journey('ICA - Apply for Travel Document', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://eservices.ica.gov.sg/esvclandingpage/apples');
    // You can do a simple assertion or leave as just page load
    await page.title();
  });
});
