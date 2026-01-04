const button = document.getElementById('btn');
const users = document.getElementById('users');

async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const result = await response.json();

  return result;
}

async function displayUsers() {
  const data = await getUsers();

  for (let i = 0; i < data.length; i++) {
    const article = document.createElement('article');
    const name = document.createElement('p');
    const email = document.createElement('p');

    article.className = 'user';
    name.className = 'username';
    email.className = 'email';

    name.innerText = data[i].name;
    email.innerText = data[i].email;

    article.appendChild(name);
    article.appendChild(email);

    users.appendChild(article);
  }
}

button.addEventListener('click', displayUsers);
