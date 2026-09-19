import { LoginData } from '../test-data/loginData';
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { MyInfo } from '../pages/myInfo_personal';
//  import * as allure from 'allure-js-commons'
 
test.describe("Orange HRM demo automation testing", () => {
    test.beforeEach(async ({ page }) => {
        // Custom fixter
        const username =LoginData.username;
        const password = LoginData.password;
        const loginPage =new LoginPage(page);
        // Open OrangeHRM login page
        await loginPage.open();
        // Login to OrangeHRM
        await loginPage.login(username, password);
        //dashboard displayed
    })
   test('my info open', async ({ page }) => {
     //opening myInfo
       const infop = new MyInfo(page);
       //selectig menu
        await infop.InfoMenu();
        //emplyee name input
        await infop.getempname();
        // employee details
        await infop.getempDetails();
        //nationality
        await infop.getnationality();
        //matrimony
        await infop.getmatrital_status();
        //personal details
        await infop.get_personald();
        //custom fields
        //await infop.get_customfield()
        //add extra details for attachind a file
        await infop.add_button();
    });
});
 