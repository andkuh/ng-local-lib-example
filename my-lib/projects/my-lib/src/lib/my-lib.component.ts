import { Component, OnInit } from '@angular/core';
//import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.scss']
})
export class MyLibComponent implements OnInit {

   url: string = '';
  // constructor(private service: MyLibService) { 

  // }

  ngOnInit(): void {
    //this.url = this.service.getBaseUrl();
  }

}
