import {expect, test } from '../Libary/fixture/index';
import { LinkURL, Account } from '../Data/account';
import createEmployeeData  from '../Data/addEmployee.json';

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

for (const EMP of createEmployeeData.add_employee_data){
test(`${EMP.id} - ${EMP.description}`, async ({ loginHelper, choseMenuHelper , createEmployee,EmployeeList_page}) => {

    await loginHelper.login(Account[0].username, Account[0].password);
    await choseMenuHelper.choosePIM();
    await createEmployee.addEmployee(EMP);
    
  });
}