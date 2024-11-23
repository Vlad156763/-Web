/*
3. Перетворити навігаційне меню на сторінках, розроблених в лабораторній роботі №4, на кнопку, при натисканні на яку 
з’являється випадаюче меню зі списком сторінок. Код винести в окремий файл та застосувати на всіх сторінках, що мають меню.
 Впевнитись, що розроблене рішення працює на всіх розмірах екрана, розглянутих в роботі №5.
4. Створити функцію «Цитата дня», що виводить випадкову цитату із заздалегідь заданого масиву висловлювань. 
Винести розроблену функцію в окремий файл та викликати її у підвалі сторінок, розроблених в лабораторній роботі №4.
*/
let PhotoInMenu = document.getElementById("PhotoInMenu");
let PhotoInMainSide = document.getElementById("PhotoInMainSide");
let buttonMenu = document.getElementsByClassName("buttonMenu");
let MenuWidget = document.getElementById("MenuWidget");

let MenuIsActive = true;
document.getElementById("MenuWidget").addEventListener('click',  function() {
    if(MenuIsActive) {
        MenuWidget.style.backgroundColor = "#212436";
        for(let i = 0; i < buttonMenu.length; i++) 
            buttonMenu[i].style.display = "block";
        MenuIsActive = false;
    } else {
        MenuWidget.style.backgroundColor = "rgb(32, 104, 69)";
        for(let i = 0; i < buttonMenu.length; i++) 
            buttonMenu[i].style.display = "none";
        MenuIsActive = true;
    }
});


let mainText = document.getElementById("allInfo");
let TittleText = document.getElementById("title");

function setHTMLAllInfo() {
    TittleText.innerHTML = "Загальна інформація";
    mainText.innerHTML = 
    "Лінус Торвальдс — це ім'я, яке назавжди змінило світ технологій. Він — той самий програміст, який"+
    " створив"+
    " Linux, одну з найважливіших операційних систем у світі. Уявіть собі молодого студента з Фінляндії, який"+
    " просто не міг знайти ідеальну операційну систему для своїх потреб і вирішив створити власну. Те, що"+
    " почалося"+
    " як хобі у 1991 році, перетворилося на глобальний проєкт, який сьогодні використовується мільярдами"+
    " людей."+
    " <br><br>"+
    " <img id='Linux_photo' src='IMAGES/linux.png' alt='Linux'><br> <strong>Логотип Linux</strong>"+
    " <br><br>"+
    " Linux лежить в основі багатьох серверів, суперкомп'ютерів і навіть вашого смартфона, якщо ви"+
    " використовуєте"+
    " Android. А ще Торвальдс розробив Git — систему, якою користуються мільйони програмістів для контролю"+
    " версій"+
    " коду. Його підхід до відкритого програмного забезпечення допоміг створити культуру співпраці серед"+
    " програмістів у всьому світі. <br>"+
    " Лінус — не тільки геній коду, але й натхненник руху відкритого програмного забезпечення. Його внесок"+
    " змінив"+
    " індустрію і продовжує впливати на розвиток технологій."; 
}
function setHTMLBiography() {
    TittleText.innerHTML = "Біографія";
    mainText.innerHTML = 
    "Лінус Бенедикт Торвальдс народився 28 грудня 1969 року в Гельсінкі, Фінляндія. Його батьки, Нільс і Анна"+
    " Торвальдс, були відомими журналістами та політичними активістами. Дід Лінуса по матері, Ларс Торвальдс,"+
    " був"+
    " відомим соціологом. Родина мала інтелектуальне та політично активне тло, що сприяло розвитку критичного"+
    " мислення у Лінуса з юних років. <br>"+
    " Лінус із самого дитинства захоплювався наукою та технологіями. Його інтерес до програмування почався,"+
    " коли в"+
    " 11 років він отримав свій перший комп'ютер — <strong>Commodore VIC-20</strong>. Це була його перша"+
    " платформа"+
    " для"+
    " експериментів і навчання. Лінус почав програмувати, використовуючи прості програми для вирішення"+
    " математичних задач. <br>"+
    " У 1988 році Лінус вступив до Гельсінського університету, де вивчав інформатику. Його інтерес до"+
    " комп'ютерів"+
    " швидко зростав, і він став захоплюватися операційними системами. У цей період Торвальдс активно вивчав"+
    " мови"+
    " програмування і самостійно набирався досвіду в написанні коду. <br>"+
    " Попри свою велику зацікавленість технологіями, Лінус залишався людиною з інтересами за межами"+
    " комп'ютерів."+
    " Він любив читати, захоплювався математикою, а також проводив час з родиною та друзями. Протягом"+
    " студентських"+
    " років Лінус вів досить звичайне життя, приділяючи багато часу навчанню і розвитку власних навичок. <br>"+
    " У 1997 році Лінус переїхав до США разом зі своєю дружиною Танєю, з якою він познайомився у Фінляндії. У"+
    " них"+
    " троє дітей: Патриція, Даніель і Селесте. Родина оселилася в штаті Орегон, де Лінус продовжує жити і"+
    " працювати. <br>"+
    " Попри свою величезну популярність у світі технологій, Лінус веде досить скромний і приватний спосіб"+
    " життя."+
    " Він любить проводити час із родиною, грати у відеоігри та читати книги.";
}
function setHTMLAwards() {
    TittleText.innerHTML = "Нагороди та звання";
    mainText.innerHTML = 
    "Лінус Торвальдс отримав численні нагороди та визнання за свої досягнення в галузі інформаційних"+
    "            технологій"+
    "            та програмного забезпечення. Ось деякі з них:"+
    "            <ol id='awards_and_titles_list'>"+
    "                <li>"+
    "                    <strong>Премія Річарда Столлмана (2001)</strong>: Лінус отримав цю нагороду від Free Software"+
    "                    Foundation за його внесок у розвиток вільного програмного забезпечення. <br><br>"+
    "                </li>"+
    "                <li>"+
    "                    <strong>Премія за технологічні інновації від Інституту Franklin (2012)</strong>: Ця нагорода"+
    "                    була"+
    "                    вручена Лінусу за створення Linux і внесок у розвиток відкритого програмного"+
    "                    забезпечення.<br><br>"+
    "                </li>"+
    "                <li>"+
    "                    <strong>Time 100 (2004)</strong>: Лінус Торвальдс був включений до списку 100 найвпливовіших"+
    "                    людей"+
    "                    світу за версією журналу Time за його роль у розвитку технологій та відкритого програмного"+
    "                    забезпечення.<br><br>"+
    "                </li>"+
    "                <li>"+
    "                    <strong>Премія Мітті (TR100) (2002)</strong>: Цю нагороду Лінус отримав від MIT Technology"+
    "                    Review за"+
    "                    його значний внесок у технологічний прогрес.<br><br>"+
    "                </li>"+
    "                <li>"+
    "                    <strong>Премія Клавдія (2014)</strong>: Лінус був удостоєний цієї нагороди від Linux Foundation"+
    "                    за"+
    "                    його внесок у розвиток ядра Linux і підтримку відкритого програмного забезпечення.<br><br>"+
    "                </li>"+
    "            </ol>"+
    "            Ці нагороди відзначають його великий внесок у розвиток сучасних технологій і програмного забезпечення.";
}
function setHTMLDevLinux() {
    TittleText.innerHTML = "Розробка linux";
    mainText.innerHTML = 
    "Лінус Торвальдс розпочав розробку Linux у 1991 році під час свого навчання в Гельсінському університеті."+
    " Його метою було створення нової операційної системи, яка була б дешевшою і більш доступною для"+
    " користувачів,"+
    " ніж існуючі комерційні системи. <br>"+
    " Спочатку Торвальдс працював над проектом самостійно, використовуючи комп’ютер у своєму гуртожитку. Він"+
    " опублікував першу версію ядра Linux на новинній групі Usenet, де він описав свій проект і запросив інших"+
    " розробників приєднатися до роботи над ним. Це оголошення стало початком відкритого проєкту, який"+
    " привернув"+
    " увагу багатьох програмістів по всьому світу. <br>"+
    " Торвальдс розробляв Linux як ядро, основну частину операційної системи, що управляє ресурсами"+
    " комп'ютера."+
    " Спочатку Linux був сумісний з існуючою системою GNU (GNU's Not Unix), що забезпечувало утиліти і"+
    " бібліотеки,"+
    " необхідні для повноцінної операційної системи. Лінус намагався створити систему, яка була б потужною,"+
    " але в"+
    " той же час легкою у використанні. <br>"+
    " Проект швидко набрав популярність завдяки своїй відкритості та можливості для будь-якого користувача"+
    " долучитися до його розвитку. Торвальдс активно працював над вдосконаленням коду, приймав внески від"+
    " спільноти і постійно оновлював ядро. Розробка Linux стала глобальним колективним зусиллям, що включало"+
    " програмістів з усього світу. <br>"+
    " Лінус Торвальдс організовував і координував розвиток Linux, визначаючи його стратегічний напрямок і"+
    " ухвалюючи ключові рішення щодо розвитку системи. Він також створив і підтримував систему контролю версій"+
    " для"+
    " управління змінами в коді, що дозволило ефективно інтегрувати внески різних розробників. <br>"+
    " Протягом років Linux продовжував розвиватися, стаючи основою для численних дистрибутивів і застосунків."+
    " Торвальдс продовжував грати активну роль у розвитку ядра, забезпечуючи його стабільність і розширюючи"+
    " функціональність. Завдяки його зусиллям Linux став однією з найважливіших операційних систем у світі."
}

document.getElementById("allInfoButton").addEventListener("click", setHTMLAllInfo);
document.getElementById("MenuWidgetallInfoButton").addEventListener("click", setHTMLAllInfo);

document.getElementById("BiographyButton").addEventListener("click", setHTMLBiography);
document.getElementById("MenuWidgetBiographyButton").addEventListener("click", setHTMLBiography);

document.getElementById("nagorodyButton").addEventListener("click", setHTMLAwards);
document.getElementById("MenuWidgetnagorodyButton").addEventListener("click", setHTMLAwards);

document.getElementById("develop_linuxButton").addEventListener('click', setHTMLDevLinux);
document.getElementById("MenuWidgetdevelop_linuxButton").addEventListener('click', setHTMLDevLinux);

//цитата дня
let arrayQuote = [
    "Життя – це мить, використай її.",
    "Ти сильніший, ніж думаєш.",
    "Зміни починаються з тебе.",
    "Щастя – це вибір.",
    "Невдачі – це сходинки до успіху.",
    "Мрій, плануй, дій.",
    "Краса в простоті.",
    "Віра творить дива.",
    "Новий день – новий шанс.",
    "Тихий голос серця найгучніший.",
    "Немає меж для тих, хто вірить.",
    "Легше, ніж здається.",
    "Почни зараз, не завтра."
];
function getRandomNumber(min, max) { //[min; max)
    return Math.floor(Math.random() * (max - min)) + min;
}
let quoteDay = document.getElementById("quoteDay");
document.getElementById("TextQuoteDay").innerHTML = arrayQuote[getRandomNumber(0,13)];
document.getElementById("closeButtonQuoteDay").addEventListener("click", function () {
    quoteDay.style.display = "none";
});

 let quoteDayMobile = document.getElementById("quoteDayMobile");
document.getElementById("TextQuoteDayMobile").innerHTML = arrayQuote[getRandomNumber(0,13)];
document.getElementById("closeButtonQuoteDayMobile").addEventListener("click", function () {
    quoteDayMobile.style.display = "none";
});