import { Component, OnInit } from '@angular/core';
import { Br } from './br.js';
import { ActivatedRoute } from '@angular/router';
import { SelectivePreloadingStrategy } from './../routing/selective-preloading-strategy';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  modules: string[];

  constructor(private route: ActivatedRoute, private preloadStrategy: SelectivePreloadingStrategy) 
  {
    console.log('GenderComponent init');

    this.modules = preloadStrategy.preloadedModules;
    console.log('preloaded modules:', this.modules);
  }

  ngOnInit() {
  }

}
