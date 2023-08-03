// calculate.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  operation: string = '';
  result: string = '0';
  resultSubject: Subject<string> = new Subject<string>();
  operationSubject: Subject<string> = new Subject<string>();
  historyOperations: string[] = [];
  history: boolean = false;
  private isInitialValue: boolean = true;
  constructor() {
    this.operation = '';
    this.result = '0';
  }


  calculateResult(): void {
    try {
      if (this.operation === '') {
        return;
      }

      if (this.operation.includes('%')) {
        const parts = this.operation.split('%');
        if (parts.length === 2) {
          const dividend = parseFloat(parts[0]);
          const divisor = parseFloat(parts[1]);
          this.result = (dividend % divisor).toString();
        } else {
          throw new Error('Geçersiz mod işlemi');
        }
      } else {
        const numericResult = eval(this.operation.replace('00', '0'));
        if (isNaN(numericResult) || !isFinite(numericResult)) {
          throw new Error('Geçersiz işlem');
        }
        this.result = numericResult.toString();
      }

      this.resultSubject.next(this.result);
      this.historyOperations.push(this.operation);
      this.operation = this.result;
      this.isInitialValue = true;
    } catch (error) {
      console.error('Hesaplama hatası:', error);
      this.operation = '';
      this.result = '';
      this.resultSubject.next('');
    }
  }





  clearDisplay(): void {
    this.operation = '';
    this.result = '';
    this.resultSubject.next('');
    this.operationSubject.next('');
  }

  addToOperation(value: string): void {
    if (this.isInitialValue && (value === '0' || value === '.' || value === '00')) {
      return;
    }
    this.isInitialValue = false;
    if (this.isInitialValue && "+-*/%".includes(value)) {
      return;
    }

    if ("+-*/%".includes(this.operation[this.operation.length - 1]) && "+-*/".includes(value)) {
      this.operation = this.operation.slice(0, -1) + value;
      this.operationSubject.next(this.operation);
      return;
    }
    if (this.operation === '' && "+-*/%".includes(value)) {
      return;
    }
    if ("+-*/".includes(this.operation[this.operation.length - 1]) && "+-*/".includes(value)) {
      this.operation = this.operation.slice(0, -1) + value;
      this.operationSubject.next(this.operation);
      return;
    }
    if (this.result !== '') {
      this.result = '';
    }

    this.operation += value;
    this.operationSubject.next(this.operation);
  }





  negateLastNumber(): void {
    const lastNumberRegex = /(-?\d+\.?\d*)$/;
    const matches = this.operation.match(lastNumberRegex);

    if (matches && matches.length > 0) {
      const lastNumber = parseFloat(matches[0]);
      const negatedNumber = -lastNumber;
      this.operation = this.operation.replace(lastNumberRegex, negatedNumber.toString());
      this.operationSubject.next(this.operation);
    }
  }

  getOperation(): string {
    return this.operation;
  }

  getResult(): string {
    return this.result;
  }
  showHistory(): void {
    this.history = !this.history;
  }
  getHistoryOperation(): string[] {
    return this.historyOperations;
  }
}
