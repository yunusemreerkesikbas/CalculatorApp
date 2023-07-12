// calculate.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  operation: string;
  result: string;
  resultSubject: Subject<string> = new Subject<string>();
  operationSubject: Subject<string> = new Subject<string>();
  historyOperations: string[] = [];
  history: boolean = false;

  constructor() {
    this.operation = '';
    this.result = '';
  }

  calculateResult(): void {
    try {
      this.result = eval(this.operation);
      console.log(this.result);
      this.resultSubject.next(this.result);
      this.historyOperations.push(this.operation);
      console.log(this.historyOperations);
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
    this.operation += value;
    console.log('operation', this.operation);
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
