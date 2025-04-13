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
// function createCharacter(ism, kuch) {
//     const daraja = Math.floor(Math.random() * 10) + 1;
//     character = {
//         name: ism,
//         power: kuch,
//         level: daraja,
//         info:`${daraja}-darajali ${ism}, kuchi: ${kuch}`
//     }
//     return character
// }
// const name1 = prompt("Qahramon ismini kiriting?")
// const power1 = prompt("Qahramon kuchini kiriting?")
// const info1=createCharacter(name1,power1)
// console.log(info1);

// 22-vazifa Instagram Post
// function createPost(rasm, text,teg) {
//     const like1 = Math.floor(Math.random() * 1000) + 1;
//     const views1 = Math.floor(Math.random() * 1000) + 1;
//     Post = {
//         image: rasm,
//         title: text,
//         tags: teg,
//         like: like1,
//         views:views1
//     }
//     return Post
// }
// const image1 = "image.jpg"
// const title1 = "Bugun zo'r kun"
// let tags1=[]
// for (let i = 0; i < 3; i++){
//     tags1[i]=prompt(`${i+1}. Tagni kiriting?`)
// }
// const info1 = createPost(image1, title1, tags1)
// console.log(info1);

// 23-vazifa Pizza Buyurtma
// function orderPizza(olcham, izoh) {
//     if (olcham == "medium") {
//         narx = 65_000;
//         vaqt = 20;
//     } else if (olcham == "big") {
//         narx = 85_000;
//         vaqt = 35;
//     } else if (olcham == "small") {
//         narx = 55_000;
//         vaqt = 15;
//     } else {
//         narx = "O'lcham xato";
//         vaqt = "O'lcham xato";
//     }
//     Pizza = {
//         size: olcham,
//         toppings: izoh,
//         price: narx,
//         time: vaqt
//     }
//     return Pizza
// }
// const size1 = "big";
// const toping1 = ["cheese", "tomato"];
// const info = orderPizza(size1, toping1)
// console.log(info);

// 24-vazifa Telegram Bot
// function botReplay(ask = " ") {
//     let ask2 = ask.split("");
//     const len = ask.length;
//     let quetion = "Tushunmadim";
//     for (let i = 0; i < len; i++) {
//         if (ask2[i] == "?") {
//             quetion = "Ha";
//         }
//     } let res = {
//         message: ask,
//         reply: quetion,
//         time: "12:30"
//     }
//     return res
// }
// const ask = "Bugun havo yaxshimi?"
// let info = botReplay(ask)
// console.log(info);

// 25-vazifa YouTube Video
// function createVideo(text = "JavaScript Tutorial", time = "10:15") {
//     res = {
//         title: text,
//         duration: time,
//         views: (Math.floor(Math.random() * 20_000) + 1),
//         likes: (Math.floor(Math.random() * 10_000) + 1),
//         views: (Math.floor(Math.random() * 1_000) + 1)
//     }
//     return res
// }
// let info=createVideo()
// console.log((info));

// 26-vazifa Spotify Track
// function createTrack(text = "Shape of You", author = "Ed Sheeran") {
//     list = (Math.floor(Math.random() * 10_000) + 1);
//     if (list > 5000) {
//             pop=true
//     } else {
//         pop=false
//     }
//     res = {
//         title: text,
//         artist: author,
//         duration:"3:54",
//         listens: list,
//         isPoplar:pop
//     }
//     return res
// }
// let info=createTrack()
// console.log((info));