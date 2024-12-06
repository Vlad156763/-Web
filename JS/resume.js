function ci(infoMsg) {
    console.info(infoMsg);
}
function setCorrectMargin() {
    const allInfoBlock = document.getElementById("AllInfoBlock");
    const fromMe = document.getElementById("From_me");
    if (window.innerWidth >= 992) {
        let height = allInfoBlock.offsetHeight;
        fromMe.style.marginTop = (height - 600) + "px";
        fromMe.style.height = (460 + (600 - height)) + "px";
    } else {
        fromMe.style.marginTop = "0px";
    }
}
window.addEventListener("resize", setCorrectMargin);
setCorrectMargin();

//регулярні вирази для валідації введеного тексту
const NameTest = /^([a-zA-Zа-яА-ЯІієЄїЇґҐ' -]){2,40}$/;
const EmailTest = /^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const NumberTest = /^\+?[0-9 -]{10,40}$/;
const ComentTest = /.+/;
const ArrayTest = [NameTest, EmailTest, NumberTest, ComentTest];
let is_CorrectData = [false, false, false, false];
let inputCom = document.getElementsByClassName("inputCom");

for (let i = 0; i < inputCom.length; i++) {
    inputCom[i].addEventListener("input", function () {
        if (ArrayTest[i].test(inputCom[i].value.trim())) {
            inputCom[i].classList.add("has-success");
            inputCom[i].classList.remove("has-error");
            is_CorrectData[i] = true;
        } else {
            inputCom[i].classList.add("has-error");
            inputCom[i].classList.remove("has-success");
            is_CorrectData[i] = false;
        }
    });
}
document.getElementById("ComForm").addEventListener("submit", function () {
    if (is_CorrectData[0] && is_CorrectData[1] && is_CorrectData[2] && is_CorrectData[3]) {
        document.getElementById("widgetSuccess").style.display = "grid";
        setTimeout(function () { document.getElementById("widgetSuccess").style.opacity = "1"; }, 10);
        //через 2.5сек зникає
        setTimeout(function () {
            document.getElementById("widgetSuccess").style.opacity = "0";
            //цей таймер треба щоб приховати блок
            setTimeout(function () { document.getElementById("widgetSuccess").style.display = "none"; }, 200);
        }, 2500);
    } else {
        for (let i = 0; i < inputCom.length; i++) inputCom[i].disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("widgetError").style.display = "grid";
    }
});


document.getElementById("buttonWidgetError").addEventListener("click", function () {
    document.getElementById("widgetError").style.display = "none";
    for (let i = 0; i < inputCom.length; i++) inputCom[i].disabled = false;
    document.getElementById("submit").disabled = false;
});
document.getElementById("widgetError").style = "backdrop-filter: blur(2px);";