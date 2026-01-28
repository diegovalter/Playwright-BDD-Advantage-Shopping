import {expect} from '@playwright/test'
export default class CartPage {
  constructor(page) {
    this.page = page

    this.cartBadge = 'span.cart'
    this.checkoutButton = '#checkOutPopUp'
    this.productName = 'h3.ng-binding'
    this.productPrice = 'span.totalValue'
  }

    async validarBadgeCarrinho() {
    await expect(this.page.locator(this.cartBadge).first()).toHaveText('1')
  }

  async abrirCarrinho() {
    await this.page.locator(this.checkoutButton).click()
  }

  async verificarProdutoNoCarrinho(produto, preco) {
    await expect(this.page.locator(this.productName, { hasText: produto })).toBeVisible()
    await expect(this.page.locator(this.productPrice)).toHaveText(preco)
  }
}
