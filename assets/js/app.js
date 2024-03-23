const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombreElement = document.querySelector('.name'); // Cambiar el nombre de la variable , se agregó un . porque es una clase
const blogElement = document.querySelector('.blog'); // Cambio en el nombre de la variable // Poner el . porque en el index se esta seleccionando una clase
const locacionElement = document.querySelector('.location'); // Cambio en elS nombre de la variable

async function displayUser(username) { // coloque async, para que sea una funcion asincrona porque se esta usando await  
  nombreElement.innerHTML = 'cargando...'; // cambio en textContent por innerHTML // cambair el nombre a la variable
  const response = await fetch(`${usersEndpoint}/${username}`);
   console.log(data); 
  data = await response.json(); // convertir 
 
  nombreElement.innerHTML = `${data.name}`; // se cambio el apostrofe grave 
  // cambio en textContent por innerHTML // cambio de nombre de constante
  blogElement.innerHTML = `${data.blog}`; // se cambio el apostrofe grave  // cambio en textContent por innerHTML // cambio de nombre de constante
  locacionElement.innerHTML = `${data.location}`; // se cambio el apostrofe grave // cambio en textContent por innerHTML //cambio de nombre de constante 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nombre.innerHTML = `Algo salió mal: ${err}`
} // cambio en textContent por innerHTML //cambio de nombre de constante 


displayUser('stolinski') .catch(handleError);