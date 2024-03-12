import { Page } from "@playwright/test";

// exports.LoginPage =
export class pageElements {
    elements: string;
    bookStore: string;
    elementsDD: string;
    textBox: string;
    loginOption: string;
    nameInput: string;
    passwordInput: string;
    emailInput: string;
    currentAddInput: string;
    permanentAddInput: string;
    btnSubmit: string;
    linkForgot: string;
    linkSSO: string;
    btnLogin: string;
    errorMessage: string;

    constructor(public page:Page) {
        this.page = page;
        this.elements = "//h5[text()='Elements']//ancestor::div[@class='card-body']"
        this.bookStore = "//h5[text()='Book Store Application']//ancestor::div[@class='card-body']"
        this.elementsDD = "//div[@class='accordion']/div[1]"
        this.textBox = "//li[@class='btn btn-light ' and @id='item-0']//following::span[text()='Text Box']"
        this.loginOption = "//li[@class='btn btn-light ' and @id='item-0']//following::span[text()='Login']"
        this.nameInput = "#userName"
        this.passwordInput = "#password"
        this.emailInput = "#userEmail"
        this.currentAddInput = "#currentAddress"
        this.permanentAddInput = "#permanentAddress"
        this.btnSubmit = "#submit"
        this.btnLogin = "#login"
        this.errorMessage = "#name"
    }
}