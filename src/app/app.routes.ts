import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';
//регистрируем routers
export const routes: Routes = [
  //full-чтобы при других страницах не открывался, чтобы избежать двойного открытия
  { path: '', component: ShopComponent, pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'product/:id', component: ProductComponent },
];


