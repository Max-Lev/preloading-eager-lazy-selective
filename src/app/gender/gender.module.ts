import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './../women/women.component';
import { GenderComponent } from './gender.component';

const routes: Routes = [
  {
    // REQUIRED EMPTY PATH FOR LAZYLOADED MODULE TO WORK
    path: '', component: GenderComponent,
    children: [
      {
        // MEN COMPONENT LAZYLOADING MODULE
        path: 'men', loadChildren: './../men/men.module#MenModule'
      },
      {
        // WOMEN COMPONENT LAZYLOADING MODULE
        path: 'women', component: WomenComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenderComponent, WomenComponent]
})
export class GenderModule {

  constructor() {
    console.log('GenderModule init');
  }

}
