function FuncionBotonProductos(){
    let container = document.getElementById("contenedor");
    container.innerHTML = "<h1>Productos</h1> <h2>Alimentos</h2> Leche <br>  galletas <br>  hamburguesas<br>  prepizzas <h2>Bebidas</h2>  Coca Cola <br>  Fernet Branca <br>  Spritte<br>  Pepsi <h2>Limpieza</h2>  Jabon <br>  Shampoo <br>  Cepillo de dientes <br>Acondicionador ";

    let div1 = document.getElementById("div1");
    div1.className = "estilos";
}

function FuncionBotonPromociones(){
    let div2 = document.getElementById("div2");
    div2.className = "estilos2";

    let oferta = document.getElementById("ofertas");
    oferta.innerHTML = " <h1>Promociones de la semana</h1> <h2>2 Coca Colas + 1     FernetBranca</h2> <p>$1200</p> <h2>3 Prepizzas</h2> <p>$500</p> <h2>2 2x1 en    Shampoos<h2>" ;

}

let botonProductos = document.getElementById("boton1");

botonProductos.onclick = FuncionBotonProductos;

let botonPromociones = document.getElementById("boton2");

botonPromociones.onclick = FuncionBotonPromociones;