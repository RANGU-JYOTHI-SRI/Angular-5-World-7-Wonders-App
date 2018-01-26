import { Component, OnChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating:number;  
  starwidth:number;

  constructor() { }

  ngOnChanges():void {
      this.starwidth = this.rating * 86/5;
  }
}
