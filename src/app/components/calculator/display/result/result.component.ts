import {Component, OnInit} from '@angular/core';
import {CalculateService} from '@services/calculate.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: string = '0';
  operation: string;
  lastHistoryOperation: string;

  constructor(private calculateService: CalculateService) {
  }

  ngOnInit(): void {
    this.calculateService.operationSubject.subscribe((operation) => {
      this.operation = operation;
      this.updateLastHistoryOperation();
    });

    this.calculateService.resultSubject.subscribe((result) => {
      this.result = result;
      this.operation = this.result;
      this.updateLastHistoryOperation();
    });

    this.updateInitialValues();
  }

  updateInitialValues(): void {
    this.operation = this.calculateService.getOperation();
    this.result = this.calculateService.getResult();

    // Varsayılan değeri 0 olarak ayarla
    if (this.result === '') {
      this.result = '0';
    }

    this.updateLastHistoryOperation();
  }

  updateLastHistoryOperation(): void {
    this.lastHistoryOperation = this.calculateService.getLastHistoryOperation();
  }


}
