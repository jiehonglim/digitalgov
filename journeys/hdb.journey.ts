import { journey, step } from '@elastic/synthetics';

journey('HDB - MyDoc@HDB', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://services2.hdb.gov.sg/webapp/BE01AWMyDoc/BE01SMyDoc');
    // You can do a simple assertion or leave as just page load
    await page.title();
  });
});
