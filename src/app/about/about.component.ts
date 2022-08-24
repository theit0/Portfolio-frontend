import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  constructor() { }

  /* cuando se clickea en el boton se copia
   pelegrinatheo@gmail.com al portapapeles del usuario*/
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    
    /* cuando se clickea en el boton cambia 
    pelegrinatheo@gmail.com por Copied! */
    
    let boxText = document.querySelector('.text') as HTMLElement;
    setTimeout(function(){
      boxText.innerHTML = "pelegrinatheo@gmail.com";
    },1000);
    boxText.innerHTML = "Copied!";
    
    
    


    /* cuando se clickea en el boton genera
    un texto que dice copied! */
    /* function toggleText():void{
      let copied = document.querySelector('.copied') as HTMLElement;
        copied.innerHTML = "Copied!"
        setTimeout(function(){
          copied.innerHTML = "";
        },2500);
    }
    toggleText();
 */

  }

 
  
  ngOnInit(): void {
    let copied = document.querySelector('.copied') as HTMLElement;
    copied.innerHTML = "";
    
  }

  

 
}
