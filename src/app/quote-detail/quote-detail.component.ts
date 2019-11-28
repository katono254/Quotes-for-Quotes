import { Component, OnInit, Input } from '@angular/core'; 
import{Quote} from '../quote';
import{DateCountPipe} from '../date-count.pipe';
                                                           


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
