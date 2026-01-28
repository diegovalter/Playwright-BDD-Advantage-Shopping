export default class HomePage {
  constructor(page) {
    this.page = page
    this.ourProductsLink = 'a[ng-click="gotoElement(\'our_products\')"]'
  }

  async acessar() {
    await this.page.goto('https://www.advantageonlineshopping.com/#/')
  }

  getOurProducts() {
    return this.page.locator(this.ourProductsLink)
  }
}
