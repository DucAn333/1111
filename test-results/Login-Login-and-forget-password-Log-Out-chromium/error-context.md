# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login and forget password >> Log Out
- Location: tests\Login.spec.ts:37:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('.orangehrm-login-branding img')
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" locator('.orangehrm-login-branding img') with timeout 5000ms
  - waiting for locator('.orangehrm-login-branding img')

```

# Test source

```ts
  1  | import {expect, test } from '../Libary/fixture/index';
  2  | import Data from '../Data/login.json';
  3  | import { LoginHelper } from '../Libary/helper/Login';
  4  | import { LinkURL, Account } from '../Data/account';
  5  | 
  6  | 
  7  | test.describe('Login and forget password', () => {
  8  | test.beforeEach(async ({ page , getLinkHelper}) => {
  9  |     await page.route('**/*', (route) => {
  10 |       const url = route.request().url();
  11 | 
  12 |       if (
  13 |         url.includes('googlesyndication') ||
  14 |         url.includes('doubleclick') ||
  15 |         url.includes('googleads')
  16 |       ) {
  17 |         route.abort();
  18 |       } else {
  19 |         route.continue();
  20 |       }
  21 |     });
  22 |     await getLinkHelper.goto_URL();
  23 |     await expect(page).toHaveURL(LinkURL);
  24 |     });
  25 | for (const dataLogin of Data.login_data) {
  26 |   test(`${dataLogin.id} - ${dataLogin.description}`, async ({loginHelper, loginPage }) => {
  27 |     await loginHelper.login(dataLogin.username, dataLogin.password);
  28 |     if (dataLogin.expected === 'success'){
  29 |       await expect(loginPage.loginButton).not.toBeVisible({timeout: 5000});
  30 |     }
  31 |     else{
  32 |       await expect(loginPage.loginButton).toBeVisible({timeout: 5000});
  33 |     }
  34 | 
  35 | });
  36 | }
  37 | test('Log Out', async ({ loginPage, forgotPasswordPage, mainMenuPage , loginHelper, getLinkHelper }) => {
  38 |     //await getLinkHelper.goto_URL();
  39 |     await loginHelper.login(Account[0].username , Account[0].password);
> 40 |     await expect(forgotPasswordPage.logo_image).not.toBeVisible({timeout: 5000});
     |                                                     ^ Error: expect(locator).not.toBeVisible() failed
  41 |     await mainMenuPage.user_dropdown_menu.click();
  42 |     await mainMenuPage.dropdown_item_logout.click({timeout:5000});
  43 |     await expect(loginPage.loginButton).toBeVisible();
  44 |     
  45 |   });
  46 | test('Forget Password', async ({ loginPage, forgotPasswordPage ,forgotPasswordHelper }) => {
  47 |     await loginPage.forgotPasswordLink.click({timeout: 5000});
  48 |     await expect(forgotPasswordPage.logo_image).not.toBeVisible({timeout: 5000});
  49 | 
  50 |     await forgotPasswordHelper.fillEmailToRequest();
  51 |     //await expect(forgotPasswordPage.reset_success_message).toBeVisible({timeout: 5000});
  52 |     // web khong phan hoi khi nhan lay lai mat khau, nen khong the kiem tra duoc message
  53 |     
  54 |   });
  55 |   
  56 | 
  57 | 
  58 |  });
  59 | 
```