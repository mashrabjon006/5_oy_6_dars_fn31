// User Card Functionality
const nameInput = document.getElementById('name');
const btn = document.getElementById('btn');
const win = document.getElementById('cardContainer');

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'box';
    card.id = `card-${data.id}`;
    
    card.innerHTML = `
        <h1>${data.name}</h1>
        <button class="delete-button">O'chirish</button>
    `;

    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        deleteCard(data.id);
    });

    return card;
}

function validate(name) {
    if (!name) {
        alert("Ismni kiriting");
        return false;
    }
    return true;
}

btn.addEventListener('click', function() {
    const name = nameInput.value.trim();

    const isValid = validate(name);
    if (!isValid) {
        return;
    }

    let user = {
        id: Date.now(),
        name: name
    };

    let card = createCard(user);
    win.appendChild(card); 

    nameInput.value = '';
});

function deleteCard(id) {
    const card = document.getElementById(`btn`);
    if (card) {
        card.remove();
    }
}