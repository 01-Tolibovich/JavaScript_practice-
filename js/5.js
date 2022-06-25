function cluck (times) {
    var num = times;
    while (num > 0) {
        display ("cluck");
        num = num - 1;
    }
}

function thingamajig (size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display ("clank");
    } else if (size == 1) {
        display ("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        cluck (facky);
    }
}

function display (output) {
    console.log (output);
    cluckCounter = cluckCounter + 1;
}

var cluckCounter = 0;
thingamajig (7);
console.log (cluckCounter);