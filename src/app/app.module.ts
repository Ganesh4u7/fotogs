import { BrowserModule } from '@angular/platform-browser';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import {UploaderComponent} from './uploader/uploader.component';
import {UploadimageComponent} from './uploadimage/uploadimage.component';
import {DeleteImagesComponent} from './delete-images/delete-images.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import { MessageComponent } from './message/message.component';
import {AuthGuard} from './auth.guard';
import {LoginService} from './login.service';

import {DropzoneDirective} from './dropzone.directive';



var firebaseConfig = {
  apiKey: "AIzaSyA0m4s4qTRJC_6MK_nK9qf0qZFlPBtotvo",
  authDomain: "photographyuploads-599ab.firebaseapp.com",
  databaseURL: "https://photographyuploads-599ab.firebaseio.com",
  projectId: "photographyuploads-599ab",
  storageBucket: "gs://photographyuploads-599ab.appspot.com/",
  messagingSenderId: "72458929409",
  appId: "1:72458929409:web:ea16268761ecf446"
};

@NgModule({
  declarations: [
    AppComponent,
    FirstBlockComponent,
    AboutComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactComponent,
    ContactBlockComponent,
    SidebarComponent,
    SidebarMobileComponent,
    FooterComponent,
    AdminComponent,
    UploaderComponent,
    UploadimageComponent,
    DeleteImagesComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    DropzoneDirective,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
