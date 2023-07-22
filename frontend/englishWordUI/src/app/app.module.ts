import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LayoutComponent } from './layouts/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';
import { ExamplesModalComponent } from './home/examples-modal/examples-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    NotFoundComponent,
    ExamplesModalComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide:'apiUrl',useValue:environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
