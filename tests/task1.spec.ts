import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:100/');

  await expect(page).toHaveTitle(/vtiger CRM - Commercial Open Source CRM/);
 // await expect(page).toMatchAriaSnapshot('src="include/images/vtiger-crm.gif"');
});

test('Validate Login', async ({ page }) => {
  
  await page.locator("//input[@name='user_name']").fill('Admin');
  await page.locator("//input[@name='user_password']").fill('admin');
  await page.locator("//button[@name='Login']").click();

 });

test('New Lead', async ({ page }) => {
    test.setTimeout(60000);
await page.click('text= New lead');
await expect(page).toHaveTitle(/Lead Information/);
await page.locator("//input[@name='firstname']").fill('Sanyogita');
await page.locator("//input[@name='phone']").fill('9898989898');
await page.locator("//input[@name='lastname']").fill('Suryawanshi');
await page.locator("//input[@name='mobile']").fill('9898989898');
await page.locator("//input[@name='company']").fill('INFY');
await page.locator("//input[@name='fax']").fill('9898989898');
await page.locator("//input[@name='designation']").fill('QA');
await page.locator("//input[@name='email']").fill('suryawanshi@gmail.com');

});
