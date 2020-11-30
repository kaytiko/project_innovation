import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu = ["Главная страница", "Инноваторам", "Проектировщикам"];
  mail = "projectinnovations@gmail.com";
  
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
