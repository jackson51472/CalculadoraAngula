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
  currentOperand: string = '';
  previousOperand: string = '';
  operation: string | null = null;

  appendNumber(number: string) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number;
    this.updateDisplay();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = null;
    this.updateDisplay();
  }

  chooseOperation(operation: string) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let result: number;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = result.toString();
    this.operation = null;
    this.previousOperand = '';
    this.updateDisplay();
  }

  appendDecimal() {
    this.appendNumber('.');
  }

  updateDisplay() {
    this.display = this.currentOperand || this.previousOperand;
  }

}
