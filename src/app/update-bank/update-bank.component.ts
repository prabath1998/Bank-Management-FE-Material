import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../Model/Bank';
import { BanksService } from '../services/banks.service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {

  id!:number;
  bank:Bank = new Bank();

  constructor(private banksService:BanksService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['bankId'];
    this.banksService.getBankById(this.id).subscribe(
      (data) => {
        this.bank = data;
      },
      (error) => console.log(error)
      
    )
  }

  onSubmit(){
    this.banksService.updateBank(this.id,this.bank).subscribe(
      (data) => {
        this.goToBanksList();
      },
      (error) => console.log(error)
      
    )
  }

  goToBanksList(){
    this.router.navigate(['/banks']);
  }

}
