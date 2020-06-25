import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });


    it('should get free spins', () => {
        page.navigateTo();
        expect(page.getClaimPanel()).toContain('Free Spins');
    });


    it('should display success on click', async () => {
        page.navigateTo();
        await page.getClaimButton().click();
        expect(page.getClaimPanel()).toContain('You\'ve 50 Free Spins to use now');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
