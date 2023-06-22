const baseEndpoint = 'https://api.github.com';//Esta es la conexion con la api de github
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se corrigio el querySelector, ya que name, no contaba con la indicacion de que era una clase, lo mismo con blog que en vez de tener un . indicando que era una clase, tenia un # indicando un ID
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Se coloca un async para que el await funcione correctamente
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`)
  .then(respuesta => respuesta.json())
  .then(pintarDOM => {
  console.log(pintarDOM);
  $n.textContent = `${pintarDOM.name}`;//Se cambia la apostrofe por backticks porque las plantillas literales solo se activan con las backtick
  $b.textContent = `${pintarDOM.blog}`;
  $l.textContent = `${pintarDOM.location}`;
})

return data
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

//displayUser('stolinski').catch(handleError);
displayUser('stolinski');