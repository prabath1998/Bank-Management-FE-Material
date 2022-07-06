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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
