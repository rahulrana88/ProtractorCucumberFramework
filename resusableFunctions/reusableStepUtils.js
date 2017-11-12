var reusablePageUtils = function() {

    this.openAndNavigateToURL = function (url) {
        return browser.get(url);
    }
    this.clickElement = function (element){
        return element.click();
    }
    this.enterText = function (element,value){
        return element.sendKeys(value);
    }
    this.verifyText = function (element,expectedValue){
        element.getText().then(function(actualValue){
            return expect(actualValue).to.equal(expectedValue);
        });
    }
}
module.exports = new reusablePageUtils();