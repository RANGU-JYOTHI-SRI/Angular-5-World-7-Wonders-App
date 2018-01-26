import { Component, OnInit } from '@angular/core';
import {SevenWondersService} from './seven-wonders.service';
import { IWonder } from './Wonders';

@Component({
  selector: 'app-seven-wonders-list',
  templateUrl: './seven-wonders-list.component.html',
  styleUrls: ['./seven-wonders-list.component.css']
})

export class SevenWondersListComponent implements OnInit {
  errorMessage: string;
  pageTitle:string = "Seven Wonders of the World";
  wonders:IWonder[];
  _listFilter:string;
  filteredWonders:IWonder[];
 
  
  constructor(private wondersService:SevenWondersService) { 

  }
  
  get listFilter(){        
    return this._listFilter;    
  }

  set listFilter(value:string){
    this._listFilter = value;    
    this.filteredWonders = this.listFilter ? this.performFilter(this.listFilter):this.wonders;   
  }
  

  ngOnInit() {
    this.wondersService.getAllWonders()
      .subscribe(wondersCollection => {
          this.wonders = wondersCollection,
          this.filteredWonders = this.wonders;
      },
      error => this.errorMessage = <any>error);
  }

  performFilter(filterBy:string):IWonder[]{
    filterBy=filterBy.toLowerCase();
      return this.wonders.filter((wonder:IWonder) => 
              wonder.WonderName.toLowerCase().indexOf(filterBy)!==-1)
  }
}
