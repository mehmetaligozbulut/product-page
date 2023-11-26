import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';

const routes: Routes = [
  { path: 'product', component: ShopComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: '**', redirectTo: '/product' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
