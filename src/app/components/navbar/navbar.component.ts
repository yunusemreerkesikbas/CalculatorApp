import { Component, OnInit } from '@angular/core';
import { CalculateService } from '@services/calculate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(protected calculateService: CalculateService) {}

  ngOnInit(): void {}
  onClick() {
    this.calculateService.showHistory();
  }
}
