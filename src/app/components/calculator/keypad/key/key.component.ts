// key.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  @Input() key: string;

  constructor() {}

  ngOnInit(): void {}
}
