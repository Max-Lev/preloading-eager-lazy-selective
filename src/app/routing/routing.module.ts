import { ProductComponent } from './../product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategy }
  from 'app/routing/selective-preloading-strategy';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'gender', loadChildren: './../gender/gender.module#GenderModule',
    data: { preload: true }
  },
  {
    path: '', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path: '**', component: ProductComponent
  }
];

@NgModule({
  imports: [
    CommonModule,

    /// PRELOADING ALL MODULES
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

    /// SELECTIVE PRELOADING MODULS
    RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy })

    /// EAGER LOADING
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [ProductComponent],
  providers: [SelectivePreloadingStrategy]
})
export class RoutingModule { }
