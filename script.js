// scripts.js

function register() {
    // Obtener valores del formulario de registro
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    // Almacenar en localStorage (simulación simple)
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Registro exitoso');
    window.location.href = "index.html";
}

function login() {
    // Obtener valores del formulario de inicio de sesión
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;
    

    // Obtener valores almacenados en localStorage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Verificar si las credenciales coinciden
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Inicio de sesión exitoso');
        window.location.href = "index.html";
    } else {
        alert('Credenciales incorrectas');
        
    }
}

function search() {
    var searchTerm = document.getElementById('search-input').value;

    // Aquí deberías implementar la lógica de búsqueda real,
    // como conectarte a una API o buscar en una base de datos.
    // Por ahora, simplemente mostraremos un mensaje en la consola.
    console.log('Búsqueda de:', searchTerm);
}
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

    var btn = document.querySelector('.btn');
    var menu = document.querySelector('.menu');


    btn.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
function showLoginForm() {
        document.getElementById('loginOverlay').style.display = 'block';
        document.getElementById('registerOverlay').style.display = 'none';
      }
  
      function showRegisterForm() {
        document.getElementById('registerOverlay').style.display = 'block';
        document.getElementById('loginOverlay').style.display = 'none';
      }
      function closeForm(formName) {
        // Puedes agregar aquí cualquier lógica adicional antes de cerrar la forma
    
        // Simulando el cierre de la forma con un mensaje de alerta
        alert('Cerrando la forma de ' + formName);
        document.getElementById('loginOverlay').style.display = 'none';
        document.getElementById('registerOverlay').style.display = 'none';
        // Puedes agregar aquí cualquier lógica adicional después de cerrar la forma
      }