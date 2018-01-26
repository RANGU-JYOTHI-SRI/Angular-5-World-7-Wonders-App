import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SevenWondersService } from './seven-wonders.service';
import { IWonder } from './wonders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wonder-detail',
  templateUrl: './wonder-detail.component.html',
  styleUrls: ['./wonder-detail.component.css']
})
export class WonderDetailComponent implements OnInit {
  pageTitle:string='Product Detail'
  wonder:IWonder;
  constructor(private _route:ActivatedRoute,
              private wondersService:SevenWondersService,
              private _router:Router) { }

  ngOnInit() {
    let id=+this._route.snapshot.paramMap.get('id');    
    this.pageTitle=`: ${id}`;
    this.wondersService.getAllWonder(id).subscribe(wonder => this.wonder = wonder)
  }
  onBack(){
      this._router.navigate(['/wonders']);
  }
}
