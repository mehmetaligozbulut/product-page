import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { LoaderState } from './store/states/loader.state';
import { CategoryState } from './store/states/category.state';
import { ProductState } from './store/states/product.state';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([LoaderState, CategoryState, ProductState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
