import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksListComponent } from './banks-list/banks-list.component';
import { CreateBankComponent } from './create-bank/create-bank.component';

const routes: Routes = [
  {path:'banks',component:BanksListComponent},
  {path:'',redirectTo:'banks',pathMatch:'full'},
  {path: 'create-bank', component:CreateBankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
