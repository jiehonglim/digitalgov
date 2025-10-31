import { journey, step } from '@elastic/synthetics';

journey('CPF - Members Statement', ({ page }) => {
  step('Load landing page', async () => {
    await page.goto('https://www.cpf.gov.sg/member/ds/');
    await page.title();
  });
});
