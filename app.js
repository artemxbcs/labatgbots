let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по жанру комедии");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по жанру драме");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
	else {
		tg.MainButton.setText("Вывести информацию по жанру приключения");
        item = "3";
        tg.MainButton.show();
    }
});

function sendRecipeData(recipeId) {
    Telegram.WebApp.sendData(JSON.stringify({ item_id: recipeId }));
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});