import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account } from '../Data/account';
import user from '../Data/addUserEmployee.json'
import createEmployeeData  from '../Data/addEmployee.json';



// do cấu trúc trang web phải tạo 1 employee trước, nếu không tất cả các case tạo user sẽ bị lỗi

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
  test('TC_addEmployee_00 - tạo một employee trước', async ({ loginHelper, choseMenuHelper , EmployeeList_page , createEmployee}) => {
    const Emp = createEmployeeData.add_employee_data[0];
    await loginHelper.login(Account[0].username , Account[0].password);
    await choseMenuHelper.choosePIM();
    await createEmployee.addEmployee(Emp);
  });
  
  for (const newUser of user.add_user_data){
  test(`${newUser.id} - ${newUser.description}`, async ({  choseMenuHelper , mainMenuPage, addUserHelper , SystemUsersPage , loginHelper}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  
  await addUserHelper.addUser(newUser);
  if (newUser.expected === 'true'){
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
  await expect (SystemUsersPage.add_btn).toBeVisible({timeout:5000});
  });
  
  test('TC_addUser_28 - Go to  Admin', async ({ loginHelper, choseMenuHelper , mainMenuPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible();
  await mainMenuPage.sidebar_collapse_btn.click();
  });
});
test.describe('End to end add user', () => {
  test.beforeEach(async ({ page , getLinkHelper, loginHelper, choseMenuHelper, mainMenuPage }) => {
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
    await loginHelper.login(Account[0].username , Account[0].password);
    await choseMenuHelper.chooseAdmin();
    await expect(mainMenuPage.header_admin).toBeVisible();
    await mainMenuPage.sidebar_collapse_btn.click();
     
  });
test('TC_addUser_29 - Tạo tài khoản hợp lệ', async ({ loginHelper, choseMenuHelper , mainMenuPage , addUserHelper , SystemUsersPage}) => {
  const testUser = user.add_user_data[0]
  
  
  await addUserHelper.addUser(testUser);
  await expect(SystemUsersPage.confirm_password_input).not.toBeVisible();

});
test('TC_addUser_30 - chỉnh sửa tài khoản', async ({ loginHelper, choseMenuHelper , mainMenuPage , addUserHelper , SystemUsersPage}) => {
  
  
});
test('TC_addUser_31 - xoá tài khoản', async ({ loginHelper, choseMenuHelper , mainMenuPage , addUserHelper , SystemUsersPage}) => {
 
});
});

