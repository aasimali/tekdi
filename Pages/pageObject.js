var locator = require('./../Locators/locators.json');
var test_data = require('./../TestData/test_data.json');
const { browser } = require('protractor');

let pageObject = function () {

    var deferred = protractor.promise.defer();
    var expected = protractor.ExpectedConditions;
    Max_TimeOut = 30000;

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
                button = element(by.xpath("" + locator.viewOnGitHub + ""));
                break;

            case 'Auction':
                button = element(by.xpath("" + locator.auctionButton + ""));
                break;

            default:
                console.log('No case match')
        }
        await browser.wait(expected.visibilityOf(button, Max_TimeOut));
        await button.click();
        await browser.sleep(3000); //just for testing, in realtime, we don't need it
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