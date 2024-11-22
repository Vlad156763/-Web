/*TODO: завдання для сайту з резюме
2. Використовуючи результати лабораторної роботи №2 додати валідацію (перевірку) тексту, введеного у поля форми резюме студента.
 Код валідації розмістити як вбудований вихідний код в тілі сторінки. 
Виводити помилки, знайдені в результаті перевірки, у вигляді діалогового вікна:
перевіряти наявність у полі «Ім’я» символів, відмінних від українських чи англійських літер;
перевіряти, чи відповідає зміст поля «Електронна пошта» формату адреси електронної пошти (symbols@symbols.symbols);
перевіряти, чи складається зміст, введений в поле «Телефон» тільки з арабських цифр, пробілів та  символів "+", "-", "(", ")";
визначати довжину поля «Текст повідомлення» та виводити її в окремий блок під формою.*/

const buttons = document.getElementsByClassName("button");
let NameCorrect = false;
let EmailCorrect = false;
let NumCorrect = false;
//цикл перевіряє поля які ввів користувач і призначає відповідно true/false до глобальних змінних
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("input", function() {
        let form = document.getElementById("CommentsForm");
        //отримую обєкти форми
        let Name = form.Name;
        let Email = form.Email;
        let Number = form.Number;
        //регулярні вирази для валідації введеного тексту
        const NameTest = /^([a-zA-Zа-яА-ЯІієЄїЇґҐ' -]){2,40}$/;
        const EmailTest = /^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        const NumberTest = /^\+?[0-9 -]{10,40}$/;

        let correctOrNot_Name = document.getElementById("correctOrNot_Name");
        let correctOrot_Email = document.getElementById("correctOrot_Email");
        let correctOrNot_Number = document.getElementById("correctOrNot_Number");

        //перевіряю коментар і якщо він правильний, інформую користувача
        if(NameTest.test(Name.value)) {
            correctOrNot_Name.innerHTML = '<img class="iconSorNot" src="../Images/v.png" alt="icon">'; NameCorrect = true;
        } else {
            correctOrNot_Name.innerHTML = '<img class="iconSorNot" src="../Images/x.png" alt="icon">'; NameCorrect = false;
        }
        //перевірка пошти
        if(EmailTest.test(Email.value))    {         
            correctOrot_Email.innerHTML = '<img class="iconSorNot" src="../Images/v.png" alt="icon">'; EmailCorrect = true;
        } else {
            correctOrot_Email.innerHTML = '<img class="iconSorNot" src="../Images/x.png" alt="icon">'; EmailCorrect = false;
        }
        //перевірка номеру 
        if(NumberTest.test(Number.value))  {
            correctOrNot_Number.innerHTML = '<img class="iconSorNot" src="../Images/v.png" alt="icon">'; NumCorrect = true;
        }
        else { correctOrNot_Number.innerHTML = '<img class="iconSorNot" src="../Images/x.png" alt="icon">'; NumCorrect = false;
        }
    });
}
//встановлюю для форми подію submit 
document.getElementById("CommentsForm").addEventListener("submit", function() {
    //якщо валідація пройшла успішно і коментар має хоча б один символ, викликаю віджет для повідомлення про успіх
    if(NameCorrect && EmailCorrect && NumCorrect && comment.value.length > 0) {
        widgetSuccess();
    } // якщо ні - віджет про помилку
    else {widgetError();}
    
});
//віджет успіху
function widgetSuccess() {
    //виводжу кількість символів коментаря у консоль 
    let form = document.getElementById("CommentsForm");
    let comment = form.comment;
    let commentLengthText = "Коментар:" + " ";
     //коментар
     if (comment.value.length == 1) 
        console.info(commentLengthText + "1" + " " + "символ");
    else if(comment.value.length >= 2 && comment.value.length <= 4) 
        console.info(commentLengthText + comment.value.length + " " + "символи");
    else {
        console.info(commentLengthText + comment.value.length + " " + "символів");
    }
    let widgetSuccess = document.getElementById("widgetSuccess");
    widgetSuccess.style.display = "block"; 
    //поступово з'являється (таймер треба для рендерингу)
    setTimeout(() => { widgetSuccess.style.opacity = "1";}, 10);       
    //через 2.5сек зникає
    setTimeout(() => {
        widgetSuccess.style.opacity = "0";
        //цей таймер треба щоб приховати блок
        setTimeout(() => {  widgetSuccess.style.display = "none";}, 200);
    }, 2500);
}
let Widget_Error = document.getElementById("widgetError");
//віджет помилки
function widgetError() {
    for(let i = 0; i < buttons.length; i++) buttons[i].disabled = true;
    document.getElementById("Submit").disabled = true;
    Widget_Error.style.display = "block";
}
document.getElementById("buttonWidgetError").addEventListener("click", function() {
    Widget_Error.style.display = "none";
    document.getElementById("Submit").disabled = false;
    for(let i = 0; i < buttons.length; i++) buttons[i].disabled = false;
});