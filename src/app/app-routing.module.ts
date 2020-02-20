import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UploaderComponent} from './uploader/uploader.component';
import {DeleteImagesComponent} from './delete-images/delete-images.component';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {MessageComponent} from './message/message.component';
import {CustomPreloadingService} from './custom-preloading.service';


const appRoutes: Routes = [
  { path: 'upload', component: UploaderComponent, canActivate: [AuthGuard]},
  { path: 'delete', component: DeleteImagesComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path:'messages', component: MessageComponent, canActivate: [AuthGuard]},
  {path: '', data:{ preload:true}, component: HomepageComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
