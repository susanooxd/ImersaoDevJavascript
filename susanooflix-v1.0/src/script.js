var listaFilmes = [
  "https://a-static.mlcdn.com.br/1500x1500/viagem-ao-centro-da-terra-garnier-itatiaia/liberatalivros/3c647b4a1eca11eba9d34201ac18502e/87bf2f57bd540155c76a4ba2a56b363e.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/bd/Bridgetoterabithiaposter.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/92/12/47/20181896.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
