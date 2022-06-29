

function chekAge() {
    let age = smoke.prompt ("Введите ваш возрост");
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
