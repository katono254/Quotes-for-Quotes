import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';   /**importing quote blueprint class */


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotemodel:Quote;
  showNew:Boolean=false
  submitType:string='Save'
  quotes: any;
  onNew() {
  
    this.quotemodel = new Quote("", "", "", new Date(), 0, 0);
    this.submitType = 'Save';
    this.showNew = true;
  }
  onSave() {
    if (this.submitType === 'Save') {
      this.quotes.push(this.quotemodel);
    }
    this.showNew = false;
  }
    
  

  
    

    





  
 
  constructor() { }

  ngOnInit() {
  }

}
