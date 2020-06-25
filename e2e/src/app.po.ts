import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    getTitleText(): Promise<string> {
        return element(by.css('app-root .rad2-page-container')).getText() as Promise<string>;
    }

    getClaimPanel(): Promise<string> {
        return element(by.css('app-root .rad2-claim-container')).getText() as Promise<string>;
    }

    getClaimButton() {
        return element(by.css('app-root .rad2-claim-container button.rad2-claim-button'))
    }
}
