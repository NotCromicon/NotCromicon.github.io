const url ='https://pokeapi.co/api/v2/pokemon/45/';

 fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let nombre = document.getElementById('nombrepokemon');
      	nombre.innerHTML = `<p>Nombre: ${data.name}</p>`
      let experienciabase = document.getElementById('experienciabase');
      	experienciabase.innerHTML = `<p>Experiencia Base: ${data.base_experience}</p>`
      let id = document.getElementById('id');
      	id.innerHTML = `<p>Id: ${data.order}</p>`  
      let peso = document.getElementById('peso');
      	peso.innerHTML = `<p>Peso: ${data.weight}</p>` 
      })
    .catch(err => console.error(err)) 