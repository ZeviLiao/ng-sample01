import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {
  constructor() {}

  siteName = 'hello site name';
  siteLink = 'http://www.google.com';

  onclick(): void {
    alert('hello');
  }

  ngOnInit(): void {}
}
