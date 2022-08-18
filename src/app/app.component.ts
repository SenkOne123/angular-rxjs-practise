import {Component, OnInit} from '@angular/core';
import Cat from "./models/Cat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cat: Cat = new Cat("Шмалик", 4, "Маааау", "Серенький");
  ngOnInit() {
    console.log(this.cat.say())
  }
}
