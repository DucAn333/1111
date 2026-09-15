# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login and forget password >> Forget Password
- Location: tests\Login.spec.ts:14:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-alert-content-text')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-alert-content-text') with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestResetPassword" navigation to finish...

```

```yaml
- heading "Reset Password" [level=6]
- separator
- paragraph:
  - paragraph: Please enter your username to identify your account to reset your password
- text:  Username
- textbox "Username": Admin
- separator
- button "Cancel"
- button "Reset Password"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import {expect, test } from '../LIB/fixture/index';
  2  | import { LinkURL, Account } from '../Data/account';
  3  | import { LoginPage } from '../LIB/page/Login';
  4  | 
  5  | 
  6  | test.describe('Login and forget password', () => {
  7  |  
  8  | 
  9  | test('Login', async ({ loginHelper, loginPage , getLinkHelper}) => {
  10 |   await getLinkHelper.goto_URL();
  11 |   await loginHelper.login();
  12 |   await expect(loginPage.logoImage).not.toBeVisible({timeout: 5000});
  13 |   });
  14 |   test('Forget Password', async ({ loginPage, forgotPasswordPage, getLinkHelper,forgotPasswordHelper }) => {
  15 |     await getLinkHelper.goto_URL();
  16 |     await loginPage.forgotPasswordLink.click({timeout: 5000});
  17 |     await expect(forgotPasswordPage.logo_image).not.toBeVisible({timeout: 5000});
  18 | 
  19 |     await forgotPasswordHelper.fillEmailToRequest();
> 20 |     await expect(forgotPasswordPage.reset_success_message).toBeVisible({timeout: 5000});
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  21 |     
  22 |     });  
  23 | });
  24 | 
```