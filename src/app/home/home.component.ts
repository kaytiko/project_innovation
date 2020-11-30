import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Генерируем и внедряем инновации в ваше производство";
  paragraph: string = "Мы объединили на одной площадке ученых, новаторов, изобретателей и проектировщиков с территории всей нашей страны";

  about_title: string = "Наши инновации";
  
  constructor() { }

  ngOnInit() {
  }

}
