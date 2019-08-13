import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataInfo:object[];
  cartItem:number=0;

  constructor(@Inject(HttpClient) public infor) { }

  ngOnInit() {
    this.infor.get('./assets/data.json').subscribe(
      data => {
        this.dataInfo = data as object [];
            },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  

}
