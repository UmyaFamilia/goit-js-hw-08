import throttle from 'lodash.throttle';

const inpute = document.querySelector('[name="email"]');

const textarea = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');
let info = {
  name: '',
  message: '',
};
if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  info.name = JSON.parse(localStorage.getItem('feedback-form-state')).name;
  info.message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
  inpute.value = info.name;
  textarea.value = info.message;
}

form.addEventListener('input', throttle(IDontKnow, 500));
function IDontKnow(evnt) {
  if (evnt.target.name == 'email') {
    info.name = evnt.target.value;
  }
  if (evnt.target.name == 'message') {
    info.message = evnt.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(info));
}
form.addEventListener('submit', end);
function end(evnt) {
  evnt.preventDefault();
  console.log('email= ' + inpute.value + '    maessage= ' + textarea.value);
  localStorage.clear();
  inpute.value = '';
  textarea.value = '';
}
