import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account } from '../Data/account';



test.describe('Login and forget password', () => {
test.beforeEach(async ({ page }) => {
    await page.route('**/*', (route) => {
      const url = route.request().url();

      if (
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('googleads')
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });
  });
  
test('Go to  Admin', async ({ loginHelper, loginPage , getLinkHelper, choseMenuHelper , mainMenuPage}) => {
  await getLinkHelper.goto_URL();
  await loginHelper.login(Account[0].username , Account[0].password);
  await expect(loginPage.logoImage).not.toBeVisible({timeout: 5000});
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  });
});
