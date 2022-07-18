import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanksListComponent } from './banks-list/banks-list.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { NgToastModule } from 'ng-angular-popup';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSortModule} from '@angular/material/sort';
// import { NgxUiLoaderModule } from "ngx-ui-loader"; 

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text:"Loading...",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  pbColor:"red",
  bgsColor:"red",
  fgsColor:"#16cf3c",
  fgsType:SPINNER.doubleBounce,
  fgsSize:100,
  blur: 4,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5 // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    BanksListComponent,
    CreateBankComponent,
    UpdateBankComponent,
    BankDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NgToastModule,
    MatPaginatorModule,
    NgbModule,
    NgbPaginationModule,
    MatSortModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
