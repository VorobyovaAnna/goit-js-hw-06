const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
    alert('Пожалуйста, заполните поля "Email" и "Password"');
    }
    const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
    formEl.reset();
}