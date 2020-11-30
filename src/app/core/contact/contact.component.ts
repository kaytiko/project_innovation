import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `Имя пользователя: ${this.name}. Почта: ${this.email}. Комментарий: ${this.message}`;
    console.log(allInfo); 
  }

}
