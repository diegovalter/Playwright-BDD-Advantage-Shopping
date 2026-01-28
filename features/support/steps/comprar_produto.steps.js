import {Given, When, Then} from '@cucumber/cucumber'
import HomePage from '../pages/HomePage.js'
// import LoginPage from '../pages/LoginPage.js'
import CategoryPage from '../pages/CategoryPage.js'
import ProductPage from '../pages/ProductPage.js'
import ProductDetailPage from '../pages/ProductDetailPage.js'
import CartPage from '../pages/CartPage.js'

let homePage, categoryPage, productPage, productDetailPage, cartPage

Given("que estou na tela de Produtos", async() => {
    homePage = new HomePage(page)

    await page.goto('https://www.advantageonlineshopping.com/#/')
})

Then("seleciono a categoria laptops", async() =>{
    categoryPage = new CategoryPage(page)
    await categoryPage.getTituloCategoria()
    await categoryPage.acessarLaptops()
})

When("seleciono o {string}", async(produto) => {
    productPage = new ProductPage(page)
    await productPage.verificarProductPage()
    await productPage.selecionarProduto(produto)

})

Then("verifico o {string} e o {string}", async(produto, preco) => {
    productDetailPage = new ProductDetailPage(page)
    await productDetailPage.verificarProduto(produto, preco)

})

When("adiciono o produto no carrinho", async() => {
    await productDetailPage.adicionarAoCarrinho()

})

Then("exibe o numero 1 no icone do carrinho", async() => {
    cartPage = new CartPage(page)
    await cartPage.validarBadgeCarrinho()

})

When("clico no carrinho", async() => {
    await cartPage.abrirCarrinho()

})

Then("verifico o {string} e o {string} no carrinho", async(produto, preco) => {
    await cartPage.verificarProdutoNoCarrinho(produto, preco)

})