// keypad.component.ts
import { Component, OnInit } from '@angular/core';
import { CalculateService } from '@services/calculate.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {
  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {}

  addToOperation(key: string) {
    this.calculateService.addToOperation(key);
  }
  negateLastNumber(): void {
    this.calculateService.negateLastNumber();
  }
  calculateResult(): void {
    this.calculateService.calculateResult();
  }
  clearResult(): void {
    this.calculateService.clearLastHistoryOperation();
    this.calculateService.clearDisplay();
  }
}
