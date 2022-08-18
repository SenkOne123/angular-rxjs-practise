import { Component } from '@angular/core';
import Developer from "./models/Developer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  admin: Developer[] = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.admin.push(new Developer("Vanya", 12, "top-programmer"));
    }
  }
}
