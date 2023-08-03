import { Component, OnInit } from '@angular/core';
import { CalculateService } from '@services/calculate.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: string = '0';
  operation: string;
  lastHistoryOperation: string;

  constructor(protected calculateService: CalculateService) {}

  ngOnInit(): void {
    this.calculateService.operationSubject.subscribe((operation) => {
      this.operation = operation;
    });

    this.calculateService.resultSubject.subscribe((result) => {
      this.result = result;
      this.operation = this.result;
    });

    this.calculateService.operationSubject.subscribe((operation) => {
      this.updateLastHistoryOperation();
    });

    this.calculateService.resultSubject.subscribe((result) => {
      this.updateLastHistoryOperation();
    });

    this.updateInitialValues();
  }

  updateInitialValues(): void {
    this.operation = this.calculateService.getOperation();
    this.result = this.calculateService.getResult();
    this.updateLastHistoryOperation();
  }

  updateLastHistoryOperation(): void {
    const historyOperations = this.calculateService.getHistoryOperation();
    if (historyOperations.length > 0) {
      this.lastHistoryOperation = historyOperations[historyOperations.length - 1];
    }
  }
}
