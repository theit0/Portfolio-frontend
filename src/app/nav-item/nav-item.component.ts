import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  navItems:string[]=['About','Experiencie','Education','Skills','Proyects'];

  constructor() { }
  
  ngOnInit(): void {
  }

}
