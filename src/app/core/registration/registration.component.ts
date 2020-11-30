import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string;
  email: string;
  phone: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `Имя пользователя: ${this.name}. Почта: ${this.email}. Телефон: ${this.phone}`;
    console.log(allInfo); 
  }

}
