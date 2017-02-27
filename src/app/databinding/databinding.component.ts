import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = "hey dude";
  numberInterpolation = 2;

  onTest() {
    return true;
  }
  onClicked(value: string) {
    console.log("From databinding");
  }
}
