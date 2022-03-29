/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
import IMask from 'imask';


// маска телефона
let maskOptions = {
  mask: '+{7}(000)000-00-00',
};

let element2 = document.getElementById('phone');
let mask2 = IMask(element2, maskOptions);

const popup = document.querySelector('.popup');
if (popup) {
  let element = document.getElementById('user-phone');
  let mask1 = IMask(element, maskOptions);
}
