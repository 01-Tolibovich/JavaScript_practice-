var scores = [60, 50, 60, 58, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 52, 55, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]

var output;

var i = 0;

while (i < scores.length) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log (output);
    i = i + 1;
}

function chekAge() {
    let age = prompt ("Введите ваш возрост");
    let name = prompt ("Введите ваше имя");
    let sex = prompt ("Ваш пол. М или Ж ?");

    if (age >= 18) {
        if (sex == "М" || sex == "м" ) {
            document.write ('<h1 class="title">Добро пожаловать ' + "господин " + name + "</h1>");
            document.write (" Контент загружается, ждите...");
        } else if (sex == "Ж" || sex == "ж" ) {
            document.write ("<h1> Добро пожаловать " + "госпожа " + name + "</h1>");
            document.write (" Контент загружается, ждите...");
        }
        
    } else if ( name == null || name == "") {
        document.write ("<h1> Отмена операции </h1>");
    } else if (age < 18) {
        document.write ("<h1> Не так быстро " + name + "</h1>");
        document.write (" Контент для тебя не доступен!");
    } 
}

chekAge ();