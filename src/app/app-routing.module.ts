import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoundItemComponent } from './found-item/found-item.component';
import { LoginComponent } from './login/login.component';
import { LostItemComponent } from './lost-item/lost-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResponsesComponent } from './responses/responses.component';

const routes: Routes = [{
  path: ' ',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path: ' ',
  component: AppComponent 
},
{
  path: 'login',
  component:LoginComponent
},
{
  path: 'about',
  component: FoundItemComponent 
},
{
  path: 'gallery',
  component: LostItemComponent 
},
{
  path: 'contact',
  component: ResponsesComponent 
},
{
  path: '**',
  component: PageNotFoundComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
