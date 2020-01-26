import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  range = new Array(25);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToClass(i: number) {
    if ((i + 2) < 10) {
      this.router.navigate([`menu/class0${(i + 2)}`]);
    } else {
      this.router.navigate([`menu/class${(i + 2)}`]);
    }
  }

}
