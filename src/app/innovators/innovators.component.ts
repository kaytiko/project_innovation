import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovators',
  templateUrl: './innovators.component.html',
  styleUrls: ['./innovators.component.scss']
})
export class InnovatorsComponent implements OnInit {

  title: string = "Создаем плодородную Экосистему для реализации инновационных идей в реальные промышленные производства";
  paragraph: string = "Наша площадка объединяет заказчиков инноваций, их генераторов и тех, кто инновации проектирует и внедряет. Это первый ресурс в интернете, который обеспечивает комфортное взаимодействие всех заинтересованных сторон";

  constructor() { }

  ngOnInit() {
  }

}
