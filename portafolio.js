// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Chile Picante",
    about: "Imagen gráfica y packaging de Ajies del mundo.",
}, {
    figure: "media/foto-02.jpg",
    title: "Raco",
    about: "Imagen gráfica y packaging de la chicha de Curacaví.",
}, {
    figure: "media/foto-03.jpg",
    title: "Conservas",
    about: "Elavoración de conservas.",
}, {
    figure: "media/foto-04.png",
    title: "Queque de piñones",
    about: "Infografía sobre la receta del queque de piñones.",
}, {
    figure: "media/foto-05.jpg",
    title: "Nae",
    about: "Fotografía de producto alimenticio.",
}, {
    figure: "media/foto-06.png",
    title: "La Contadora",
    about: "Imagen gráfica de la fonda La Contadora.",
}, {
    figure: "media/foto-07.png",
    title: "Nae",
    about: "Creación de imagen gráfica, packaging y producto alimenticio.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
