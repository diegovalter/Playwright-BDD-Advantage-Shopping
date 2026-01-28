import {expect} from '@playwright/test'
export default class ProductDetailPage {
  constructor(page) {
    this.page = page

    this.addToCartButton = 'button[name="save_to_cart"]'
  }

  async verificarProduto(produto, preco) {
    await expect(this.page.getByRole('heading', { name: produto })).toBeVisible()
    await expect(this.page.getByRole('heading', { name: preco })).toBeVisible()
  }

  async adicionarAoCarrinho() {
    await this.page.locator(this.addToCartButton).click()
  }
}
