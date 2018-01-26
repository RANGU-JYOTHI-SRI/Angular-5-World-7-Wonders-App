import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SevenWondersListComponent } from './Wonders/seven-wonders-list.component';
import { SevenWondersService } from './Wonders/seven-wonders.service';
import { StarComponent } from './shared/star.component';
import {RouterModule} from '@angular/router';
import { WonderDetailComponent } from './Wonders/wonder-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SevenWondersListComponent,
    StarComponent,
    WonderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'home', component:HomeComponent},
      {path : 'wonders',component:SevenWondersListComponent},
      {path : 'wonders/:id',component:WonderDetailComponent},
      {path : '',redirectTo:'home',pathMatch:'full'},
      { path: '**', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  providers: [SevenWondersService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
