// 
// 
// 
// 
// 
// Ай-ай-ай, спойлеришь себе!!!
// 
// 
// 
// 
// 

const QUOTES = [
    // me and people i call "friends"
    "На карман не намажешь", // me
    "Если долго мучаться, что-нибудь устанется", // me
    "<i class=\"md-e md-e-telephonereciever\"></i> Pending...", // me
    "Будем знакомы", // me
    "This is your sign! <i class=\"md-e md-e-sparkles\"></i>", // me
    "Опа, какие звёзды красивые", // me
    'Let\'s be friends! <i class="md-e md-e-heartsparkling"></i>', // me
    "Старый знакомой Мистеру Интернет", // 4idar
    "Закопирайтил бездарность", // TMK
    "Udalite mne real life", // Pirogi
    "хайпует плесень", // Pirogi
    "ccccccccccccccccccccccc", // LaytyMiron
    "«Меня, бесят, запятые, в коротких сообщениях", // stysan
    "у меня в мусорныц пакет из чижика а ты такое скидываешь", // me
    "Семь раз попей один раз поешь",
    "Жизнь должна быть оптимизированной: надо минимизировать кол-во страданий и приумножить кол-во хиханьки да хаханьки",
    "Вечно в поиске хорошего хостинга <i class=\"md-e md-e-melting\"></i>",
    "Не выжимайте чайный пакетик", // me

    
    // cool people of the internet
    "Текст не редактировать, информацию в скобках - удалить.", // internet meme
    "Оплата по ранее указанными реквизитам в течение 15 минут после публикации", // internet meme
    "Муся, это ты?", // internet meme
    "А помните интернет?", // internet meme
    "conputer", // internet meme
    'я забыб <i class="md-e md-e-sob"></i>', // internet meme
    "эыыы я первый надо нопесать", // умный комментатор №303
    "Сервера не упали, а легли поспать", // ???
    "Жизнь — это череда событий мешающих сидеть в компьютере", // ???
    "Свобода одного человека заканчивается там, где начинается свобода другого.", // ???
    "Don't listen to people, do things your own way", // ???
    "I am cringe, but I am free.", // ???
    "По фигне пишите, не занят", // ???
    "В семье не без битмейкера",
    "Путь к величию далёк, путь до холодильника близок", // tiktok meme
    "Мастер спорта международного класса по френдзоне, чемпион мира по фразе «ты такой хороший друг», доктор наук по безответной симпатии", // tiktok meme
    "Откажитесь от прямохождения и членораздельной речи",
    
    // movies & cartoons
    "5 минут — полёт нормальный!", // M&tB
    "Ура, ещё один ремонт!", // M&tB
    "I didn't know you could play the piano", // tADC
    "I only know like two songs", // tADC
    
    // books
    "2 + 2 = 5", // 1984, George Orwell
    "Обычно ты не глупый. Почему глупый, вопрос?", // Project "Hail Mary"
    "Fist My Bump!", // Project "Hail Mary"
    "Amaze! Amaze! Amaze!", // Project "Hail Mary"
    "Grace Rocky save stars.", // Project "Hail Mary"
    
    // games
    "MANKIND IS DEAD. BLOOD IS FUEL. HELL IS FULL.", // ULTRAKILL
    "Big call! Because the panda is big!", // Freedom Planet
    "Bakunawa will rise", // Freedom Planet 2
    "Press on the 7th beat no matter what!", // Rhythm Doctor
    "Eight!", // Rhythm Doctor
    "I ******* love air-conditioning.", // OMORI
    "Oh, if you could only love!", // Rubato
    
    // other
    "Сегодня без цитаты ребят", // meta-quote
    "↑←✓€→®™—ѣ²ѵіѳ′[§°£₽„“³$‰∞”¹‘×©↓ß«", // Ilya Birman
    "Арабская лигатура Бисмиллах Ар-Рахман Ар-Рахим  ﷽", // Unicode Consortium
    "‧₊˚♪𝄞࿐₊˚⊹", // kaomoji
    "𐔌˙.", // kaomoji

    // no category
    "Гигантская акула с распахнутой пастью изображена в воде на фоне корабля. Внизу картинки крупным шрифтом написано слово «Балбес».",
    "Ты ещё скажи что у тебя на стене не висит мой портрет",
    "Риски риски я люблю ириски",
    "чуки-чуки поко-поко чуки-поко-пон :3", // https://www.youtube.com/watch?v=pHakQLbGjaU
    "wow wow wow", // earthbound
    "Don't ask me, I don't know how anything about me works",
    "Я посмотрю на ваше поведение", // учителя
    "19 января 2038, 03:14:07", // конец света (она же проблема 2038 года)
    "Your email is about to get awesome", // https://markdown-here.com/
    "Надеюсь, что добро когда-нибудь победит",
    
    // special
    "С ДНЁМ РОЖДЕНИЯ!!! <i class=\"md-e md-e-excited\"></i>", // happy bday
]


function randomFromDate(random_range = 1, date = new Date()) {
    const seedStr = date.toISOString().slice(0, 10); // YYYY-MM-DD

    switch (seedStr) {
        case "2026-05-02":
            var out = random_range + 0
            console.log(seedStr, out)
            return out;
        
        default:
            let hash = 0;
            for (let i = 0; i < seedStr.length; i++) {
                hash = (hash * 31 + seedStr.charCodeAt(i)) >>> 0;
            }

            const x = Math.sin(hash + 3) * 43758.5453123;
            var out = Math.floor((x - Math.floor(x)) * random_range)

            // console.log(seedStr, hash, x, out)

            return out;
    }
}


// const randomQuoteIndex = Math.floor(randomFromDate(QUOTES.length - 1, new Date("2026-05-02")));
const randomQuoteIndex = Math.floor(randomFromDate(QUOTES.length - 1));
const chosenQuoteText = QUOTES[randomQuoteIndex];


document.getElementById("quoteText").innerHTML = '«' + chosenQuoteText + '»';
