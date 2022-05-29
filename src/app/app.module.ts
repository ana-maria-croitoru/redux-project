import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryService } from './gallery/gallery.service';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ gallery: galleryReducer }),
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
