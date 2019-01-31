import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {

  title = 'PortalGrid';
  userUrl;

  ngAfterViewInit(): void {
    this.userUrl = document.getElementById('userUrl').innerHTML.trim();
  }
}
