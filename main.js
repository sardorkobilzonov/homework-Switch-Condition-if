// IF ELSE masalalar

//1-masala
// {
//   let n = -5;
//   if (n > 0) {
//     n++;
//   } else {
//   }
//   console.log(n);
// }

//2-masala

// {
//   let n = -8;

//   if (n > 0) {
//     n++;
//   } else {
//     n -= 2;
//   }
//   console.log(n);
// }

//3-masala

// {
//   let n = 0;
//   if (n > 0) {
//     n++;
//   } else if (n < 0) {
//     n -= 2;
//   } else {
//     n = 10;
//   }
//   console.log(n);
// }

//4-masala
// {
//   let n1 = 5,
//     n2 = 3,
//     n3 = -7,
//     musbat = 0;
//   if (n1 > 0) {
//     musbat++;
//   }

//   if (n2 > 0) {
//     musbat++;
//   }

//   if (n3 > 0) {
//     musbat++;
//   }

//   console.log(musbat);
// }

//5-masala
// {
//   let a = -3,
//     b = -2,
//     c = -5;
//   result = 0;
//   if (a > 0) {
//     result++;
//   }

//   if (b > 0) {
//     result++;
//   }

//   if (c > 0) {
//     result++;
//   }
//   console.log(result);
// }

//6-masala

// {
//   let a = 90,
//     b = 80;
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }

//7-masala

// {
//   let a = 20,
//     b = 15;
//   let kichikSon;
//   let position;

//   if (a > b) {
//     kichikSon = a;
//     position = 1;
//   } else if (b < a) {
//     kichikSon = b;
//     position = 2;
//   } else {
//     kichikSon = a;
//     position = 1;
//   }
//   console.log(`Kichik son: ${kichikSon}, Tartib raqami: ${position}`);
// }

//8-masala

// {
//   let a = 12, b = 50

//   if(a > b ){
//     console.log(a)
//   }else{
//     console.log(b)
//   }
// }

//9-masala

// {
//   let a = 11,
//     b = 7;

//   if (a > b) {
//     let ozgaruvchan = a;
//     a = b;
//     b = ozgaruvchan;
//   }
//   console.log(`a: ${a} b: ${b}`);
// }

//10-masala

// {
//   let a = 20,
//     b = 20;
//   if (a !== b) {
//     let jami = a + b;
//     a = jami;
//     b = jami;
//   } else {
//     a = 0;
//     b = 0;
//   }
//   console.log(`a: ${a}, b: ${b}`);
// }

//SWITCH CASE misollar

//1-misol
// {
//   let kun = 6,
//     result;

//   switch (kun) {
//     case 1:
//       result = "1-Dushanba";
//       break;

//     case 2:
//       result = "2-Seshanba";
//       break;
//     case 3:
//       result = "3-Chorshanba";
//       break;
//     case 4:
//       result = "4-Payshanba";
//       break;
//     case 5:
//       result = "5-Juma";
//       break;
//     case 6:
//       result = "6-Shanba";
//       break;
//     case 7:
//       result = "7-Yakshanba";
//       break;
//     default:
//       result = "Bunday kun yoq";
//   }
//   console.log(result);
// }

//2-misol
// {
//   let k = 3,
//     result;
//   switch (k) {
//     case 1:
//       result = "1-yomon";
//       break;
//     case 2:
//       result = "2-qoniqarsiz";
//       break;
//     case 3:
//       result = "3-qoniqarli";
//       break;
//     case 4:
//       result = "4-yahshi";
//       break;
//     case 5:
//       result = "5-alo";
//       break;
//     default:
//       result = "xato";
//   }
//   console.log(result);
// }

//3-misol

// let month = 7;
// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
// }

//4-misol

// {
//   let month = 7;
//   switch (month) {
//     case 1:
//       console.log("Yanvar 31 kun");
//       break;
//     case 2:
//       console.log("Fevral 28 kun");
//       break;
//     case 3:
//       console.log("Mart 31 kun");
//       break;
//     case 4:
//       console.log("Aprel 30 kun");
//       break;
//     case 5:
//       console.log("May 31 kun");
//       break;
//     case 6:
//       console.log("Iyun 30 kun");
//       break;
//     case 7:
//       console.log("Iyul 31 kun");
//       break;
//     case 8:
//       console.log("Avgust 31 kun");
//       break;
//     case 9:
//       console.log("Sentyabr 30 kun");
//       break;
//     case 10:
//       console.log("Oktyabr 31 kun");
//       break;
//     case 11:
//       console.log("Nayabr 30 kun");
//       break;
//     case 12:
//       console.log("Dekabr 31 kun");
//       break;
//   }
// }

//5-misol
// {
//   let A = parseInt(prompt("A butun sonini kiriting: "));
//   let B = parseInt(prompt("B butun sonini kiriting: "));

//   let amal = parseInt(
//     prompt(
//       "Amalni tanlang:\n1 - Qo'shish\n2 - Ayirish\n3 - Bo'lish\n4 - Ko'paytirish"
//     )
//   );

//   let natija;

//   switch (amal) {
//     case 1:
//       natija = A + B;
//       console.log(`${A} + ${B} = ${natija}`);
//       break;
//     case 2:
//       natija = A - B;
//       console.log(`${A} - ${B} = ${natija}`);
//       break;
//     case 3:
//       if (B !== 0) {
//         natija = A / B;
//         console.log(`${A} / ${B} = ${natija}`);
//       } else {
//         console.log("Nolga bo'lish mumkin emas!");
//       }
//       break;
//     case 4:
//       natija = A * B;
//       console.log(`${A} * ${B} = ${natija}`);
//       break;
//     default:
//       console.log("Noto'g'ri amal raqami kiritildi.");
//   }
// }
