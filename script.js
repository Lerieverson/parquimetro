class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcularTempo() {
    if (this.valor < 1) {
      return 0;
    } else if (this.valor < 2) {
      return 30;
    } else if (this.valor < 3) {
      return 60;
    } else {
      return 120;
    }
  }

  calcularTroco() {
    if (this.valor > 3) {
      return this.valor - 3;
    }
    return 0;
  }
}

function processar() {
  const valor = parseFloat(document.getElementById('valor').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(valor)) {
    resultado.innerHTML = 'Informe um valor válido.';
    return;
  }

  const parquimetro = new Parquimetro(valor);

  if (valor < 1) {
    resultado.innerHTML = 'Valor insuficiente.';
  } else {
    const tempo = parquimetro.calcularTempo();
    const troco = parquimetro.calcularTroco();

    resultado.innerHTML = `
            <p>Tempo concedido: <strong>${tempo} minutos</strong></p>
            <p>Troco: <strong>R$ ${troco.toFixed(2)}</strong></p>
        `;
  }
}
