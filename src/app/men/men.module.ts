//import { MenbrandsComponent } from './../menbrands/menbrands.component';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    // EMPTY PATH REQUIRED FOR LAZYLOADING MODULE
    path: '', component: MenComponent,
    children: [
      {
        // path: 'menbrands', component: MenbrandsComponent
        path: 'menbrands', loadChildren: './../menbrands/menbrands.module#MenbrandsModule',
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [MenComponent]
})
export class MenModule {

  constructor() {
    console.log('men module init');
  }

}
