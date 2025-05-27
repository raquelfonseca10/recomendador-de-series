let campoIdade;
let campoFantasia, campoComedia, campoDrama, campoSuspense;
let titulo;

function setup() {
  createCanvas(800, 400);
  background(255);

  // Título da página
  titulo = createElement('h1', 'Recomendador de Séries da Netflix');
  titulo.position(20, 5);
  titulo.style('color', '#7CD1F7');

  // Label e input para idade
  createSpan('Sua idade: ').position(20, 60);
  campoIdade = createInput('18');
  campoIdade.position(100, 55);
  campoIdade.size(50);

  // Checkboxes para categorias
  campoFantasia = createCheckbox(' Fantasia', false);
  campoFantasia.position(20, 90);

  campoComedia = createCheckbox(' Comédia', false);
  campoComedia.position(20, 120);

  campoDrama = createCheckbox(' Drama', false);
  campoDrama.position(20, 150);

  campoSuspense = createCheckbox(' Suspense', false);
  campoSuspense.position(20, 180);
}

function draw() {
  background( 'pink'); // fundo rosa

  let idade = int(campoIdade.value());
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeSuspense = campoSuspense.checked();

  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeComedia, gostaDeDrama, gostaDeSuspense);

  fill(color(76, 0, 115)); // cor roxa escura
  textAlign(CENTER, CENTER);
  textSize(32);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, fantasia, comedia, drama, suspense) {
  // Prioridade das categorias: Fantasia > Comédia > Drama > Suspense
  // Se não escolher nada, retorna sugestão genérica

  if (fantasia) {
    if (idade < 14) {
      return "Stranger Things";
    } else {
      return "The Witcher";
    }
  } 
  else if (comedia) {
    if (idade < 14) {
      return "Brooklyn Nine-Nine";
    } else {
      return "The Office";
    }
  } 
  else if (drama) {
    if (idade < 14) {
      return "Anne with an E";
    } else {
      return "Breaking Bad";
    }
  } 
  else if (suspense) {
    if (idade < 14) {
      return "A Série Divergente";
    } else {
      return "Mindhunter";
    }
  } 
  else {
    return "Marque uma categoria para receber recomendação!";
  }
}
