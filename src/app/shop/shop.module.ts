import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    ShopComponent,
    NavbarComponent,
    CartSummaryComponent,
    CartDetailComponent,
    FooterComponent,
  ],
  exports: [
    ShopComponent,
    CartDetailComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class ShopModule {}
