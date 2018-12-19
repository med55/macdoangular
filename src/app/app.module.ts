import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MacdoComponent } from './macdo/macdo.component';

const appRoutes: Routes = [

  {
    path: 'macdo/:id',
    component: MacdoComponent,
    data: { title: 'Product Details' }
  },
  {
    path: '',
    redirectTo: '/macdo',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MacdoComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
