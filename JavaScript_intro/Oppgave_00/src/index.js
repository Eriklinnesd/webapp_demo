// Oppgave 1
const removeBtn = document.getElementById('remove-btn');
const removeText = document.getElementById('remove');

const textRemoval = () => {
    removeText.innerHTML = ' ';
};

removeBtn.addEventListener('click', textRemoval);

// Oppgave 2
const changeBtn = document.getElementById('change-btn');
const changeText = document.getElementById('change');

const textChanger = () => {
    changeText.innerHTML = 'Hello World!';
};

changeBtn.addEventListener('click', textChanger);

// Oppgave 3
const inputValue = document.getElementById('input');
const inputText = document.getElementById('input-text');

const textFromInput = () => {
    inputText.innerHTML = inputValue.value;
};

inputValue.addEventListener('input', textFromInput);

// Oppgave 4 
const myList = ['item one', 'item two', 'item three'];
const createListBtn = document.getElementById('write-list');
const ulWrapper = document.getElementById('ul');

const createList = () => {
myList.forEach(function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("ul").appendChild(li);
  })
};

createListBtn.addEventListener('click', createList)

// Oppgave 5
const textInput = document.getElementById('text');
const createBtn = document.getElementById('create');
const wrapper = document.getElementById('placeholder');
// const selectedValue = document.getElementById('select').value;

const createElement = () => {
    let Selected = document.getElementById('select').value;
    //console.log(Selected.value)
    let text = textInput.value;
    //let text = document.createElement(Selected)
    let utskrift = '<' + Selected + '>' + text + '<' + Selected + '/>';
    wrapper.innerHTML = utskrift;
}

createBtn.addEventListener('click', createElement);

// Oppgave 6
const removeLiBtn = document.getElementById('remove-li');

const removeLi = () => {
    const list = document.getElementById('list');
    list.removeChild(list.lastElementChild);
}

removeLiBtn.addEventListener('click', removeLi);

// Oppgave 7
const inputBox = document.getElementById('name');
const disableBtn = document.getElementById('order');
const maxNumCharacters = 4;

const countCharacters = () => {
    let addedCharacters = inputBox.value.length;
    if (addedCharacters > maxNumCharacters) {
        disableBtn.disabled = true;
        disableBtn.style.border = '2px solid tomato';
    }
}

inputBox.addEventListener('keyup', countCharacters);


// Oppgave 8
const items = document.querySelector('.children').querySelectorAll('li');
const colorBtn = document.getElementById('color');

const styleList = () => {
for (let i = 0; i < items.length; i++) {
    if (i % 2 == 1) {
        items[i].style.border = '2px solid pink'
    } else {
        items[i].style.border = '2px solid green' 
    }
}
}

colorBtn.addEventListener('click', styleList);
