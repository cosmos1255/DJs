(async () => {
  try {
    await window.authenticate(window.config.username, window.config.password);
  } catch (error) {
    location.href = '/';
  }

  const contactListElement = document.getElementById('contact-list');

  async function getContacts() {
    // Do contacty things
    const response = await fetch('/api/contacts', {
      headers: {
        Authorization: `Basic ${btoa(`${window.config.username}:${window.config.password}`)}`
      }
    });

    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.status >= 400) {
      throw content;
    }

    return content;
  }

  async function render() {
    contactListElement.innerHTML = '';

    const genders = {
      M: 'Male',
      F: 'Female',
      O: 'Other'
    };

    // Add Contacts
    const addContactRow = document.createElement('tr');
    addContactRow.innerHTML = `
      <td><input id="add-contact-name" required></td>
      <td><input id="add-contact-email" required></td>
      <td>
        <select id="add-contact-gender" required>>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </td>
      <td><input id="add-contact-phone" required></td>
      <td>
        <button id="add-contact-button">Add Contact</button>
      </td>
    `;

    contactListElement.appendChild(addContactRow);

    const addContact = {
      name: contactListElement.querySelector('#add-contact-name'),
      email: contactListElement.querySelector('#add-contact-email'),
      gender: contactListElement.querySelector('#add-contact-gender'),
      phone: contactListElement.querySelector('#add-contact-phone'),
      button: contactListElement.querySelector('#add-contact-button')
    };

    addContact.button.addEventListener('click', async () => {
      const response = await fetch(`/api/contacts`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`${window.config.username}:${window.config.password}`)}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: addContact.name.value,
          email: addContact.email.value,
          gender: addContact.gender.value,
          phone: addContact.phone.value
        })
      });

      const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

      if (response.status >= 400) {
        throw content;
      }

      contacts.push(content);

      render();
    });
    // Delete Contacts
    // Edit Contacts
    contacts.forEach((contact, index) => {
      const row = document.createElement('tr');

      // Edit Mode
      if (contact._editMode) {
        row.innerHTML = `
          <td><input class="save-contact-name"></td>
          <td><input class="save-contact-email"></td>
          <td>
            <select class="save-contact-gender">>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </td>
          <td><input class="save-contact-phone"></td>
          <td>
            <button class="save-contact-button">Save</button>
          </td>
        `;

        // Get all of the Edit Mode Inputs / Selects / Buttons
        const save = {
          name: row.querySelector('.save-contact-name'),
          email: row.querySelector('.save-contact-email'),
          gender: row.querySelector('.save-contact-gender'),
          phone: row.querySelector('.save-contact-phone'),
          button: row.querySelector('.save-contact-button')
        }

        save.name.value = contact.name;
        save.email.value = contact.email;
        save.gender.value = contact.gender;
        save.phone.value = contact.phone;

        save.button.addEventListener('click', async () => {
          // TODO: I don't like using index here, is there some id we can use in that array for specific contacts.. ?
          const response = await fetch(`/api/contacts/${index}`, {
            method: 'PUT',
            headers: {
              Authorization: `Basic ${btoa(`${window.config.username}:${window.config.password}`)}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: save.name.value,
              email: save.email.value,
              gender: save.gender.value,
              phone: save.phone.value
            })
          });

          const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

          if (response.status >= 400) {
            throw content;
          }

          contact.name = save.name.value;
          contact.email = save.email.value;
          contact.gender = save.gender.value;
          contact.phone = save.phone.value;

          contact._editMode = false;

          render();
        });
      }
      // Read Only / View Mode
      else {
        row.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${genders[contact.gender]}</td>
          <td>${contact.phone}</td>
          <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>
        `;

        const editButton = row.querySelector('.edit');
        const deleteButton = row.querySelector('.delete');

        editButton.addEventListener('click', async () => {
          contact._editMode = true;

          render();
        });

        deleteButton.addEventListener('click', async () => {
          // TODO: I don't like using index here, is there some id we can use in that array for specific contacts.. ?
          const response = await fetch(`/api/contacts/${index}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Basic ${btoa(`${window.config.username}:${window.config.password}`)}`
            }
          });

          const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

          if (response.status >= 400) {
            throw content;
          }

          contacts.splice(index, 1);

          render();
        });
      }

      contactListElement.appendChild(row);
    });
  }

  const contacts = await getContacts();
  render();

  document.getElementById("logout").addEventListener('click', async=>{
    window.location = "/index.html";
  });
})();
