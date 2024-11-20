let inicio = '<div id="inicio_cont" class="cont">' +
    '<div id="inicio_texto">' +
    '<div id="big_nombre"><h1>Felipe<br>Muñiz Peña</h1><h1 class="el_punto">.</h1></div>' +
    '<p>Mientras estás leyendo esto me encuentro finalizando mi formación como desarrollador web a través de la Junta de Andalucía, ' +
    'a la vez que sigo aprendiendo por otros medios.</p>' +
    '<p>A día de hoy me encuentro en la búsqueda de prácticas en una empresa o centro de trabajo, así como llevando a cabo mi proyecto de final de formación.<br></p>' +
    '<a id="este_soy_yo" href="javascript:void(0);">Sobre mí.</a>' +
    '</div><img id="inicio_foto" src="foto_inicio.jpg" alt=":)"></div>';

let sobre_mi = '<div id="sobre_mi_cont" class="cont">' +
    '<div id="div_sobre_mi"><div>' +
    '<h1 class="estela-3">Sobre mí.</h1>' +
    '<h1 class="estela-2">Sobre mí.</h1>' +
    '<h1 class="estela-1">Sobre mí.</h1>' +
    '<h1 class="estela-0">Sobre mí.</h1>' +
    '</div><img id="sobre_mi_foto" src="foto_sobre_mi.jpg" alt=":)">' +
    '</div>' +
    '<div id="texto_sobre_mi"><p>Mis conocimientos actuales provienen principalmente de estudiar Desarrollo ' +
    'de Aplicaciones Web, además de mi formación constante y paralela a través de otros medios.<br> <br>' +
    'Durante varios años me formé como Ingeniero en Diseño Industrial y Desarrollo de Producto, pero decidí cambiar de ' +
    'dirección hacia algo que me generaba mucho más interés.<br><br>' +
    'Soy un apasionado de las matemáticas y, de alguna manera, el poder aplicarlas a las ' +
    'metodologías y herramientas vinculadas a la programación, diseño web y análisis de datos ha sido para mí algo fundamental. ' +
    'Desde entonces he visto como mis ganas de aprender han ido a más y más hasta el día de hoy.<br><br>' +
    'Mientras estudiaba, he llevado a cabo varios trabajos en los últimos años que, si bien no se ' +
    'ubican en este marco laboral, me han enseñado a trabajar tanto en equipo como en solitario, y a tratar ' +
    'con clientes y compañeros. En ellos aprendí también que soy una persona con un grado de ' +
    'involucramiento muy alto, responsable y seria.<br><br>Si considero que puedo hacer algo, me ofrezco para ello. ' +
    'Si considero que no, aprendo hasta que deje que de ser así.<br><br>' +
    'Actualmente me encuentro en la búsqueda de formación en un centro de trabajo o empresa.<br><br></p></div></div>';

let conocimientos = '<div id="conocimientos_cont" class="cont">' +
    '<h1>Conocimientos y <br>habilidades.</h1>' +
    '<p>Mediante lo aprendido tanto en mi formación académica como en aquella que realizo de manera paralela he aprendido a trabajar con múltiples herramientas:</p>' +
    '<ul id="lista_conocimientos"><li>Lenguajes como Java, Javascript, así como su uso con Node y React, Python, PHP, HTML y CSS.</li>' +
    '<li>Control de versiones y despliegue de aplicaciones web mediante Laravel.</li>' +
    '<li>Creación, despliegue y manipulación de bases de datos, usando principalmente como sistema MySQL.</li>' +
    '<li>Conocimiento avanzados de matemáticas y estadística.</li>' +
    '<li>Uso a nivel profesional de Adobe Illustrator y otros programas de diseño vectorial.</li>' +
    '<li>Nivel profesional de Inglés · Certificado Aptis C.</li></ul>' +
    '<p>He llevado a cabo diseños web, desde los que son como este mismo a tiendas online. También he utilizado APIs para poblar bases de datos propias, así como para consultar y cotejar datos en tiempo real.</p>' +
    '<p>Actualmente, en mi tiempo libre busco pequeños proyectos que poder llevar a cabo, como diseños de interfaces o programar música generativa mediante valores numéricos.<br><br><br></p>' +
    '</div>';

let contacto = '<div id="contacto_cont" class="cont">' +
    '<h1>Contacto.</h1>' +
    '<p>No dudes en ponerte en contacto conmigo por la vía que prefieras:</p>' +
    '<ul><li><a href="https://www.linkedin.com/in/felipe-muniz-pena/" target="_blank" rel="noopener noreferrer">Mi perfil</a> en LinkedIn</li>' +
    '<li>felmunpen@gmail.com</li>' +
    '<li>655-549-548</li>' +
    '<li>O, si lo prefieres, a través del formulario:</li></ul>' +
    '<div class="container">' +
    '<form action="/action_page.php">' +
    '<label for="fname">Nombre y apellidos:</label>' +
    '<input type="text" id="fname" name="firstname" placeholder="">' +
    '<label for="email">E-mail:</label>' +
    '<input type="email" id="email" name="email" placeholder="">' +
    '<label for="subject">Cuéntame:</label>' +
    '<textarea id="subject" name="subject" placeholder="" style="height:100px"></textarea>' +
    '<input type="submit" value="Enviar">' +
    '</form></div></div>'
    ;

$(document).ready(function () {
    document.getElementById("contenido").innerHTML = inicio;
    $("#contenido").css("opacity", "100%");

    boton_espera();

    setInterval(() => {
        $(".el_punto").css("color", "red");
        setTimeout(() => {
            $(".el_punto").css("color", "orange");
        }, 300)
        setTimeout(() => {
            $(".el_punto").css("color", "yellow");
        }, 600)
        setTimeout(() => {
            $(".el_punto").css("color", "white");
        }, 1000)
        setTimeout(() => {
            $(".el_punto").css("color", "black");
        }, 1400)
    }, 3000)
});


$(".nav_link").click(function () {
    contenido = this.id;
    // alert(contenido);

    $("#contenido").css("opacity", "0%");

    if (contenido == 'inicio') {
        $("#mi_nombre").css("opacity", "0%");
    } else {
        $("#mi_nombre").css("opacity", "100%");

    }

    setTimeout(() => {
        if (contenido == 'inicio') {
            document.getElementById("contenido").innerHTML = inicio;
            boton_espera();
        } else if (contenido == "sobre_mi") {
            document.getElementById("contenido").innerHTML = sobre_mi;
        } else if (contenido == "conocimientos") {
            document.getElementById("contenido").innerHTML = conocimientos;
        } else if (contenido == "contacto") {
            document.getElementById("contenido").innerHTML = contacto;
        }

    }, 320)

    setTimeout(() => {
        $("#contenido").css("opacity", "100%");
    }, 700)

})

function boton_espera() {
    setTimeout(() => {
        $('#este_soy_yo').click(function () {
            // alert("Holaaa");
            $("#contenido").css("opacity", "0%");

            $("#mi_nombre").css("opacity", "100%");

            setTimeout(() => {
                document.getElementById("contenido").innerHTML = sobre_mi;
            }, 320)

            setTimeout(() => {
                $("#contenido").css("opacity", "100%");
            }, 700)
        })
    }, 100)
}

