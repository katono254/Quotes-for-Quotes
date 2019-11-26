import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';  



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
    onCancel() {      
  
    this.showNew = false;
    }
    quote:Quote[]=[
      new Quote('The 50-50-90 rule is a 50-50 chance of getting it right and a 90% probability you will get it wrong', 'Boyd','Admin' new Date())
      new Quote('One of the most productive days was throwing away 1000 lines of code','Cynthia','Admin' new Date() )
      new Quote('There are 10 types of people in this world, those who understand binary and those who dont','Andrew', 'Admin' new Date())
      new Quote('Code never lies, comments do','Greg', 'Admin' new Date())
      new Quote('One man’s crappy software is another man’s full time job.', 'Isiche', 'Admin', new Date())
      new Quote('One man’s constant is another man’s variable.','Chancy', 'Admin', new Date())
      new Quote('Your limitation is only your imagination.', 'Deontay Wilder','Admin', new Date())
      new Quote('Push yourself, because no one else is going to do it for you.', 'Father Lance','Admin', new Date())


    ]
    
 
  constructor() { }

  ngOnInit() {
  }

}
