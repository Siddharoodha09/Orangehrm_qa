import { Page, Locator } from '@playwright/test';
export class PimPage {
    private readonly menuItem: Locator;
    private readonly empText: Locator;
 
    constructor(private readonly page: Page) {
        // this.menuItem = page.locator('.oxd-main-menu-item').filter({ hasText: 'PIM' });
        this.menuItem = page.locator('.oxd-main-menu-item').filter({ hasText: 'PIM' })
        this.empText = page.getByText('Employee Information', { exact: true })
    }
    async pimMenu(): Promise<void> {
        await this.menuItem.click();
    }
    getPimMenu(): Locator {
        return this.menuItem;
    }
    getempInfo(): Locator {
        return this.empText;
    }
}