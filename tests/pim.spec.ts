
import { LoginData } from '../test-data/loginData';
import { test, expect } from '@playwright/test'

import { PimPage } from '../pages/PIM';
import { LoginPage } from '../pages/LoginPage';

test.describe("Orange HRM demo automation testing", () => {
    test.beforeEach(async ({ page }) => {
        const username = LoginData.username;
        const password = LoginData.password;
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(username, password);
    })



    test('Pim open', async ({ page }) => {
        //PIM
        const pim = new PimPage(page);
        await pim.pimMenu();
        // await expect(pim).toHaveCount(1);
        // click pim
        await expect(page).toHaveURL(/pim/);
        await expect(pim.getPimMenu()).toBeVisible()
    });
    test('Find employee section and open it', async ({ page }) => {
        // Find PIM menu
        const pim = new PimPage(page);
        await pim.pimMenu();
        // Verify Employee Information section
        await expect(pim.getempInfo()).toBeVisible();
    })
})
