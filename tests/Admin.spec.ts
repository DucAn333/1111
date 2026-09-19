import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account } from '../Data/account';
import employee from '../Data/addEmployee.json'

test.describe('Create employee', () => {
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
  test(`${user.id} - ${user.description}`, async ({  choseMenuHelper , mainMenuPage, addEmployeeHelper , SystemUsersPage , loginHelper}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  
  await addEmployeeHelper.addUser(user);
  if (user.expected === 'true'){
    await expect(SystemUsersPage.confirm_password_input).not.toBeVisible();
  }
  else{
    await expect(SystemUsersPage.confirm_password_input).toBeVisible();
  }
  });
  }
  test('TC_addUser_27 - Huỷ tạo tài khoản khi nhấn btn Cancel', async ({ loginHelper, choseMenuHelper , mainMenuPage ,SystemUsersPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  await SystemUsersPage.add_btn.click();
  await SystemUsersPage.cancel_btn.click();
  expect (SystemUsersPage.add_btn).toBeVisible();
  });
  
  test('TC_addUser_28 - Go to  Admin', async ({ loginHelper, choseMenuHelper , mainMenuPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  });
});
test.describe('End to end add user', () => {
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
test('TC_addUser_29 - Tạo tài khoản hợp lệ', async ({ loginHelper, choseMenuHelper , mainMenuPage , addEmployeeHelper , SystemUsersPage}) => {
  const user = employee.add_user_data[0]
  await loginHelper.login(Account[0].username , Account[0].password);
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  
  await addEmployeeHelper.addUser(user);
  await expect(SystemUsersPage.confirm_password_input).not.toBeVisible();

});
test('TC_addUser_30 - chỉnh sửa tài khoản', async ({ loginHelper, choseMenuHelper , mainMenuPage , addEmployeeHelper , SystemUsersPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);

});
test('TC_addUser_31 - xoá tài khoản', async ({ loginHelper, choseMenuHelper , mainMenuPage , addEmployeeHelper , SystemUsersPage}) => {
 
});
});
// cho go to admin lên beor each, 
