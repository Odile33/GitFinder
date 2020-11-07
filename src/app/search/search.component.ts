import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output () emitsearchtxt = new EventEmitter<any>()

  searchtxt:string;
    
    
search(){
  this.emitsearchtxt.emit(this.searchtxt)
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
