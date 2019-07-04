import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common-components/main-header/main-header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { BannerComponent } from './common-components/banner/banner.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { StaticpagesModule } from './staticpages/staticpages.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    CoursesModule,
    StaticpagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
