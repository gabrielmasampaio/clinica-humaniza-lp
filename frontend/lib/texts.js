const questions = {
  1: "Como deve ser feita a higiene bucal?",
  2: "O rosto fica inchado por muito tempo? \n",
  6: "Quantos dias precisarei ficar de repouso? \n",
  4: "Como deve ser a alimentação nesse período? \n",
  5: "Vou sentir dor no pós-operatório? \n",
  3: "APÓS A CIRURGIA, PRECISAREI DE FISIOTERAPIA OU FONOTERAPIA? \n"
}
const answers = {
  1: "Essa é uma etapa fundamental na recuperação. É muito importante que a higiene bucal seja feita pelo menos 3 vezes ao dia, com escova de cerdas macias e cabeça pequena, evitando atrito e incômodos devido à sensibilidade na face. \n" +
      "\n" +
      "O cirurgião bucomaxilofacial também pode indicar a utilização de enxaguantes bucais, para evitar a formação de placa bacteriana e prevenir infecções pós-operatórias. \n" +
      "\n" +
      "Kit Humaniza Pós-operatório: Na Humaniza Odontologia, o paciente recebe um kit pós-operatório, a fim de auxiliar na boa recuperação, contendo: \n" +
      "\n" +
      "Faixa bolsa térmica; \n" +
      "Enxaguante bucal; \n" +
      "Regenerador labial; \n" +
      "Espelho; \n" +
      "Água; \n" +
      "Água de coco; \n" +
      "Necessaire; \n" +
      "Toalha.",
  2: "Nos primeiros três dias, é comum que o rosto apresente edema (inchaço), que vai diminuindo com o passar dos dias, podendo desaparecer em sua grande parte em até duas semanas. \n" +
      "\n" +
      "Após um mês, pode-se notar ainda um pequeno inchaço, e mesmo tendo sido reabsorvido quase por completo, o rosto ganhará um aspecto completamente natural após um ano de cirurgia. \n" +
      "\n" +
      "No entanto, após 30 dias, a maioria dos pacientes já se sentem totalmente seguros para interagir socialmente.",
  6: "Após a cirurgia, o paciente precisa ficar em observação hospitalar entre 24 e 48 horas. Em casa, é importante manter um repouso de acordo com a orientação do cirurgião bucomaxilofacial e após esse tempo, poderá voltar gradativamente às suas atividades do dia a dia.",
  4: "Mesmo depois de retornar às suas atividades, como trabalho e estudos, nos primeiros 45 dias é indicado não mastigar, por isso, a alimentação deve ser feita com alimentos líquidos ou pastosos, como mingaus, purês, sopas e sucos.",
  5: "Como a cirurgia é realizada nos ossos da face, alguns pacientes têm medo de sentir muita dor. \n" +
      "\n" +
      "No entanto, dores fortes não são comuns nos pacientes que realizam esse procedimento. Geralmente, o que acontece é uma redução da sensibilidade ao toque (parestesia), mas, para evitar dores, o cirurgião bucomaxilofacial irá prescrever medicamentos, como analgésicos e antiflamatórios.",
  3: "A reabilitação do paciente com um acompanhamento com fisioterapia ajudará muito no processo, pois contribuirá para restabelecer os movimentos faciais, além de corrigir problemas fonoaudiológicos que o paciente já apresentava antes da cirurgia, por conta da má-formação mandibular e maxilar. \n" +
      "\n" +
      "O cirurgião bucomaxilofacial avaliará o caso e indicará se esse acompanhamento é fundamental. De qualquer forma, esses procedimentos poderão ajudar a ter uma recuperação de forma mais rápida e segura. \n" +
      "\n" +
      "Procedimento Humaniza: Iniciamos com a fisioterapia ainda no centro cirúrgico, com isso, diminuímos o inchaço, possibilitando um melhor pós-operatório."
}
const comparisonPageText = () => {
  return `
    A cirurgia ortognática é um procedimento utilizado para a correção do crescimento disfuncional dos maxilares, que podem ocasionar outros distúrbios, como problemas na articulação e respiração, bem como fatores relacionados à estética.

    A cirurgia ortognática é indicada quando o tratamento ortodôntico com aparelhos não é suficiente para corrigir a mordida ou para pessoas que possuem deformidade esquelética congênita dos maxilares, como quando o queixo e os dentes estão deslocados muito para frente ou para trás.

    A cirurgia ortognática pode ser realizada tanto em adolescentes quanto em adultos.

    Para corrigir deformidades de crescimento em crianças e adolescentes, tenta-se utilizar o tratamento com aparelhos ortodônticos, devido à possibilidade de adaptação por conta do crescimento. Já em adultos, a cirurgia é o tratamento indicado.

    A cirurgia ortognática ajusta corretamente os ossos da face (a maxila e a mandíbula), de maneira que fiquem alinhadas e possibilitem um maior conforto ao mastigar, falar, respirar e todas as outras funções primordiais da cavidade oral.
    Bem posicionados, os dentes e ossos criam uma aparência mais equilibrada, interferindo diretamente na imagem, autoestima e confiança dos pacientes.
  `;
};

export {questions, answers, comparisonPageText}