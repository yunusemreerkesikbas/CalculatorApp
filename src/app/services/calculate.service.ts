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

  constructor() {
    this.operation = '';
    this.result = '0'; // Başlangıç değeri 0 olarak ayarlanmalı.
  }


  calculateResult(): void {
    try {
      if (this.operation === '') {
        return; // İşlem boş ise hesaplama yapma.
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
        this.result = eval(this.operation).toString();
      }

      this.resultSubject.next(this.result);
      this.historyOperations.push(this.operation);
      this.operation = this.result;
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
    if (this.operation === '' && '+-*/%'.includes(value)){
      return
    }
    if (this.operation === '' && '+-*/'.includes(value)) {
      return; // Kullanıcı hala bir sayı girmeden operatör kullanamaz.
    }

    if (this.result !== '') {
      this.result = ''; // Yeni bir işlem başladığında sonucu sıfırla.
    }
    this.operation += value;
    this.operationSubject.next(this.operation);
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
