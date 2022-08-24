import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  

  ngOnInit(): void {
    /*  Cuando click en el button, le añado y le quito la clase
    es decir, hacer un TOGGLE de la clase .active*/
    const collapseButton = (document.querySelector('.collapse-button-menu') as HTMLButtonElement);
    const collapseNav = (document.querySelector('.collapse-nav')            as HTMLElement);

    collapseButton.addEventListener('click',():void=>{
      collapseNav.classList.toggle('activo');
    })
    }

}
