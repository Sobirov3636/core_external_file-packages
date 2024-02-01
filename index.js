// Module package CORE => biz install qilmasak ham nodejs ni ozida bolgan packagelar hisoblandi.
// setTimeout() => function ikkita argument qabul qiladi. Birinchisi function ikkinchi time ya'ni qancha vaqtda ishga tushish time xisoblandai. Time millisecundda hisoblanadi. Bu function bizga qanchadir vaqtdan keyin ishga tushishi kerak bolgan logiclar qilayotganimizda asqotadi.

// setTimeout(() => {
//   console.log("ishga tushdi");
// }, 5000);

// setInterval() => bu function ham 2ta argument qabul qiladi. Birinchisi function va ikkinchi har qanchadir vaqtda ishga tushish vaqti. Bu loopga oxshab har bergan vatimizda qayta qayta ishga tushaveradi.

// let number = 0;
// setInterval(() => {
//   number++;
//   console.log("hisob", number);
// }, 1000);

// fs => file stystem package biz Core packagelarni install qilishimiz shart emas lekin uni chaqirib olishimiz keark. Va bunda common jsda require ishlatiladi. Quyidagi misolda korish mumkin.

// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf-8");
// console.log(data);

// console.log("*********************");
// fs.writeFileSync("./input.txt", `${data} \n\t\t by Muhammadali`);
// const new_data = fs.readFileSync("./input.txt", "utf-8");
// console.log(new_data);

// Module package EXTERNAL => biz install qilib ishlata oladigan packagelar hisoblanadi.

/*
//moment package bu hozirgi vaqtni olib beradi.
const moment = require("moment");
// const time = moment().format();
// console.log(time);

setInterval(() => {
  const time = moment().format();
  
  console.log(`hozirgi vaqt: ${time}`);
}, 5000);
*/

/*

// inquirer package => is use for providing error feedback, asking questions, parsing input, validating answers, managing hierarchical prompts

const inquirer = require("inquirer");

inquirer
.prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }])
.then((answer) => {
  console.log("men kiritgan raqamning qiymati:", answer.raqam);
})
.catch((err) => console.log(err));

*/

/*
// validator package => biror narsani tekshirayotganimizda bizga yordam beradigan package hisoblanadi. Masalan emailmi yoki emailmasmi, raqammi yoki raqam emasmi vahokazolarni tekshirganimizda bizga true yoki false qiymat qaytaradi. Biz string holatda berishimiz kerak boladi ma'lumotlarni.
const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
// console.log("test", test);
// const test = validator.isInt("100");
// console.log("test", test);
const test = validator.isIP("101.188.67.134");
console.log("test", test);
*/

/*

// uuidv4 package => random string chiqarishni ishlatib koramiz.
const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random:", random);

// chalk package => turli xil bezaklar uchun yordam beradi.
const chalk = require("chalk");
const log = console.log;
// log(chalk.blue("Hello") + random + chalk.red("!"));
log(chalk.blue(`uuid creates ${random}`));
*/

// Module package FILE

/*

const calculate = require("./hisob.js");

const result = calculate.kopaytirish(80, 20);
console.log("Result1:", result);
console.log("***************");

const result2 = calculate.bolish(80, 20);
console.log("Result2:", result2);
console.log("***************");

const result3 = calculate.qoshish(80, 20);
console.log("Result3:", result3);
console.log("***************");

const result4 = calculate.ayrish(80, 20);
console.log("Result4:", result4);
*/

console.log(require("module").wrapper); // consoleda '(function (exports, require, module, __filename, __dirname) {','\n});' natijani olishimiz  mumkin.

/*
console.log(arguments);
Yuqoridagi console orqali biz argumentlarni tekshiryapmiz:
[Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/muhammadalisobirov/Desktop/example',
      exports: {},
      filename: '/Users/muhammadalisobirov/Desktop/example/index.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/muhammadalisobirov/Desktop/example/index.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/muhammadalisobirov/Desktop/example',
    exports: {},
    filename: '/Users/muhammadalisobirov/Desktop/example/index.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/muhammadalisobirov/Desktop/example/node_modules',
      '/Users/muhammadalisobirov/Desktop/node_modules',
      '/Users/muhammadalisobirov/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/muhammadalisobirov/Desktop/example/index.js',
  '4': '/Users/muhammadalisobirov/Desktop/example'
}

Bu yerdan tushunishimiz kerak bolgan narsa biz require() ichida packagelarni yozamiz. Agar u file package bolsa ya'ni ozimizni project file ichida bolsa ./ orqali unga boryapmiz shu sababli bizning filelarimiz ichidan qidiradi. Agar biz external package ishlatgan bolsak shunchaki uni nomini yozgan bolamiz u holda paths da korishimiz mumkinki avval osha pjorectimizning node_modules file ichidan qidiradi, yoq bolsa desktopning node_modules file dan qidiradi ... shu tariqa oxiri globalniy node_modules gacha boradi.
*/

const Account = require("./account.js");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("===================");

const myAccount = new Account("Ali", 500000, 9287459275035395);
myAccount.giveMeDetails();

myAccount.makeDeposit(700000);

// Buggati chiyron 2.4mln usd

// myAccount.withdrawMoney(2400000);

// ferrariz 400000 usd
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
