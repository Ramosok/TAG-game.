const field = document.querySelector('.field');
const change = document.getElementsByClassName('change');
const tour = document.querySelector('#tour');
const winModal = document.querySelector('#winModal');


let arr = [15,16,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
function shuffle() {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
shuffle()
  function renderItems() {
    arr.forEach(item => {
      const container = document.createElement('div');
      container.classList.add('active');
      container.setAttribute('id', `elem${item}`);
      container.innerText = `${item}`
      field.append(container);
      if (+container.innerText === 16) {
        container.classList.remove('active');
        container.innerText = '';
      }
    })
}
renderItems()
const vArr = '15 14 13 12 11 10 9 8 7 6 5 4 3 2 1'
function victory () {
  const active = document.querySelectorAll('.active');
  let arrInnerHtml = [active[0].innerHTML,active[1].innerHTML,active[2].innerHTML,active[3].innerHTML,active[4].innerHTML,active[5].
    innerHTML,active[6].innerHTML,active[7].innerHTML,active[8].innerHTML,active[9].innerHTML,active[10].innerHTML,
    active[11].innerHTML,active[12].innerHTML,active[13].innerHTML,active[14].innerHTML,];
  if(vArr === arrInnerHtml.join(' ')) {
    console.log('Victory')
    winModal.classList.remove('onActive');
  }
}

function isMovvingAvailable(itemToMove, targetElem) {
  if (
    itemToMove === targetElem?.nextElementSibling
    || itemToMove === targetElem?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling
    || itemToMove === targetElem?.previousElementSibling
    || itemToMove === targetElem?.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling
  ) {
    return true
  }
  return false;
}

field.addEventListener('click',({target}) => {
  if (target === field) return;
  let itemChange = change[0];
  if (!itemChange) {
    target.classList.toggle('change');
    return;
  }
  let twoActive = [target, itemChange].every(elem => elem.classList.contains('active'));
  if (twoActive) {
    itemChange.classList.remove('change');
    return;
  }
  if (isMovvingAvailable(itemChange, target)) {
    [target.innerHTML, itemChange.innerHTML] = [itemChange.innerHTML, target.innerHTML];
    itemChange.classList.remove('change');
    tour.innerHTML++;
    if (target.classList.contains('active')) {
      target.classList.remove('active')
      itemChange.classList.add('active')
    } else {
      target.classList.add('active')
      itemChange.classList.remove('active')
      victory();
    }
  }
})


