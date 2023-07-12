// key.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculateService } from '@services/calculate.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  @Input() key: string;

  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {}
}
