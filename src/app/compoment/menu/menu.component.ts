import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { PrimeIcons, MenuItem} from 'primeng/api'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{

  constructor(){}

  items: MenuItem[] = [];
  
  ngOnInit(): void {
      this.items = [
          {
            label: 'New',
            icon: PrimeIcons.USER,
          },
          {
            label: 'Delete',
            icon: PrimeIcons.CART_PLUS
          }
      ];
  }
}
