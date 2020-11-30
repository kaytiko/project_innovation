import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planners',
  templateUrl: './planners.component.html',
  styleUrls: ['./planners.component.scss']
})
export class PlannersComponent implements OnInit {

  title: string = "Создаем плодородную Экосистему для реализации инновационных идей в реальные промышленные производства";
  paragraph: string = "Наша площадка объединяет заказчиков инноваций, их генераторов и тех, кто инновации проектирует и внедряет. Это первый ресурс в интернете, который обеспечивает комфортное взаимодействие всех заинтересованных сторон";

  constructor() { }

  ngOnInit() {
  }

}
