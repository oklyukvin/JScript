
//Скрипты для задания №1
    function f(size) {//функция позволяет по клику обрабатывать путь локации маленькой картинки и заменять его на путь большой картинки, при условии что название у файлов разного размера идентичное
    var replace = size.src.replace("small", "big");//замена название папки с картинками
    var bigPic = document.getElementById("big");//задаем путь отображения элемента в версте страницы
    bigPic.src = replace;//производим отображение
}

    function imageError() {
    document.querySelector('#error').innerHTML="test";//не смог понять в чем проблема с данной функцией, она просто не сработала, а отладчик ругает за то что innerHTML является null.
}



//Скрипты и переменные для задания №2
    var picMass = ["1.jpg", "2.jpg", "4.jpg"]; curInd = 0; img = document.getElementById("slider");

    function forward() {
    (curInd == picMass.length-1) ? curInd = 0 : curInd++; //проверяем индекс картинки в массиве и если он не последний, то увеличиваем инкриментом индекс, если последний, то переопределяем его на 0 индекс.
    img.src = "img/big/" + picMass[curInd]
}

    function back() {
    (curInd == 0) ? curInd = picMass.length-1 : curInd--; //аналогично переопределяем, но в обратную сторону.
    img.src = "img/big/" + picMass[curInd]
}