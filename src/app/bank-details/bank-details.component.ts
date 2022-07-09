import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bank } from '../Model/Bank';
import { BanksService } from '../services/banks.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  id!:number;
  bank!:Bank;

  constructor(private route:ActivatedRoute,private banksService:BanksService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['bankId'];
    this.bank = new Bank();
    this.banksService.getBankById(this.id).subscribe((data)=>{
      this.bank = data;
    })
  }


}
