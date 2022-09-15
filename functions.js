// Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;

/*
function funcao(a) {
  console.log(a)
}

funcao(10657) */

/*********************************************************************************************************** */

/*Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
  Crie uma função para cada algoritmo proposto lá, exceto o número 6;
  Todas as funções devem retornar o valor final;
  Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
  Procure utilizar comentários para documentar cada método;
  Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
*/

// Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;

/* function sameName(nameA, nameB) {
  if (nameA === nameB) {
    return true
  } else {
    return false
  }
}

console.log(sameName('Maria', 'Maria')) */

// Crie uma variável maiorDeIdade que verifica se idade é de um adulto;
/*
function maiorIdade(a) {
  if (a >= 18) {
    return true
  } else {
    return false
  }
}

console.log(maiorIdade(17))*/

// Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;

/*let valorNovo

function juros(valorBoleto) {
  valorNovo = valorBoleto * 1.1

  return valorNovo
}

console.log(juros(100.00))*/

// Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;

function mediaAritmetica(valores) {
  let i = 0,
    media = 0

  for (i = 0; i < valores.length; i++) {
    media = media + valores[i]
  }

  media = media / valores.length

  return media
}

console.log(mediaAritmetica([1])) // 1
console.log(mediaAritmetica([1, 4, 10])) // 5
console.log(mediaAritmetica([1, 2, 3, 4, 5])) // 3

// O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

/*function lucroBruto(receitaLiquida, custos) {
  let lucroBruto = receitaLiquida - custos
  return margemBruta(lucroBruto, receitaLiquida)
}

function margemBruta(lucroBruto, receitaLiquida) {
  let margemBruta = (lucroBruto / receitaLiquida) * 100
  return margemBruta
}

console.log(lucroBruto(1000000, 500000)) // 50
console.log(lucroBruto(528459.11, 632501.87)) // -19.68 */
