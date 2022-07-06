import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BanksListComponent } from './banks-list/banks-list.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';

const routes: Routes = [
  {path:'banks',component:BanksListComponent},
  {path:'',redirectTo:'banks',pathMatch:'full'},
  {path: 'create-bank', component:CreateBankComponent},
  {path: 'update-bank/:bankId', component:UpdateBankComponent},
  {path:'bank-details/:bankId',component:BankDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
