function bark (name, weight) {
    if (weight > 20) {
        console.log (name + " says WOOF WOOF");
    } else {
        console.log (name + " says woof woof");
    }
}

bark ("rover", 23);
bark ("spot", 13);
bark ("spike", 53);
bark ("lady", 17);


function whatShellWear (temp) {
    if (temp < 60) {
        console.log ("Wear a jacket");
    } else if (temp < 70) {
        console.log ("Wear a sweater");
    } else {
        console.log ("Wear a t-shirt");
    }
}

whatShellWear (50);
whatShellWear (60);
whatShellWear (80);

function dolt (param) {
    param = 2;
}

var test = 1;
dolt (test);
console.log(test);