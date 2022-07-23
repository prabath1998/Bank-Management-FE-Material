import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Bank } from '../Model/Bank';
import { BanksService } from '../services/banks.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  bank: Bank = new Bank();

  constructor(private banksService:BanksService,private router:Router,private toast: NgToastService,private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveBank();
  }

  saveBank(){
    this.ngxService.start();
    this.banksService.createBank(this.bank).subscribe(
      (data) => {
        console.log(data);
        this.toast.success({detail:"SUCCESS",summary:'Bank added successfully',duration:5000});
        this.ngxService.stop();
        this.goToBanksList();
      },
      (error) => console.log(error)
      
    );
  }

  goToBanksList(){
    this.router.navigate(['/banks']);
  }

}
