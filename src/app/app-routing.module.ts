import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderUIComponent } from './order-ui/order-ui.component';
import { CheckUIComponent } from './check-ui/check-ui.component';
import { LoginUiComponent } from './login-ui/login-ui.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginUiComponent },
  { path: 'userOrder', component: OrderUIComponent },
  { path: 'checkOrders', component: CheckUIComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
