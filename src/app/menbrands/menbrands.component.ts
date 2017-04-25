import { SelectivePreloadingStrategy } from 'app/routing/selective-preloading-strategy';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menbrands',
  templateUrl: './menbrands.component.html',
  styleUrls: ['./menbrands.component.css']
})
export class MenbrandsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private preloadStrategy: SelectivePreloadingStrategy) {
    console.log('ManbrandsComponent init');
  }

  ngOnInit() {
  }

}
