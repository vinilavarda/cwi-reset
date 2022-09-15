let grau, classificacao

function Imc(a, b) {
  let calculo = a / b ** 2

  if (calculo < 18.5) {
    classificacao = 'Magreza'
    grau = 0
  }

  if (calculo >= 18.5 && calculo <= 24.99) {
    classificacao = 'Normal'
    grau = 0
  }

  if (calculo >= 25.0 && calculo <= 29.99) {
    classificacao = 'Sobrepreso'
    grau = 1
  }

  if (calculo >= 30.0 && calculo <= 39.99) {
    classificacao = 'Obesidade'
    grau = 2
  }

  if (calculo >= 40.0) {
    classificacao = 'Obesidade'
    grau = 3
  }

  switch (grau) {
    case 0:
      console.log('Você não possui grau de obesidade.')
      break

    case 1:
      console.log('Cuidado, você está acima do peso recomendado pela OMS.')
      break

    case 2:
      console.log('Cuidado, você está acima do peso recomendado pela OMS.')
      break

    case 3:
      console.log('Cuidado, você está acima do peso recomendado pela OMS.')
      console.log('É importante procurar um médico para avaliar sua saúde.')
      break
  }
}

console.log(Imc(165, 1.67))
