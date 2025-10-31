import { journey, step } from '@elastic/synthetics';

journey('LTA - Road Tax Portal', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://vrl.lta.gov.sg/lta/vrl/action/pubfunc?ID=RoadTaxEnquiry');
    await page.title();
  });
});
