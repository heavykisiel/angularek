import { Component, OnInit } from '@angular/core';
import  wydawcy  from '../../assets/wydawcy.json'
@Component({
  selector: 'app-wydawcy',
  templateUrl: './wydawcy.component.html',
  styleUrls: ['./wydawcy.component.css']
})
export class WydawcyComponent implements OnInit {
  wydawcy!:any[];
  index:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.wydawcy = wydawcy.slice(this.index,this.index+10)
  }

}
