"use strict";
function secureRandomui_page() {
  this.numberOfStringsToGenerateTextBox = element(by.id("num_strings"));
  this.submitButton = element(by.css("input[type=\"submit\"]"));
  this.numberOfStringsGenerated = element.all(by.repeater("hash in hashes"));
  this.messageValidation = element(by.css(".container.ng-scope h1"));
}
module.exports = new secureRandomui_page();
