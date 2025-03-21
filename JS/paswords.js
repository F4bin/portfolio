const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const passwordResult = document.getElementById('passwordResult');

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const lower = document.getElementById('lowercase').checked;
  const upper = document.getElementById('uppercase').checked;
  const number = document.getElementById('numbers').checked;
  const symbol = document.getElementById('symbols').checked;
  const length = parseInt(lengthSlider.value);

  let chars = '';
  if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (number) chars += '0123456789';
  if (symbol) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (chars === '') {
    alert('Selecione pelo menos uma opção!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordResult.value = password;
}

function copyPassword() {
  const password = passwordResult.value;
  if (!password) {
    alert('Nada para copiar!');
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => {
      alert('Senha copiada!');
    })
    .catch(err => {
      console.error('Erro ao copiar:', err);
      alert('Falha ao copiar!');
    });
}
