class FormHandler {
  init() {
    this.domCache();
    this.bindEvents();
  }

  domCache() {
    this.form = document.getElementById('form');
    this.email = document.getElementById('email');
    this.country = document.getElementById('country');
    this.zipcode = document.getElementById('zipcode');
    this.password = document.getElementById('password');
    this.password2 = document.getElementById('password2');
    this.submit = document.getElementById('submit');
  }

  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('High five!');
    });
    this.password.addEventListener('input', this.validatePassword);
    this.password2.addEventListener('input', this.validatePasswordMatch);
    this.email.addEventListener('input', this.validateEmail);
    this.country.addEventListener('input', this.validateCountryAndZip);
    this.zipcode.addEventListener('input', this.validateCountryAndZip);
  }

  validatePassword(e) {
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passReg.test(e.target.value)) {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
      e.target.setCustomValidity('Password must be at least 5 characters long');
    } else {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
      e.target.setCustomValidity('');
    }
  }

  validatePasswordMatch(e) {
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (e.target.value !== document.getElementById('password').value || !passReg.test(e.target.value)) {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
      e.target.setCustomValidity('Password does not match');
    } else {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
      e.target.setCustomValidity('');
    }
  }

  validateEmail(e) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(e.target.value)) {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
      e.target.setCustomValidity('Invalid e-mail');
    } else {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
      e.target.setCustomValidity('');
    }
  }

  validateCountryAndZip(e) {
    if (e.target.value.lenght === 0) {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
      e.target.setCustomValidity('Invalid country');
    } else {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
      e.target.setCustomValidity('');
    }
  }
}

const form = new FormHandler();
form.init();
