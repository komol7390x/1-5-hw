// 1-vazifa Ball baholash
// const input = +prompt("Bahoni kiriting?")
// if (input > 0 && input < 60) {
//     console.log("Qoniqarsiz");
// } else if (input < 70) {
//     console.log("Qoniqarli");
// } else if (input < 90) {
//     console.log("Yaxshi");
// } else if (input <= 100) {
//     console.log("A'lo");
// }

// 2-vazifa Hafta kunlari
// const day = +prompt("Raqam kiriting?")
// if (day == 1) {
//     console.log("Dushanba");
// } else if (day == 2) {
//     console.log("Seshanba");
// } else if (day == 3) {
//     console.log("Chorshanba");
// } else if (day == 4) {
//     console.log("Payshanba");
// } else if (day == 5) {
//     console.log("Juma");
// } else if (day == 6) {
//     console.log("Shanba");
// } else if (day == 7) {
//     console.log("Yakshanba");
// } else {
//     console.log("Noto'g'ri raqam");
// }

// 3-vazifa Yoshga qarab toifa aniqlash
// const yosh = +prompt("Raqam kiriting?")
// if (yosh >= 0 && yosh < 13) {
//     console.log("Bola");
// } else if (yosh < 20) {
//     console.log("O'smir");
// } else if (yosh < 60) {
//     console.log("Katta");
// } else if (yosh < 120) {
//     console.log("Qariya");
// } else {
//     console.log("Noto'g'ri raqam");
// }

// 4-vazifa Katta son
// const firstNumber = +prompt("Birinchi soni kiriting")
// const secondNumber = +prompt("Ikkinchi soni kiriting")
// const thirdNumber = +prompt("Uchinchi soni kiriting")
// firstNumber > secondNumber ?
//     console.log("Birinchi raqam katta") : (secondNumber > thirdNumber ?
//         console.log("Ikkinchi raqam katta") : console.log("Uchinchi raqam katta"))

// 5-vazifa Oy kunlari
// const month = +prompt("Raqam kiriting?")
// const toq = [1, 3, 5, 7, 8, 10, 12]
// const juft = [4, 6, 9, 11]

// if (toq.includes(month)) {
//     console.log("31");
// } else if (juft.includes(month)) {
//     console.log("30");
// } else if (month === 2) {
//     console.log("28");
// } else {
//     console.log("Noto'g'ri raqam");
// }

// 6-vazifa Login tekshirish
// const login = prompt("Login kiriting?")
// const parol = prompt("Parol kiriting?")
// const users = { "admins": "12345", "user": "password", "admin": "wrong" }
// if (login in users) {
//     if (users[login] == parol) {
//         console.log(`Xush kelibsiz, ${login}`);
//     } else {
//         console.log("Parol noto'g'ri");
//     }
// } else {
//     console.log("Login noto'g'ri");
// }

// 7-vazifa Fasl aniqlovchi
// const month = +prompt("Raqam kiriting?")
// const winter = [12, 1, 2]
// const spring = [3, 4, 5]
// const summer = [6, 7, 8]
// const autumn = [9, 10, 11]
// if (winter.includes(month)) {
//     console.log("Qish");
// } else if (spring.includes(month)) {
//     console.log("Bahor");
// } else if (summer.includes(month)) {
//     console.log("Yoz");
// } else if (autumn.includes(month)) {
//     console.log("Kuz");
// } else {
//     console.log("Noto'g'ri raqam");
// }

// 8-vazifa Raqamni so'zga o'girish
// const num = +prompt("Raqam kiriting?")
// if (num == 1) {
//     console.log("Bir");
// } else if(num == 2) {
//     console.log("Ikki");
// } else if (num == 3) {
//     console.log("Uch");
// } else if (num == 4) {
//     console.log("To'rt");
// } else if (num == 5) {
//     console.log("Besh");
// } else {
//     console.log("Noto'g'ri raqam");
// }

// 9-vazifa Baho tavsifi
// const num = +prompt("Raqam kiriting?")
// switch (num) {
//     case 1:
//         console.log("Yomon");
//         break;
//     case 2:
//         console.log("Qoniqarsiz");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Noto'g'ri baho");
//         break;
// }


// 10-vazifa Yil fasllari
// let fasl = prompt("Fasl nomini kiriting?")
// fasl = fasl.toLocaleLowerCase()
// switch (fasl) {
//     case "qish":
//         console.log("Dekabr, Yanvar, Fevral");
//         break;
//     case "bahor":
//         console.log("mart,Apriel,May");
//         break;
//     case "yoz":
//         console.log("Iyun, Iyul, Avgust");
//         break;
//     case "kuz":
//         console.log("Setyabr,Oktyabr,Noyabr");
//         break;
//     default:
//         console.log("Bunday fasl yo'q");
//         break;
// }

// 11-vazifa Son tavsifi
// const num = +prompt("Raqam kiriting?")
// num != 0 ?
//     (num > 0 ? (num % 2 == 0 ?
//         console.log("Musbat juft son") : console.log("Musbat toq son")) : (num % 2 == 0 ?
//             console.log("Manfiy juft son") : console.log("Manfiy toq son"))) : console.log("Nol");

// 12-vazifa Rang kodi
// const rang = prompt("Rang kiriting?")
// const color1 = { "qizil": "#FF0000", "yashil": "#00FF00", "kok": "#0000FF" }
// if (Object.keys(color1).includes(rang)) {
//     console.log(`Rang kodi: ${color1[rang]}`);
// } else {
//     console.log("Bunday rang kodi yo'q");
// }

// 13-vazifa Toq sonlarni topish
// const num = +prompt("Raqam kiriting?")
// for (let i = 1; i <= num; i += 2) {
//     console.log(i);
// }

// 14-vazifa Raqamlar yig'indisi
// let num = +prompt("Raqam kiriting?")
// let sum = 0
// while (num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
// } console.log(sum);

// 15-vazifa Teskari satr
// const text = prompt("So'z kiriting?")
// let text2 = text.split("").reverse().join("")
// console.log(text2);

// 16-vazifa Ko'paytirish jadvali
// const num = +prompt("Raqam kiriting?")
// for (let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }

// 17-vazifa Kalkulyator
// const n = +prompt("N sonini kiriting?")
// const k = +prompt("Necha marta hisoblasin")
// let sum=0
// for (let i = 0; i < k; i++){
//     sum+=n
// }console.log(`Natija: ${sum}`);

// 18-vazifa Sonlar ketma-ketligi
// const num = +prompt("Raqam kiriting?")
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
// } else if (num % 3 == 0) {
//     console.log("Buzz");
// } else if (num % 5 == 0) {
//     console.log("Fizz");
// } else {
//     console.log(num);
// }

// 19-vazifa Raqamlar o'rnini almashtirish
// let num = +prompt("Raqam kiriting?")
// let num1=""
// while (num > 0) {
//     let a = num % 10
//     if (a % 2 == 0) {
//         num1+=0
//     } else {
//         num1+=a
//     }
//     num=Math.floor(num/10)
// }
// num1 = +(num1.split("").reverse().join(""))
// console.log(num1);

// 20-vazifa Ichma-ich loop
// let num = +prompt("Raqam kiriting?")
// let sum=1
// for (let i = 0; i < num; i++){
//     for (let k = 0; k < num; k++){
//         console.log(sum);
//         sum+=1
//     }
//     console.log("\n");
// }

// 21-vazifa O'yin Personaji
// function createCharacter(name, power) {
//     this.name = name;
//     this.power = power;
//     this.level = Math.floor(Math.random() * 10) + 1;
//     this.info=`${this.level}-darajali ${name}, Kuchi: ${power}`
// }
// let character = new createCharacter("Thanos", "100");
// console.log(character);

// 22-vazifa Instagram Post
// function createPost(image, title, tags) {
//     this.image = image;
//     this.title = title;
//     this.tags = tags;
//     this.likes = Math.floor(Math.random() * 1000) + 1
//     this.views=Math.floor(Math.random()*1000)+1
// }
// let info = new createPost("photo.jpg", "Bugun zo'r kun", ["fun", "holiday"])
// console.log(info)

// 23-vazifa Pizza Buyurtma
// function orderPizza(size, toppings) {
//     if (size == "medium") {
//             narx = 65_000;
//             vaqt = 20;
//         } else if (size == "big") {
//             narx = 85_000;
//             vaqt = 35;
//         } else if (size == "small") {
//             narx = 55_000;
//             vaqt = 15;
//         } else {
//             narx = "O'lcham xato";
//             vaqt = "O'lcham xato";
//     }
//     this.size = size;
//     this.toppings = toppings;
//     this.price = narx;
//     this.time = vaqt;

// }
// let pizza = new orderPizza("medium", ["cheese", "tomato"])
// console.log(pizza);

// 24-vazifa Telegram Bot
// function botReply(message="") {
//     if (message.includes("?")) {
//         reply="Ha"
//     } else {
//         reply="Tushundim"
//     }
//     this.message = message;
//     this.reply = reply;
//     this.time="12:30"
// }
// let info = new botReply("Bugun havo yaxshimi?")
// console.log(info);

// 25-vazifa YouTube Video
// function createVideo(title,duration) {
//     this.title= title;
//     this.duration=duration;
//     this.views= (Math.floor(Math.random() * 20_000) + 1);
//     this.likes = (Math.floor(Math.random() * 10_000) + 1);
//     this.views = (Math.floor(Math.random() * 1_000) + 1);
// }
// let info = new createVideo("JavaScript Tutorial", "10:15")
// console.log((info));

// 26-vazifa Spotify Track
// function createTrack(title,artist) {
//     list = (Math.floor(Math.random() * 10_000) + 1);
//     if (list > 5000) {
//         pop = true;
//     } else {
//         pop = false;
//     }
//     this.title = title;
//     this.artist = artist;
//     this.listens = list;
//     this.duration = "3:54";
//     this.isPopular=pop
// }
// let info = new createTrack("Shape of You", "Ed Sheeran")
// console.log((info));

// 27-vazifa Film Rating
// function rateMovie(title,year,ratings) {
//     let averageRating = 0
//     let len = ratings.length
//     for (let i = 0; i < len; i++){
//         averageRating+=ratings[i]
//     }
//     averageRating /=len
//     if (averageRating > 8) {
//         status1="Ajoyib"
//     } else {
//         status1="Yaxshi"
//     }
//     this.title = title;
//     this.year = year;
//     this.ratings;
//     this.averageRating = averageRating;
//     this.Status=status1
// }
// let info = new rateMovie("Avatar", 2009, [9, 8, 10, 7, 9])
// console.log((info));

// 28-vazifa Git Commit
// function randCommit() {
//     const str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
//     let commit = ""
//     let saveCommit = []
//     for (let i = 0; i < 10; i++){
//         commit += str[Math.floor(Math.random() * str.length)];
//     }
//     if (!saveCommit.includes(commit)) {
//         saveCommit.push(commit);
//         return commit;
//     } else {
//         return randCommit()
//     }
// }
// function createCommit(message, files) {
//     let id = randCommit();
//     this.message = message;
//     this.files = files;
//     this.date = "2024-03-15";
//     this.id = id;
//     this.author="User"
// }
// let info = new createCommit("Add new features", ["app.js", "style.css"])
// console.log(info);