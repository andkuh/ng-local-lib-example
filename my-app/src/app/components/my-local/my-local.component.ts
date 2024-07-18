import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-local',
  templateUrl: './my-local.component.html',
  styleUrls: ['./my-local.component.scss']
})
export class MyLocalComponent implements OnInit {

  url: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
