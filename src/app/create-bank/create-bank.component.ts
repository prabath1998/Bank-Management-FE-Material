import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../Model/Bank';
import { BanksService } from '../services/banks.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  bank: Bank = new Bank();

  constructor(private banksService:BanksService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveBank();
  }

  saveBank(){
    this.banksService.createBank(this.bank).subscribe(
      (data) => {
        console.log(data);
        this.goToBanksList();
      },
      (error) => console.log(error)
      
    );
  }

  goToBanksList(){
    this.router.navigate(['/banks']);
  }

}
