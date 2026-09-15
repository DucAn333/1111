import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account } from '../Data/account';
import { LoginPage } from '../Libary/page/Login';


test.describe('Login and forget password', () => {
 

test('Login', async ({ loginHelper, loginPage , getLinkHelper}) => {
  await getLinkHelper.goto_URL();
  await loginHelper.login();
  await expect(loginPage.logoImage).not.toBeVisible({timeout: 5000});
  });
  test('Forget Password', async ({ loginPage, forgotPasswordPage, getLinkHelper,forgotPasswordHelper }) => {
    await getLinkHelper.goto_URL();
    await loginPage.forgotPasswordLink.click({timeout: 5000});
    await expect(forgotPasswordPage.logo_image).not.toBeVisible({timeout: 5000});

    await forgotPasswordHelper.fillEmailToRequest();
    await expect(forgotPasswordPage.reset_success_message).toBeVisible({timeout: 5000});
    
    });  
});
