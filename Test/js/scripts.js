document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  const backButton = document.getElementById('back-button');
  const addressField = document.getElementById('address-field');

  if (contactForm) {
    const urlParams = new URLSearchParams(window.location.search);
    const editIndex = urlParams.get('edit');

    if (editIndex !== null) {
      populateForm(editIndex);
    }

    contactForm.addEventListener('input', function () {
      validateForm(editIndex);
    });

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      saveContact(editIndex);
      window.location.href = 'index.html';
    });

    backButton.addEventListener('click', function () {
      window.location.href = 'index.html';
    });

    document.querySelectorAll('input[name="address-type"]').forEach(radio => {
      radio.addEventListener('change', function () {
        addressField.style.display = 'block';
      });
    });
  }

  const contactList = document.getElementById('contact-list');
  if (contactList) {
    loadContacts();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateForm(editIndex) {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const addressType = document.querySelector('input[name="address-type"]:checked');
  const address = document.getElementById('address').value.trim();

  const submitButton = document.getElementById('submit-button');
  if (firstName && lastName && phone.match(/^\d{10}$/) && validateEmail(email) && addressType && address) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }

  if (editIndex !== null) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contact = contacts[editIndex];
    if (firstName === contact.firstName &&
        lastName === contact.lastName &&
        phone === contact.phone &&
        email === contact.email &&
        addressType.value === contact.addressType &&
        address === contact.address) {
      submitButton.disabled = true;
    }
  }
}

function loadContacts() {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const contactList = document.getElementById('contact-list');
  contactList.innerHTML = '';

  contacts.forEach((contact, index) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `
      <div class="actions">
        <button onclick="editContact(${index})">Edit</button>
        <button onclick="deleteContact(${index})">Delete</button>
      </div>
      <p><strong>Name:</strong> ${contact.firstName} ${contact.lastName}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Address Type:</strong> ${contact.addressType}</p>
      <p><strong>Address:</strong> ${contact.address}</p>
    `;
    contactList.appendChild(tile);
  });
}

function saveContact(editIndex) {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const addressType = document.querySelector('input[name="address-type"]:checked').value;
  const address = document.getElementById('address').value.trim();

  const contact = {
    firstName,
    lastName,
    phone,
    email,
    addressType,
    address
  };

  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  if (editIndex !== null) {
    contacts[editIndex] = contact;
  } else {
    contacts.push(contact);
  }

  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function editContact(index) {
  window.location.href = `contact.html?edit=${index}`;
}

function deleteContact(index) {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.splice(index, 1);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  loadContacts();
}

function populateForm(index) {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const contact = contacts[index];

  document.getElementById('first-name').value = contact.firstName;
  document.getElementById('last-name').value = contact.lastName;
  document.getElementById('phone').value = contact.phone;
  document.getElementById('email').value = contact.email;
  document.querySelector(`input[name="address-type"][value="${contact.addressType}"]`).checked = true;
  document.getElementById('address').value = contact.address;

  document.getElementById('address-field').style.display = 'block';

  validateForm(index);
}
