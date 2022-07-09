import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../Model/Bank';
import { BanksService } from '../services/banks.service';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit {
  banks!:Bank[];
  isActive!:boolean;
  displayedColumns: string[] = ['name','code','status','branches','actions'];

  constructor(private banksService:BanksService,private router:Router) { }

  ngOnInit(): void {
    
    this.getBanks();
  }

  private getBanks(){
    this.banksService.getBanksList().subscribe((data)=>{
      this.banks = data;
    });
  }

  updateBank(id: number) {
    this.router.navigate(['update-bank', id]);
  }

  deleteBank(id: number) {
    this.banksService.deleteBank(id).subscribe((data) => {
      this.getBanks();
    });
  }

  bankDetails(id: number) {
    this.router.navigate(['bank-details', id]);
  }

 
  

}
