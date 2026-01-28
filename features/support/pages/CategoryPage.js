export default class CategoryPage {
  constructor(page) {
    this.page = page
    this.laptopsCard = '#laptopsImg'
    this.categoryTitle = 'h3.categoryTitle'
  }

    getTituloCategoria() {
    return this.page.locator(this.categoryTitle)
  }

  async acessarLaptops() {
    await this.page.locator(this.laptopsCard).click()
  }
}

