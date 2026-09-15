import {expect, test } from '../LIB/fixture/index';
import { LinkURL, Account } from '../Data/account';
import { LoginPage } from '../LIB/page/Login';


test.describe('Login and forget password', () => {
 

test('Login', async ({ loginHelper, loginPage }) => {
   await loginHelper.goto_URL();
   await loginHelper.login();
   await expect(loginPage.logoImage).not.toBeVisible({timeout: 5000});
  });
test('Forget Password', async ({ loginHelper, loginPage }) => {
  await loginHelper.goto_URL();
  await loginPage.forgotPasswordLink.click({timeout: 5000});
  });  
});
