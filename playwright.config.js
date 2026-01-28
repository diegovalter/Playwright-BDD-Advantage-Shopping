import { defineConfig } from "playwright/test"

export default defineConfig({
    testeDir: './features',
    retries: 1,
    use: {
        baseURL: 'https://www.advantageonlineshopping.com/#/',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    }
})
