const field = document.querySelector('.field');
const active = document.querySelectorAll('.active');
const change = document.getElementsByClassName('change');
const tour = document.querySelector('#tour');
const mixItUpBtn = document.querySelector('#mixItUpBtn');

//mixItUpBtn.addEventListener('click', mixItUpFunc);


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

field.addEventListener('click', ({target}) => {
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
  ;
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
    }
  }
})

