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
    // Me and people i call "friends"
    "На карман не намажешь", // me
    "Если долго мучаться... то ты устанешь", // me
    "Меня, бесят, запятые.", // me
    "📞 Pending...", // me
    "Будем знакомы", // me
    "This is your sign!", // me
    "Опа, какие звёзды красивые", // me
    "Let's be friends!", // me
    "Старый знакомой Мистеру Интернет", // 4idar
    "Закопирайтил бездарность", // TMK
    "Закопирайтил бездарность", // lemongd
    "Udalite mne real life", // Pirogi
    "хайпует плесень", // Pirogi
    "ccccccccccccccccccccccc", // LaytyMiron
    "УРАААААА ТУТ ПАНКИ", // Medal
    
    // The internet or cool people
    "Текст не редактировать, информацию в скобках - удалить.", // the internet
    "Оплата по ранее указанными реквизитам в течение 15 минут после публикации", // the internet
    "А помните интернет?", // the internet
    "эыыы я первый надо нопесать", // the internet
    "Сервера не упали, а легли поспать", // ???
    "Жизнь — это череда событий мешающих сидеть в компьютере", // ???
    "Свобода одного человека заканчивается там, где начинается свобода другого.", // ???
    "never listen to people, they're dumb", // ???
    "do things your own way", // ???
    "I am cringe, but I am free.", // ???
    
    // Movies & Cartoons
    "5 минут — полёт нормальный!", // M&tB
    "Набираем номерок...", // M&tB
    "Ура, ещё один ремонт!", // M&tB
    
    // Books
    "2 + 2 = 5", // 1984, George Orwell
    "Обычно ты не глупый. Почему глупый, вопрос?", // Project "Hail Mary"
    "Fist My Bump!", // Project "Hail Mary"
    "Amaze! Amaze! Amaze!", // Project "Hail Mary"
    "Grace Rocky save stars.", // Project "Hail Mary"
    
    // Games
    "MANKIND IS DEAD", // ULTRAKILL
    "BLOOD IS FUEL", // ULTRAKILL
    "HELL IS FULL", // ULTRAKILL
    "Big call! Because the panda is big!", // Freedom Planet
    "Bakunawa will rise", // Freedom Planet 2
    "Press on the 7th beat no matter what!", // Rhythm Doctor
    "Eight!", // Rhythm Doctor
    "I ******* love air-conditioning.", // OMORI
    "Oh, if you could only love!", // Rubato
    
    // Other
    "↑←✓€→®™—ѣ²ѵіѳ′[§°£₽„“³$‰∞”¹‘×©↓ß«", // Ilya Birman
    "Арабская лигатура Бисмиллах Ар-Рахман Ар-Рахим  ﷽", // Unicode Consortium
    "‧₊˚♪𝄞࿐₊˚⊹", // kaomoji
    "Сегодня без цитаты.", // meta

    // Special
    "С ДНЁМ РОЖДЕНИЯ!!!",
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

            console.log(seedStr, hash, x, out)

            return out;
    }
}


// const randomQuoteIndex = Math.floor(randomFromDate(QUOTES.length - 1, new Date("2026-05-02")));
const randomQuoteIndex = Math.floor(randomFromDate(QUOTES.length - 1));
const chosenQuoteText = QUOTES[randomQuoteIndex];


document.getElementById("quoteText").innerHTML = '«' + chosenQuoteText + '»';
