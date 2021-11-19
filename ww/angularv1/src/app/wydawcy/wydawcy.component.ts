  import { Component, OnInit } from '@angular/core';
  import  wydawcyRaw  from '../../assets/wydawcy.json'
  @Component({
    selector: 'app-wydawcy',
    templateUrl: './wydawcy.component.html',
    styleUrls: ['./wydawcy.component.css']
  })
  export class WydawcyComponent implements OnInit {
    wydawcy!:any[];
    wydawcyRaw!:any[];

    index:number = 0;

    constructor() { }

    ngOnInit(): void {
      this.wydawcy = wydawcyRaw.slice(this.index,this.index+10)
    }
    next(){
      this.index+=10;
      this.wydawcy = wydawcyRaw.slice(this.index,this.index+10)
    }
    back(){
      this.index-=10;
      this.wydawcy = wydawcyRaw.slice(this.index,this.index+10)
    }
    changeO(obj:any){
      this.wydawcy=wydawcyRaw;
      if(obj.target.value == "asc"){
        
        this.wydawcy.sort((a,b)=> a["Pe\u0142na nazwa wydawcy"] > b["Pe\u0142na nazwa wydawcy"] ? 1 : -1 )
        this.wydawcy = this.wydawcy.slice(this.index,this.index+10)
      }else if(obj.target.value == "desc"){
        this.wydawcy.sort((a,b)=> a["Pe\u0142na nazwa wydawcy"] < b["Pe\u0142na nazwa wydawcy"] ? 1 : -1 )
        this.wydawcy = this.wydawcy.slice(this.index,this.index+10)
      }
      //alert(obj.target.value);
    }
  }
