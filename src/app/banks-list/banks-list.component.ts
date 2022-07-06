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

  constructor(private banksService:BanksService,private router:Router) { }

  ngOnInit(): void {
    this.getBanks();
  }

  private getBanks(){
    this.banksService.getBanksList().subscribe((data)=>{
      this.banks = data;
    });
  }

}
