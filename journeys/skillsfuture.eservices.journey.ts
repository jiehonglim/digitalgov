import { journey, step } from '@elastic/synthetics';

journey('SSG - SkillsFuture - E-Services', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://www.myskillsfuture.gov.sg/content/portal/en/e-services/e-services.html');
    await page.title();
  });
});
