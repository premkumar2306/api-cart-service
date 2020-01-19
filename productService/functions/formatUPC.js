// Input is 12 digits UPC codes
module.exports = function(upc) {
    if (!upc) return;
    if (upc.split(".").length === 2){ // 12502650805.0 -> 012502650805 (techdata)
        return `0${upc.match(/^\d{11}/gm)}`;
    }
    if (upc.length === 11) return `0${upc}`;
    if (upc.length === 12) return upc;
    // if (upc > "01") return upc;
    if (upc.length === 13) {        // 0012502648307 -> 012502648307  (ingram)
        return upc.substr(1);
    }
}