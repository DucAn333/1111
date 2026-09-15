import {expect, test } from '../LIB/fixture/index';
import { LinkURL, Account } from '../Data/account';


test.describe('Login Page Tests', () => {
 

test('has title', async ({ loginHelper, loginPage }) => {
   await loginHelper.goto_URL();
   await loginHelper.login();
   await expect(loginPage.logoImage).not.toBeVisible({timeout: 5000});
  });
});
