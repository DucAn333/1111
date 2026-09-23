import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account  } from '../Data/account';
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
    await expect(page).toHaveURL(LinkURL, {timeout: 5000});
     
  });
  test('TC_addEmployee_00 - tạo một employee trước', async ({ loginHelper, choseMenuHelper , createEmployee}) => {
    const Emp = createEmployeeData.add_employee_data[0];
    await loginHelper.login(Account[0].username , Account[0].password);
    await choseMenuHelper.choosePIM();
    await createEmployee.addEmployee(Emp);
  });
  
  for (const newUser of user.add_user_data){
  test(`${newUser.id} - ${newUser.description}`, async ({  choseMenuHelper , mainMenuPage, addUserHelper , SystemUsersPage , loginHelper}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible({timeout: 5000});
  await mainMenuPage.sidebar_collapse_btn.click();
  
  await addUserHelper.addUser(newUser);
  if (newUser.expected === 'true'){
    await expect(SystemUsersPage.confirm_password_input).not.toBeVisible({timeout:5000});
  }
  else{
    await expect(SystemUsersPage.confirm_password_input).toBeVisible({timeout:5000});
  }
  });
  }
  
  
  test('TC_addUser_28 - Go to  Admin', async ({ loginHelper, choseMenuHelper , mainMenuPage}) => {
  await loginHelper.login(Account[0].username , Account[0].password);
  
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible({timeout: 5000});
  await mainMenuPage.sidebar_collapse_btn.click();
  });
});
test.describe('End to end add user', () => {
  test.beforeEach(async ({ page , getLinkHelper, loginHelper }) => {
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
    await expect(page).toHaveURL(LinkURL, {timeout: 5000});
    await loginHelper.login(Account[0].username , Account[0].password);
     
  });
  const testUser = user.add_user_data[0];
test('TC_addEmployee_00 - tạo một employee trước', async ({  choseMenuHelper , createEmployee}) => {
    const Emp = createEmployeeData.add_employee_data[0];
    // tương tự, phải tạo 1 employee trước
    await choseMenuHelper.choosePIM();
    await createEmployee.addEmployee(Emp);
  });
test('TC_addUser_29 - Tạo tài khoản hợp lệ', async ({  addUserHelper  ,choseMenuHelper , mainMenuPage}) => {
  await choseMenuHelper.chooseAdmin();
  await expect(mainMenuPage.header_admin).toBeVisible({timeout: 5000});
  await mainMenuPage.sidebar_collapse_btn.click();
  await addUserHelper.addUser(testUser);
});

test('TC_addUser_30 - chỉnh sửa tài khoản', async ({ choseMenuHelper , userHelper}) => {
  
  await choseMenuHelper.chooseAdmin();
  await userHelper.editUser(testUser);
  //await userHelper.findUser(testUser)
  
});
test('TC_addUser_31 - xoá tài khoản', async ({choseMenuHelper , userHelper, SystemUsersPage }) => {
  await choseMenuHelper.chooseAdmin();
  await userHelper.deleteUser(testUser);
  await expect(SystemUsersPage.delete_btn).toBeHidden();;
});
});

