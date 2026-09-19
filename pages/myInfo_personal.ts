import { Page, Locator } from '@playwright/test';
export class MyInfo {
    private readonly myInfo: Locator;
    private readonly empname1: Locator;
    private readonly empname2: Locator;
    private readonly empname3: Locator;
    private readonly empid: Locator;
    private readonly otherid: Locator;
    private readonly dl_id: Locator;
    private readonly dl_exp: Locator;
    private readonly nationality: Locator;
    private readonly nationality1: Locator;
    private readonly maritalStatus: Locator;
    private readonly maritalStatus_single: Locator;
    private readonly dob: Locator;
    private readonly gender: Locator;
    private readonly personal_details: Locator;
    private readonly attachmentadd1: Locator;
    private readonly attachmentadd2: Locator;
    private readonly uploadfile: Locator;
    private readonly comment: Locator;
    private readonly submit_btn: Locator;
    //private readonly blood_type: Locator;
    //private readonly blood_type_selector: Locator;
    //private readonly test_field: Locator;
 
 
    constructor(private readonly page: Page) {
        this.myInfo = page.locator('//span[text()="My Info"]');
        this.empname1 = page.locator('input[name="firstName"]');
        this.empname2 = page.locator('input[name="middleName"]');
        this.empname3 = page.locator('input[name="lastName"]');
        this.empid = page.locator('(//input[contains(@class,"oxd-input")])[5]');
        this.otherid = page.locator('(//input[contains(@class,"oxd-input")])[6]');
        this.dl_id = page.locator('(//input[contains(@class,"oxd-input")])[7]');
        this.dl_exp = page.locator('(//input[contains(@class,"oxd-input")])[8]');
        this.nationality = page.locator('.oxd-input-group').filter({ hasText: 'Nationality' }).locator('.oxd-select-text');
        this.nationality1 = page.locator('.oxd-select-option').filter({ hasText: /^Indian$/ });
        this.maritalStatus = page.locator('.oxd-input-group').filter({ hasText: 'Marital Status' }).locator('.oxd-select-text');
        this.maritalStatus_single = page.locator('.oxd-select-option').filter({ hasText: /^Single$/ });
        this.dob = page.locator('.oxd-input-group').filter({ hasText: 'Date of Birth' }).locator('input');
        this.gender = page.locator('//label[normalize-space()="Female"]');
        this.personal_details = page.locator('(//button[@type="submit"])[1]');
        this.attachmentadd1 = page.locator('//h6[text()="Attachments"]');
        this.attachmentadd2 =page.locator('//button[normalize-space()="Add"]');
        this.uploadfile =page.locator('input[type="file"]');
        this.comment =page.locator('textarea');
        this.submit_btn =page.locator('(//button[@type="submit"])[last()]');
        //this.blood_type =page.locator('.oxd-input-group').filter({ hasText: 'Blood Type' }).locator('.oxd-select-text');
        //this.blood_type_selector =page.locator('//html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]');
        // this.blood_type_selector =page.locator('.oxd-select-option').filter({ hasText: /^A+$/ });
        //this.test_field =page.locator('input[name="Test_Field"]');
 
    }
    async InfoMenu(): Promise<void> {
        await this.myInfo.click();
    }
    async getempname(): Promise<void> {
        await this.empname1.fill('ABC');
        await this.empname2.fill('DEF');
        await this.empname3.fill('GH');
    }
    async getempDetails(): Promise<void> {
        await this.empid.fill('EMP1001');
        await this.otherid.fill('OTH1001');
        await this.dl_id.fill('DL123456');
        await this.dl_exp.fill('2028-12-31');
    }
    async getnationality():Promise<void>{
        await this.nationality.click();
        await this.nationality1.click();
    }
     async getmatrital_status():Promise<void>{
        await this.maritalStatus.click();
        await this.maritalStatus_single.click();
    }
    async get_personald():Promise<void>{
        await this.dob.click();
        await this.gender.click();
        await this.personal_details.click();
    }
    // async get_customfield():Promise<void>{
    //     await this.blood_type.click();
    //     await this.blood_type_selector.click()
    //     await this.test_field.fill('abccc');
       
    // }
    async add_button():Promise<void>{
        await this.attachmentadd1.scrollIntoViewIfNeeded();
        await this.attachmentadd2.click();
        await this.uploadfile.setInputFiles('C:/Users/Siddharoodham/Downloads/sample-500kb.pdf');
        await this.comment.fill('Document uploaded using Playwright');
        await this.submit_btn.click();
    }
 
}


