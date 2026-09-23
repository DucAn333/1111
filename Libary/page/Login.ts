import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  logoImage: Locator;
  brandingIllustration: Locator;
  loginHeading: Locator;
  loginSubtitle: Locator;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  forgotPasswordLink: Locator;
  invalidCredentialsAlert: Locator;
  RequiredError : Locator;
  footerText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logoImage = page.locator('.orangehrm-login-branding img');
    this.brandingIllustration = page.locator('.orangehrm-login-branding-row img');

    this.loginHeading = page.getByRole('heading', { name: 'Login' });
    this.loginSubtitle = page.getByText('Enter your username and password to continue');

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');

    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.forgotPasswordLink = page.getByText('Forgot your password?');

    this.invalidCredentialsAlert = page.locator('.oxd-alert-content-text');

    this.RequiredError = page.locator('.oxd-alert.oxd-alert--error');

   

    this.footerText = page.locator('.orangehrm-login-footer, .orangehrm-copyright');
  }


}