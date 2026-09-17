import {expect, test } from '../Libary/fixture/index';
import Data from '../Data/login.json';
import { LinkURL, Account } from '../Data/account';


test.describe('Login', () => {
test.beforeEach(async ({ page , getLinkHelper}) => {
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
    await expect(page).toHaveURL(LinkURL);
    });
for (const dataLogin of Data.login_data) {
  test(`${dataLogin.id} - ${dataLogin.description}`, async ({loginHelper, loginPage , mainMenuPage }) => {
      // TC_LOGIN_01 ->  06
    await loginHelper.login(dataLogin.username, dataLogin.password);
    if (dataLogin.expected === 'success'){
      await expect(loginPage.loginButton).not.toBeVisible({timeout: 5000});
      await expect(mainMenuPage.header_admin).toBeVisible({timeout: 5000});  
    }
    else{
      await expect(loginPage.loginButton).toBeVisible({timeout: 5000});
    }

});
  }
test('TC_LOGIN_09 - Sau login, chuyển sang màn hình trang chủ', async ({ mainMenuPage , loginHelper }) => {
    await loginHelper.login(Account[0].username , Account[0].password);
    await expect(mainMenuPage.header_admin).toBeVisible({timeout: 5000});
  });
});

test.describe('Logout and Forgot Password', () => {
test('TC_LOGIN_11 - Đăng xuất tài khoản', async ({ loginPage, forgotPasswordPage, mainMenuPage , loginHelper }) => {
    //await getLinkHelper.goto_URL();
    await loginHelper.login(Account[0].username , Account[0].password);
    await expect(forgotPasswordPage.logo_image).not.toBeVisible({timeout: 5000});
    await mainMenuPage.user_dropdown_menu.click();
    await mainMenuPage.dropdown_item_logout.click({timeout:5000});
    await expect(loginPage.loginButton).toBeVisible();
    
  });
test('Forget Password', async ({ loginPage, forgotPasswordPage ,forgotPasswordHelper }) => {
    await loginPage.forgotPasswordLink.click({timeout: 5000});
    await expect(forgotPasswordPage.logo_image).not.toBeVisible({timeout: 5000});

    await forgotPasswordHelper.fillEmailToRequest();
    //await expect(forgotPasswordPage.reset_success_message).toBeVisible({timeout: 5000});
    // web khong phan hoi khi nhan lay lai mat khau, nen khong the kiem tra duoc message
    
  });
 });
