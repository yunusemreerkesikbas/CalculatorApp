// result.component.ts
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

  constructor(protected calculateService: CalculateService) {}

  ngOnInit(): void {
    this.operation = this.calculateService.getOperation();
    this.result = this.calculateService.getResult();


    this.calculateService.operationSubject.subscribe((operation) => {
      this.operation = operation;
    });
    this.calculateService.resultSubject.subscribe((result) => {
      this.result = result;
      this.operation = this.result;
    });
  }
}
