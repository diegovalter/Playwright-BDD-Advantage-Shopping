import {expect} from '@playwright/test'
export default class ProductPage {
    constructor(page) {
        this.page = page
        this.productName = 'a.productName'
    }

    async verificarProductPage(){
         await expect(page).toHaveURL(/.*category\/Laptops\/1.*/)
    }

    async selecionarProduto(produto) {
        await this.page.locator(this.productName, { hasText: produto }).click()
    }
}

