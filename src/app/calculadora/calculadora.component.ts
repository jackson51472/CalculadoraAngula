import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  display: string = '';
  primeiro: string = '';
  segundo: string = '';
  operacao: string | null = null;

  adicionarNumero(number: string) {
    if (number === '.' && this.segundo.includes('.')) return;
    this.segundo = this.segundo.toString() + number;
    this.atualizarDisplay();
  }

  clear() {
    this.segundo = '';
    this.primeiro = '';
    this.operacao = null;
    this.atualizarDisplay();
  }

  tipoOperacao(lll: string) {
    if (this.segundo === '') return;
    if (this.primeiro !== '') {
      this.calcular();
    }
    this.operacao = lll;
    this.primeiro = this.segundo;
    this.segundo = '';
  }

  calcular() {
    let result: number;
    const primeiro_convertido = parseFloat(this.primeiro);
    const segundo_convertido = parseFloat(this.segundo);
    if (isNaN(primeiro_convertido) || isNaN(segundo_convertido)) return;

    switch (this.operacao) {
      case '+':
        result = primeiro_convertido + segundo_convertido;
        break;
      case '-':
        result = primeiro_convertido - segundo_convertido;
        break;
      case '*':
        result = primeiro_convertido * segundo_convertido;
        break;
      case '/':
        result = primeiro_convertido / segundo_convertido;
        break;
      default:
        return;
    }

    this.segundo = result.toString();
    this.operacao = null;
    this.primeiro = '';
    this.atualizarDisplay();
  }

  decimal() {
    this.adicionarNumero('.');
  }

  atualizarDisplay() {
    this.display = this.segundo || this.primeiro;
  }

}
