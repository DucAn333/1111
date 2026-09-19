import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account } from '../Data/account';
import employee from '../Data/addEmployee.json'


test.describe('Login and forget password', () => {
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
     await expect(page).toHaveURL(LinkURL);
  });
  
test('Go to  Admin', async ({ loginHelper, choseMenuHelper , mainMenuPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  });
});
test.describe('Login and forget password', () => {
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
     await expect(page).toHaveURL(LinkURL);
  });
  for (const user of employee.add_user_data){
  test(`${user.id} - ${user.description}`, async ({ loginHelper, choseMenuHelper , mainMenuPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();

    
  });
  }
});

