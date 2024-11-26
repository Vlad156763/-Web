let NameCorrect = false;
let EmailCorrect = false;
let NumCorrect = false;
//регулярні вирази для валідації введеного тексту
const NameTest = /^([a-zA-Zа-яА-ЯІієЄїЇґҐ' -]){2,40}$/;
const EmailTest = /^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const NumberTest = /^\+?[0-9 -]{10,40}$/;

$(".button").on("input", function() {
    //перевіряю коментар і якщо він правильний, інформую користувача
    if(NameTest.test($('#Name').val())) { $("#correctOrNot_Name").html('<img class="iconSorNot" src="Images/greenIcon.png" alt="icon">'); NameCorrect = true; } 
    else { $("#correctOrNot_Name").html('<img class="iconSorNot" src="Images/redIcon.png" alt="icon">'); NameCorrect = false; }
    //перевірка пошти
    if(EmailTest.test($('#Email').val())) { $("#correctOrot_Email").html('<img class="iconSorNot" src="Images/greenIcon.png" alt="icon">'); EmailCorrect = true; } 
    else { $("#correctOrot_Email").html('<img class="iconSorNot" src="Images/redIcon.png" alt="icon">'); EmailCorrect = false; }
    //перевірка номеру 
    if(NumberTest.test($('#Number').val())) { $("#correctOrNot_Number").html('<img class="iconSorNot" src="Images/greenIcon.png" alt="icon">');  NumCorrect = true; }
    else { $('#correctOrNot_Number').html('<img class="iconSorNot" src="Images/redIcon.png" alt="icon">'); NumCorrect = false; }
});
//встановлюю для форми подію submit 
$('#CommentsForm').on('submit', function() {
    //якщо валідація пройшла успішно і коментар має хоча б один символ, викликаю віджет для повідомлення про успіх
    if(NameCorrect && EmailCorrect && NumCorrect && $('#comment').val().length > 0) { widgetSuccess(); } // якщо ні - віджет про помилку
    else { widgetError(); }
});
//віджет успіху
function widgetSuccess() {
    //виводжу кількість символів коментаря у консоль 
    let commentLengthText = "Коментар:" + " ";
    if ($('#comment').val().length == 1) console.info(commentLengthText + "1" + " " + "символ");
    else if($('#comment').val().length >= 2 && $('#comment').val().length <= 4) console.info(commentLengthText + $('#comment').val().length + " " + "символи");
    else { console.info(commentLengthText + $('#comment').val().length + " " + "символів"); }
    $('#widgetSuccess').css("display", "block");
    //поступово з'являється (таймер треба для рендерингу)
    setTimeout(function () { $('#widgetSuccess').css("opacity", "1");}, 10);       
    //через 2.5сек зникає
    setTimeout(function() {
        $('#widgetSuccess').css("opacity", "0");
        //цей таймер треба щоб приховати блок
        setTimeout(function() { $('#widgetSuccess').css("display", "none"); }, 200);
    }, 2500);
}
//віджет помилки
function widgetError() {
    $(".button").prop("disabled", true);
    $("#Submit").prop("disabled", true);
    $('#widgetError').css("display", "block");
}
$("#buttonWidgetError").click(function() {
    $('#widgetError').css("display", "none");
    $("#Submit").prop("disabled", false);
    $(".button").prop("disabled", false);     
});