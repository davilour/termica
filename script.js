// Variaveis

let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function TrocaTela(dados) {

    console.log(dados)

  document.querySelector(".nomecid").innerHTML = "Tempo em "+ dados.name +", "+ dados.sys.country;
  document.querySelector(".temp").innerHTML = dados.main.temp+" °C";
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade: "+ dados.main.humidity + "%";

  // = dados.weather[0].icon
  //let iconName = weather.weather[0].icon;
  const iconName = dados.weather[0].icon;
  document.querySelector(".imgicon").src = `./icons/${iconName}.png`;

}

async function BuscaCidade(cidade) {
  const dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=" +
      chave +
      "&lang=pt_br" +
      "&units=metric"
  ).then((resposta) => resposta.json());

  TrocaTela(dados);
}

function cliquebotao() {
  let cidade = document.querySelector(".input-cidade").value;
  BuscaCidade(cidade);

  
}

addEventListener("keypress", function(event)
{
if (event.key === "Enter") {
  let cidade = document.querySelector(".input-cidade").value;
  BuscaCidade(cidade)
    
}

})



