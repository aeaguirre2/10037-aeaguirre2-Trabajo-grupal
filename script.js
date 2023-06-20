window.onload = function() {
  cargarUsuarios();
  fetch("peliculas.json")
  .then(response => response.json())
  .then(data => mostrarPeliculas(data));
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        mostrarLibros(this);
      }
    };
    xhttp.open("GET", "libros.xml", true);
    xhttp.send();
  };
  
  function mostrarLibros(xml) {
    var xmlDoc = xml.responseXML;
    var libros = xmlDoc.getElementsByTagName("libro");
    var listaLibros = document.getElementById("lista-libros");
    for (var i = 0; i < libros.length; i++) {
      var titulo = libros[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
      var autor = libros[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
      var anio = libros[i].getElementsByTagName("anio")[0].childNodes[0].nodeValue;
      var editorial = libros[i].getElementsByTagName("editorial")[0].childNodes[0].nodeValue;
      var li = document.createElement("li");
      var texto = document.createTextNode(titulo + " - " + autor + " (" + anio + ") - " + editorial);
      li.appendChild(texto);
      listaLibros.appendChild(li);
    }
  }
  function mostrarPeliculas(data) {
    var listaPeliculas = document.getElementById("lista-peliculas");

    data.peliculas.forEach(function(pelicula) {
      var titulo = pelicula.titulo;
      var director = pelicula.director;
      var anio = pelicula.anio;
      var genero = pelicula.genero;
      var li = document.createElement("li");
      var texto = document.createTextNode(titulo + " - " + director + " (" + anio + ") - " + genero);
      li.appendChild(texto);
      listaPeliculas.appendChild(li);
    });
  }
  function cargarUsuarios() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var data = this.responseXML;
        mostrarUsuarios(data);
      }
    };
    xhttp.open("GET", "usuarios.xml", true);
    xhttp.send();
  }
  
  function mostrarUsuarios(data) {
    var listaUsuarios = document.getElementById("lista-usuarios");
    var usuarios = data.getElementsByTagName("usuario");
  
    for (var i = 0; i < usuarios.length; i++) {
      var nombre = usuarios[i].getElementsByTagName("nombre")[0].textContent;
      var email = usuarios[i].getElementsByTagName("email")[0].textContent;
  
      var li = document.createElement("li");
      var texto = document.createTextNode(nombre + " - " + email);
      li.appendChild(texto);
      listaUsuarios.appendChild(li);
    }
  }