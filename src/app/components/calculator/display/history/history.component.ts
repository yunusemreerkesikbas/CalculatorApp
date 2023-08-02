import { Component, OnInit } from '@angular/core';
import { CalculateService } from '@services/calculate.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyOperation: string[];
  constructor(protected calculateService: CalculateService) {
    this.historyOperation = this.calculateService.getHistoryOperation();
  }

  ngOnInit(): void {}
}
