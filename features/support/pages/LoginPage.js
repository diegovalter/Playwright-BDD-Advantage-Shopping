export default class LoginPage {
    constructor(page) {
        this.page = page
        this.userButton = '#menuUser'
        this.username = '#username'
        this.password = '#password'
        this.loginButton = '#sign_in_btn'
    }
    // Funções que interagem com os elementos da página

    async acessarLogin() {
    await this.page.goto('https://www.advantageonlineshopping.com/#/')
  }

    async user_login(){
        await this.page.click(this.userButton)
    }

    async login(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
    }

    async clicar_no_botao(){
        await this.page.click(this.loginButton)
    }

}