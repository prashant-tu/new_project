import { Page } from "@playwright/test";

export class Actions{

    constructor(public page:Page) {
        this.page = page;
    }

    async visitURL(url:string){
        await this.page.goto(url)
    }

    async click(element:string){
        await this.page.locator(element).click()
    }

    async getTxt(element:string):Promise<string>{
        return await this.page.locator(element).innerText()
    }

    async fillText(element:string, text:string){
        await this.page.locator(element).fill(text)
    }

    async waitNavigation(url:string){
        await this.page.waitForURL(url)
    }

}