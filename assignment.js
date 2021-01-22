

function kilometerToMeter(km) {
    var kilometer = parseFloat(km);
    if (kilometer < 0){
        console.log("Your input is invalid, please pass a positive number");
    } else {
        return kilometer*1000;
    }
    
}

function budgetCalculator(watch,mobile,laptop) {
    var watchQty = parseInt(watch);
    var mobileQty = parseInt(mobile);
    var laptopQty = parseInt(laptop);
    if (watchQty < 0 || mobileQty < 0 || laptopQty < 0) {
        console.log("Quantity cannot be negative, please pass the correct value");
    } else {
        totalPrice = watchQty*50 + mobileQty*100 + laptopQty*500;
        return totalPrice;
    }
}

function hotelCost(days) {
    days = parseInt(days);
    var price = 0;
    if (days > 0 && days < 11) {
        price = days * 100;
    } else if ( days < 21) {
        var firstPart = 1000;
        var remaining = days - 10;
        price = (remaining * 80) + firstPart;
    } else {
        var remaining = days - 20;
        var firstPart = 1800;
        price = (remaining * 50) + firstPart;
    }
    return price;
}


function megaFriend(names) {
    if(names.length == 0) {
        return "Please enter some names"
    } else {
        var maxLength = names[0].length
        var pos = 0;
        for(var i = 1; i < names.length; i++ ) {
            if(names[i].length > maxLength ) {
                maxLength = names[i].length;
                pos = i;
            }
        }

        return names[pos];
    }
}


