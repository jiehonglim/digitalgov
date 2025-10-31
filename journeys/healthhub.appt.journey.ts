import { journey, step } from '@elastic/synthetics';

journey('MOH - Healthhub Appt', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://eservices.healthhub.sg/appointments');
    await page.title();
  });
});
