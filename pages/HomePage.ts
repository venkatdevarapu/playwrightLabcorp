import {type Locator, type Page} from '@playwright/test'
export class HomePage{
    readonly page: Page;
    readonly indTab: Locator;
    readonly providers: Locator;
    readonly hso: Locator;
    readonly bioPharma: Locator;

    constructor(page: Page){
        this.page = page;
        this.indTab = page.locator("xpath=//a[contains(text(),'Individuals & Patients')]");
        this.providers = page.locator("xpath=//a[contains(text(),'Providers')]");
        this.hso = page.locator("xpath=//a[contains(text(),'Health Systems & Organizations')]");
        this.bioPharma = page.locator("xpath=//a[contains(text(),'Biopharma')]");
    }

    async clickIndTab(): Promise<void>{
        await this.indTab.click();
    }

    async clickProvidersTab(): Promise<void>{
        await this.providers.click();
    }

    async clickHsoTab(): Promise<void>{
        await this.hso.click();
    }

    async clickBioPharmaTab(): Promise<void>{
        await this.bioPharma.click();
    }
}