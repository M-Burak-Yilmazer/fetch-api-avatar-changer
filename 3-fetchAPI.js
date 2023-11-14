// //*========================================
// //!             3 - FETCH API
// //*========================================

// //? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
// //? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
// //? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
// //? gelmektedir.

// //? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
// //? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
const API = "https://randomuser.me/api/";
const veri = null;
const getfetch = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      if (!res.ok) {
        throw new Error("you gave an error", res.status);
      }
      return res.json();
    })
    .then((data) => showData(data))
    .catch((err) => console.log("err"));
};

const proje = document.querySelector(".project");

const showData = (veri) => {
  const { name, email, phone, picture } = veri.results[0];

  proje.innerHTML = `
  <img src="${picture.large}" alt="" />
  <p> <b>Name :</b>  ${name.first} ${name.last}</p>
   <p> <b>Email :</b>  ${email}</p> 
 
   <p> <b>Phone :</b>  ${phone}</p>
  `;
};
window.addEventListener("load", () => {
  getfetch();
});

document.querySelector("button").addEventListener("click", () => {
  getfetch();
});

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((data) =>
//     data.forEach(({ login, avatar_url }) => {
//       const proje = document.querySelector(".project");
//       proje.innerHTML += `<h1>${login}</h1>
// <img src="${avatar_url}" alt="" />
// <hr>
// `;

//     })
//   )
//   .catch((err) => console.log(err));
