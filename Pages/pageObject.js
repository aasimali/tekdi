var locator = require('./../Locators/locators.json');
var test_data = require('./../TestData/test_data.json');
var GenericMethod = require('./genericMethods');
var deferred = protractor.promise.defer();
var expected = protractor.ExpectedConditions;
var Max_TimeOut = 30000;

let pageObject = function () {

    this.OpenWebUrl = async function (url) {
        switch (url) {
            case 'protractor':
                url = test_data.protractor;
                break;

            case 'osians':
                url = test_data.osians;
                break;

            default:
                console.log('No case match')
        }

        await browser.get(url);
        deferred.fulfill();
    }

    this.clickOnButton = async function (button) {
        switch (button) {
            case 'View on GitHub':
                button = GenericMethod.SetLocator(locator.viewOnGitHub);
                break;

            case 'Auction':
                button = GenericMethod.SetLocator(locator.auctionButton);
                break;

            default:
                console.log('No case match')
        }
        await browser.wait(expected.visibilityOf(button, Max_TimeOut));
        await browser.actions().mouseMove(button).perform();
        await button.click();
        deferred.fulfill();
    }

    this.verifyPage = async function (browserTitle) {
        switch (browserTitle) {
            case 'GitHub':
                browser.waitForAngularEnabled(false);
                actualText = 'GitHub - angular/protractor: E2E test framework for Angular apps';
                break;

            case 'Auction':
                actualText = "Osian's Auction House - All Auctions since 1997 | Osian's";
                break;

            default:
                console.log('No case match')
        }

        browserTitle = await browser.getTitle();

        if (browserTitle === actualText) {
            deferred.fulfill();
        }
        else {
            deferred.reject("Browser title mismatch");
        }
    }

}
module.exports = new pageObject;