import { After, Before, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium } from "playwright"

setDefaultTimeout(60 * 1000)

let browser, context, page

Before(async () => {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext()
    page = await context.newPage()
    global.page = await context.newPage()
    
})

After(async () => {
    //await page.close()
    await context.close()
    await browser.close()
})