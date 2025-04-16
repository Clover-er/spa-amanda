const content = document.getElementById("content");

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

function render() {
  const route = location.hash.slice(1) || "home";
  switch (route) {
    case "home":
      content.innerHTML = `
        <h1>🌐 Construyendo...</h1>
        <p>bienveDINOS 🦖 al proyecto. <br>Aún estamos trabajando en la era mesozoica.</p>
      `;
      break;
    case "carrusel":
      content.innerHTML = `
        <h2>🖼️ Carrusel de Imágenes</h2>
        <div class="carrusel">
          <img src="img1.jpg" class="active" />
          <img src="img2.jpg" class="active"/>
          <img src="img3.jpg" class="active"/>
        </div>
      `;
      iniciarCarrusel();
      break;
    case "estructura":
      content.innerHTML = `
        <h2>📋 Estructura por completar</h2>
        <h3>🖼️ Acá ingrese una imagen:</h3>
        <img src="img3.jpg" alt="Imagen de ejemplo">

        <h3>📄 Aquí va una tabla:</h3>
        <table border="1" cellpadding="10" cellspacing="5" width=80% height="200" align="center bgcolor="#f2f2f2">
  <tr>
    <th>Tabla</th>
    <th>Tabla</th>
    <th>Tabla</th>
  </tr>
  <tr>
    <td>XXX</td>
    <td>XXX</td>
    <td>XXX</td>
  </tr>
  <tr>
    <td>XXX</td>
    <td>XXX</td>
    <td>XXX</td>
  </tr>
</table>

        <h3>📑 Acá va una lista ordenada:</h3>
        <ol>
  <li>ListaOrdenada</li>
  <li>ListaOrdenada</li>
  <li>ListaOrdenada</li>
  <li>ListaOrdenada</li>
  <li>ListaOrdenada</li>
</ol>

        <h3>📑 Acá va una lista no ordenada:</h3>
        <ul>
  <li>ListaNoOrdenada</li>
  <li>ListaNoOrdenada</li>
  <li>ListaNoOrdenada</li>
</ul>

        <h3>📥 Aquí debe ir un formulario:</h3>
        <form>
  <label for="formulario">NombreFormulario:</label><br>
  <input type="text" id="formulario" name="Formulario" /><br><br>
  
  <label for="email">NombreCorreo:</label><br>
  <input type="email" id="email" name="email" /><br><br>

  

        <h3>🔘 Aquí agregue un botón:</h3>
        <input type="submit" value="Botón" />
</form>
      `;
      break;
    default:
      content.innerHTML = `<p>Ruta no encontrada.</p>`;
  }
}

function iniciarCarrusel() {
  const imgs = document.querySelectorAll(".carrusel img");
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove("active");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("active");
  }, 2000);
}
