import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Digital Anna';

  // @ViewChild(AppComponent)
  // links!: AppComponent;

  // hamburger = document.querySelector(".hamburger") as HTMLElement;
  // navLinks = document.querySelector(".nav-links") as HTMLElement;
  // links = document.querySelectorAll<HTMLElement>(".nav-links li");

  constructor() {}

  // navClick() {
  //   console.log("here");
  //   console.log(this.links);
    //    //Animate Links
    //    this.navLinks.classList.toggle("open");
    //    this.links.forEach(link => {
    //        link.classList.toggle("fade");
    //    });
   
    //    //Hamburger Animation
    //    this.hamburger.classList.toggle("toggle");
  // }

}


