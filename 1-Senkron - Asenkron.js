//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

const bekle = (time) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + time) {}
};

// console.log("hello")
// console.time("timer")
// bekle(4000)
// console.timeEnd("timer")
// console.log("hi")

//* Asenkron (setTimeout())
//* ------------------------------------------------

// console.log("hi")
// setTimeout(()=>{
//   console.log("merhaba")
// },0)
// setTimeout(() => {
//   console.log("ikinci set ");
// }, 0);
// console.log("hello")

//* Asenkron (setInterval, clearInterval)
//*------------------------------------------------
//? setInterval periyodik zaman araligi oluşturmak icin kullanilabilir.
//? clearInterval yardımıyla surekli devam interval pasif hale getirilir.
count = 0;
console.log("merhaba");
const upgrade = setInterval(() => {
  console.log(++count);
  if (count > 9) {
    clearInterval(upgrade);
  }
}, 500);
console.log("finish");

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

const box = document.querySelector(".box");
setTimeout(() => {
  box.classList.add("bordered");
  setTimeout(() => {
    box.classList.add("bigger");
    setTimeout(() => {
      box.classList.add("changecolor");
      setTimeout(() => {
        box.classList.remove("changecolor");
        setTimeout(() => {
          box.classList.remove("changecolor");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);



// setTimeout(() => {
//   console.log("john:Hi")
//   setTimeout(() => {
//     console.log("Sarah: Hello")
//     setTimeout(() => {
//       console.log("John: How Are you?")
//       setTimeout(() => {
//         console.log("Sarah:Fine and you?")
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

//? COZUMLER:
//?----------------------------------------------------

//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
