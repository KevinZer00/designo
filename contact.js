document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('blur', function() {
      let validationMessage = this.nextElementSibling;
      if (this.value.trim() === '') {
        validationMessage.style.display = 'block';
      } else {
        validationMessage.style.display = 'none';
      }
    });
  });