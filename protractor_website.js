let pageObjectFile = require('./Pages/pageObject.js')

module.exports = function () {

    /************************************************************T his method opens the webpage ************************************************/
    this.Given(/^Open "([^"]*)" website$/, function (url, callback) {
        pageObjectFile.OpenWebUrl(url).then(function () {
            callback();
        }, function (err) {
            callback("error is >> " + err)
        });
    });

    /************************************************************ This method clicks on button *************************************************/
    this.When(/^User click on "([^"]*)" button$/, function (button, callback) {
        pageObjectFile.clickOnButton(button).then(function () {
            callback();
        }, function (err) {
            callback("error is >>> " + err)
        })

    });

    /***************************************************** This Method verifies page Test ******************************************************/
    this.Then(/^Verify that User is redirected to the "([^"]*)" page$/, function (browserTitle, callback) {
        pageObjectFile.verifyPage(browserTitle).then(function () {
            callback();
        }, function (err) {
            callback("error is >>> " + err)
        })
    })

}; // end of main function
