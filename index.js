// Import stylesheets
import './style.css';

//A vyhladavanie v DOM podla CSS selektora

const copBarA = document.querySelectorAll('.sme-corpbar-wrap a');
console.log(copBarA.length);

//B pridavanie eventov na DOM element - click, keyup, keydown...

for (let i = 0; i < copBarA.length; i++) {
  copBarA[i].addEventListener('click', (event) => {
    event.preventDefault();
    alert('Pozor!!!');
  });
}

// ... pozriet si a zapisatsi niekde, ake dalsietypy eventov existuju

//mouse events(mouseover, mouseremove), keybors (keydown, keyup); onfocus, onsubmit, onchange

//C pridat novy element ako child/sister element nejakeho ineho elementu v DOM
const newElement = document.createElement('div');
newElement.textContent = 'Moj pridany element';
document.querySelector('#sme-corpbar').appendChild(newElement);
/*
// ... vyskusat si pridavat elementy v cykle napr. table tr alebo ul li
for (let i = 0; i < addElement.length; i++){
  let
}
*/
//D najst a zmazat element
const removElement = document.querySelector('#sme-corpbar');
console.log(removElement)
removElement.remove(removElement);
console.log(removElement)

//E najst a zmenit obsah elementu
/*
const changeElem = document.querySelector('.px-m-sm my-m');
console.log(changeElem);
changeElem.textContent = 'New item with text';

changeElem.parentNode.removeChild(changeElem);
*/
//E1 nastavit/zmazat/vycitat CSS class tzn. napr. ma dany element css class s danym nazvom?
// ...ak ano, zmaz ho alebo zmen na iny css class
//E2 to iste ako E1 ale s CSS style
