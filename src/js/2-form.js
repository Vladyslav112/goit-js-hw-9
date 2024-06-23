const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
function saveToLocalStorage() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
}
form.addEventListener('input', saveToLocalStorage);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Заповніть, будь ласка, всі поля');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
