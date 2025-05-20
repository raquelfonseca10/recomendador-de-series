let seriesNetflix = [
  { nome: "Stranger Things", idadeMinima: 14, generos: ["fantasia", "ficção científica", "terror"] },
  { nome: "The Crown", idadeMinima: 16, generos: ["drama", "histórico"] },
  { nome: "Bridgerton", idadeMinima: 16, generos: ["romance", "drama", "histórico"] },
  { nome: "Squid Game", idadeMinima: 18, generos: ["suspense", "terror", "drama"] },
  { nome: "Ozark", idadeMinima: 18, generos: ["drama", "crime", "suspense"] },
  { nome: "Sex Education", idadeMinima: 16, generos: ["comédia", "drama"] },
  { nome: "The Queen's Gambit", idadeMinima: 16, generos: ["drama", "histórico"] },
  { nome: "Peaky Blinders", idadeMinima: 18, generos: ["drama", "crime", "histórico"] },
  { nome: "Black Mirror", idadeMinima: 18, generos: ["ficção científica", "suspense", "drama"] },
  { nome: "Arcane", idadeMinima: 12, generos: ["animação", "ação", "aventura"] }
];

let idadeUsuarioNetflix;
let gostaFantasiaNetflix, gostaAventuraNetflix, gostaDramaNetflix, gostaRomanceNetflix, gostaTerrorNetflix, gostaFiccaoCientificaNetflix, gostaSuspenseNetflix, gostaComediaNetflix, gostaHistoricoNetflix, gostaCrimeNetflix, gostaAnimacaoNetflix, gostaAcaoNetflix;
let seriesRecomendadasNetflix = [];

function setup() {
  createCanvas(600, 400);
  background(220);
  textSize(18);
  fill(0);
  textAlign(CENTER);
  text("Recomendador de Séries Netflix", width / 2, 50);
  textSize(14);
  textAlign(LEFT);

  // Coletar idade
  idadeUsuarioNetflix = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasiaNetflix = prompt("Gosta de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventuraNetflix = prompt("Gosta de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDramaNetflix = prompt("Gosta de drama? (sim/não)").toLowerCase() === "sim";
  gostaRomanceNetflix = prompt("Gosta de romance? (sim/não)").toLowerCase() === "sim";
  gostaTerrorNetflix = prompt("Gosta de terror? (sim/não)").toLowerCase() === "sim";
  gostaFiccaoCientificaNetflix = prompt("Gosta de ficção científica? (sim/não)").toLowerCase() === "sim";
  gostaSuspenseNetflix = prompt("Gosta de suspense? (sim/não)").toLowerCase() === "sim";
  gostaComediaNetflix = prompt("Gosta de comédia? (sim/não)").toLowerCase() === "sim";
  gostaHistoricoNetflix = prompt("Gosta de histórico? (sim/não)").toLowerCase() === "sim";
  gostaCrimeNetflix = prompt("Gosta de crime? (sim/não)").toLowerCase() === "sim";
  gostaAnimacaoNetflix = prompt("Gosta de animação? (sim/não)").toLowerCase() === "sim";
  gostaAcaoNetflix = prompt("Gosta de ação? (sim/não)").toLowerCase() === "sim";

  // Lógica de recomendação
  for (let serie of seriesNetflix) {
    if (idadeUsuarioNetflix >= serie.idadeMinima) {
      let gostouDeAlgumGenero = false;
      if (gostaFantasiaNetflix && serie.generos.includes("fantasia")) gostouDeAlgumGenero = true;
      if (gostaAventuraNetflix && serie.generos.includes("aventura")) gostouDeAlgumGenero = true;
      if (gostaDramaNetflix && serie.generos.includes("drama")) gostouDeAlgumGenero = true;
      if (gostaRomanceNetflix && serie.generos.includes("romance")) gostouDeAlgumGenero = true;
      if (gostaTerrorNetflix && serie.generos.includes("terror")) gostouDeAlgumGenero = true;
      if (gostaFiccaoCientificaNetflix && serie.generos.includes("ficção científica")) gostouDeAlgumGenero = true;
      if (gostaSuspenseNetflix && serie.generos.includes("suspense")) gostouDeAlgumGenero = true;
      if (gostaComediaNetflix && serie.generos.includes("comédia")) gostouDeAlgumGenero = true;
      if (gostaHistoricoNetflix && serie.generos.includes("histórico")) gostouDeAlgumGenero = true;
      if (gostaCrimeNetflix && serie.generos.includes("crime")) gostouDeAlgumGenero = true;
      if (gostaAnimacaoNetflix && serie.generos.includes("animação")) gostouDeAlgumGenero = true;
      if (gostaAcaoNetflix && serie.generos.includes("ação")) gostouDeAlgumGenero = true;

      if (gostouDeAlgumGenero && !seriesRecomendadasNetflix.includes(serie.nome)) {
        seriesRecomendadasNetflix.push(serie.nome);
      }
    }
  }
}

function draw() {
  background(220);
  textSize(18);
  fill(0);
  textAlign(CENTER);
  text("Recomendações de Séries Netflix", width / 2, 30);

  textSize(14);
  textAlign(LEFT);
  fill(50);
  let yPos = 70;
  if (seriesRecomendadasNetflix.length > 0) {
    text("Com base nas suas preferências e idade, recomendamos:", 20, yPos);
    yPos += 20;
    for (let i = 0; i < seriesRecomendadasNetflix.length; i++) {
      text("- " + seriesRecomendadasNetflix[i], 40, yPos);
      yPos += 20;
    }
  } else {
    text("Nenhuma série da Netflix recomendada com base nas suas preferências e idade.", 20, yPos);
  }

  noLoop(); // Executa o draw apenas uma vez após o setup
}
