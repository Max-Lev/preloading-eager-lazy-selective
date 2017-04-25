import { Routes, RouterModule } from '@angular/router';
import { MenbrandsComponent } from './menbrands.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: MenbrandsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenbrandsComponent]
})
export class MenbrandsModule {
  constructor() {
    console.log('MenbrandsModule init');
  }
}
