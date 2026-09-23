import {expect, test } from '../../Libary/fixture/index';
import { LinkURL, Account  } from '../../Data/endCourece/data';


test.beforeEach(async ({ page , getLinkHelper }) => {
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
    await getLinkHelper.goto_URL();
    await expect(page).toHaveURL(LinkURL, {timeout: 5000}); 
});
test('TC_01 - đăng nhập thành công', async ({ loginHelper,loginPage}) => {
    const account = Account[0];
    await loginHelper.login(account.username , account.password);
    await expect (loginPage.RequiredError).toBeHidden({timeout:5000});
});
test('TC_02 - đăng nhập sai mật khẩu', async ({ loginHelper,loginPage}) => {
    const account = Account[1];
    await loginHelper.login(account.username , account.password);
    await expect (loginPage.RequiredError).toBeVisible({timeout:5000});
});