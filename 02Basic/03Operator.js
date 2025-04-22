
var listingPrice = 700;
var sellingPrice = 500;

var discountPercent = (listingPrice - sellingPrice) / listingPrice * 100;

console.log("Discount Percentage is :", + discountPercent );

displayPercentage = Math.round(discountPercent);
console.log(displayPercentage +"%off" );

var result = listingPrice > sellingPrice;

console.log(typeof result);