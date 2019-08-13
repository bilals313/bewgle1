import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  dataInfo:object[];
  inf:object[];
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

  function1(){
    this.infor.get('./assets/data.json').subscribe((dt)=>{
      this.inf = (dt)
    })
  }

}
