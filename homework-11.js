(() => {
  "use strict";

  let user = null;

  const overlay       = document.getElementById('overlay');
  const openBtn       = document.getElementById('openModalBtn');
  const closeBtn      = document.getElementById('closeModalBtn');
  const cancelBtn     = document.getElementById('cancelBtn');
  const form          = document.getElementById('registerForm');
  const passwordInput = document.getElementById('password');
  const repeatInput   = document.getElementById('passwordRepeat');

  let lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('is-open'));
    document.body.classList.add('modal-open');
    document.getElementById('firstName').focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onKeydown);

    overlay.addEventListener('transitionend', () => {
      overlay.hidden = true;
    }, { once: true });

    form.reset();
    lastFocused?.focus();
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  function onKeydown(e) {
    if (e.key === 'Escape') closeModal();

    if (e.key === 'Tab') {
      const focusable = overlay.querySelectorAll(
        'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    repeatInput.setCustomValidity('');

    if (passwordInput.value !== repeatInput.value) {
      repeatInput.setCustomValidity('Пароли не совпадают');
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      alert('Регистрация отклонена: проверьте правильность заполнения формы.');
      return;
    }

    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    userData.createdOn = new Date();

    user = userData;

    console.log('Зарегистрирован пользователь:', user);
    alert(`Регистрация успешна!\nДобро пожаловать, ${user.firstName}!`);

    closeModal();
  });

  repeatInput.addEventListener('input', () => {
    repeatInput.setCustomValidity('');
  });

  const subscribeForm  = document.querySelector('.subscribe-form');
  const subscribeEmail = document.querySelector('#subscribe-email');

  subscribeForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!subscribeEmail.checkValidity()) {
      subscribeEmail.reportValidity();
      return;
    }

    console.log('Подписка оформлена:', subscribeEmail.value);
    subscribeForm.reset();
  });
})();