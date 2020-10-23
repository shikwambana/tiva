import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiva',
  templateUrl: './tiva.component.html',
  styleUrls: ['./tiva.component.scss']
})
export class TivaComponent implements OnInit {

  list = ['Delivery','Bakery','Car Repair','Stokvel','Phones for sale','Cleaning Services','Furniture Repair Services']
  constructor() { }

  ngOnInit() {
  }

}
