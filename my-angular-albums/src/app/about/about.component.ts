import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div style="text-align:center;">
    <h1 class="jumbotron my-5 mx-5">
      Welcome to {{ title }}!
    </h1>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  title = "My Angular Albums";

  constructor() { }

  ngOnInit() {
  }

}
