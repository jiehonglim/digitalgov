import { journey, step } from '@elastic/synthetics';

journey('NEA - Weather Forecast', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://www.weather.gov.sg/weather-forecast-24hrforecast/');
    await page.title();
  });
});
