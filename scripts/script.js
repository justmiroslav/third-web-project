const uniqueButton = document.getElementById('unique');
const defaultUniqueStyles = {
  backgroundColor: uniqueButton.style.backgroundColor,
  color: uniqueButton.style.color,
  border: uniqueButton.style.border
};

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    if (button.id === 'unique') {
      button.id = '';
      button.style.backgroundColor = '';
      button.style.color = '';
      button.style.border = '1px solid var(--website-button-midnight-blue, #00003F)';
      button.onmouseover = () => {
        button.style.border = 'none'; 
      }
      button.onmouseout = () => {  
        button.style.border = '1px solid var(--website-button-midnight-blue, #00003F)';
      }

    } else {
      button.id = 'unique';
      button.style.backgroundColor = '#01A0FE';
      button.style.color = '#fff';
      button.style.border = 'none';
      button.onmouseover = () => {
        button.style.backgroundColor = '';
        button.style.color = '#00003F';
      }
      button.onmouseout = () => {
        button.style.backgroundColor = '#01A0FE';
        button.style.color = '#fff';
      }
    }

  });

});

const secondaryButton = document.querySelector('.secondary-button');
const primaryButton = document.querySelector('.primary-button');
const imageSecondaryButton = document.getElementById('image-secondary-button');

secondaryButton.addEventListener('click', () => {

  // if (secondaryButton.classList.contains('primary-button')) {
  //   secondaryButton.classList.remove('primary-button');
  //   secondaryButton.classList.add('secondary-button'); 
  // }

  // if (primaryButton.classList.contains('secondary-button')) {
  //   primaryButton.classList.remove('secondary-button');
  //   primaryButton.classList.add('primary-button');
  // }

  // Tried to implement infinite style switching, but...

  secondaryButton.classList.remove('secondary-button');
  secondaryButton.classList.add('primary-button');
  imageSecondaryButton.style.display = 'none';

  primaryButton.classList.remove('primary-button');
  primaryButton.classList.add('secondary-button');

});

primaryButton.addEventListener('click', () => {

  // if (primaryButton.classList.contains('secondary-button')) {
  //   primaryButton.classList.remove('secondary-button');
  //   primaryButton.classList.add('primary-button');
  // }

  // if (secondaryButton.classList.contains('primary-button')) {
  //   secondaryButton.classList.remove('primary-button');
  //   secondaryButton.classList.add('secondary-button');
  // }

  // same problem there

  primaryButton.classList.remove('primary-button');
  primaryButton.classList.add('secondary-button');
  
  secondaryButton.classList.remove('secondary-button');
  secondaryButton.classList.add('primary-button');
  imageSecondaryButton.style.display = 'none';
});

function resetButtonStyles() {
    
    buttons.forEach(button => {
    
        if (button === uniqueButton) {
            button.style.backgroundColor = defaultUniqueStyles.backgroundColor;
            button.style.color = defaultUniqueStyles.color;
            button.style.border = defaultUniqueStyles.border;
            button.onmouseover = () => {
                button.style.backgroundColor = '';
                button.style.color = '#00003F';
            }
                button.onmouseout = () => {
                button.style.backgroundColor = '#01A0FE';
                button.style.color = '#fff';
            }
        } else {
            button.id = '';
            button.style.backgroundColor = '';
            button.style.color = '';
            button.style.border = '1px solid var(--website-button-midnight-blue, #00003F)';
            button.onmouseover = () => {
                button.style.border = 'none'; 
            };
            button.onmouseout = () => {  
                button.style.border = '1px solid var(--website-button-midnight-blue, #00003F)';
            };
        }     
    });
}

const sendFormButton = document.getElementById('send-form-button');

sendFormButton.addEventListener('click', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const companyName = document.getElementById('company-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;

  if (username && companyName && email && phoneNumber) {

    document.getElementById('username').value = '';
    document.getElementById('company-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone-number').value = '';
    resetButtonStyles();

    alert("You've sent all the necessary data");
  } else {
    alert('Fill in all fields before submitting the form');
  }
});