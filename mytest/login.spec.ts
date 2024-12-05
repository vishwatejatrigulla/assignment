import{test, expect, Browser, Page} from '@playwright/test'
import {webkit,chromium} from 'playwright'

test('login test', async()=> {
    const browser:Browser = await chromium,launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/#")

});


