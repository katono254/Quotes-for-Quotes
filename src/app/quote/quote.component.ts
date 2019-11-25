import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';   /**importing quote blueprint class */

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit() {
  }

}
