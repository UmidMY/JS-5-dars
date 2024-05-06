/* HTML tags in JS */
/*
let headTag = document.head;
let bodyTag = document.body;
let havola = document.documentURI;
let formalar = document.forms;
let rasmlar = document.images;
let havolalar = document.links;
console.log(havolalar);
*/

/* Events in JS: onclick,ondblclick,onchange,onfocus,onblur,oninput,onmousemove */

/*function buttonniBos() {
    alert("Siz battonni bosdingiz!");
}
function buttonniIkkiMartaBos() {
    alert("Siz battonni 2 marta bosdingiz!");
}
function tanlash(event) {
    alert("Siz " + event.target.value + "ni tanladingiz!");
}*/
/*
function inputgaBosish() {
    console.log("Inputga bosildi!");
}
function inputdanChiqish() {
    console.log("Inputdan chiqildi!");
}
function yozish(event) {
    console.log(event.target.value);
}
document.querySelector(".text").addEventListener("paste",function (event) {
   console.log("Diqqat! Diqqat! Bazadan " + event.target.value + " nomli fayl ko'chirildi!");
});
*/
function harakatlanish(e) {
    console.log(e.clientX, e.clientY);
}
function kirish() {
    console.log("Hududga kirildi!");
}
function chiqish() {
    console.log("Hududdan chiqildi!");
}
