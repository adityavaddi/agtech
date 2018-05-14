
var SearchState = function(searchText,textInputFocus,isListShowResults) {
     this.searchText = searchText;
     this.textInputFocus = textInputFocus;
     this.isListShowResults = isListShowResults;


    this.setIsListShowResults = function(isListShowResults) {
        this.isListShowResults = isListShowResults;
    }

    this.setSearchText = function(searchText) {
        this.searchText = searchText;
    }
    this.setTextInputFocus = function(textInputFocus) {
        this.textInputFocus = textInputFocus;
    }


    this.getSearchText = function() {
        return this.searchText;
    }

    this.getIsListShowResults = function() {
        return this.isListShowResults;
    }

    this.getTextInputFocus = function() {
        return this.textInputFocus;
    }

}
module.exports = SearchState;
