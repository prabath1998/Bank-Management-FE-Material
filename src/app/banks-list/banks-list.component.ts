import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { tap } from 'rxjs';
import { Bank } from '../Model/Bank';
import { BanksService } from '../services/banks.service';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css'],
})
export class BanksListComponent implements OnInit {
  banks!: Bank[];
  isActive!: boolean;
  displayedColumns: string[] = [
    'name',
    'code',
    'status',
    'branches',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(
    private banksService: BanksService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getBanks();
  }

  private getBanks() {
    this.banksService.getBanksList().subscribe((data) => {
      this.banks = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  updateBank(id: number) {
    this.router.navigate(['update-bank', id]);
  }

  deleteBank(id: number) {
    this.banksService.deleteBank(id).subscribe((data) => {
      this.toast.success({
        detail: 'DELETED',
        summary: 'Bank deleted successfully',
        duration: 5000,
      });
      this.getBanks();
    });
  }

  bankDetails(id: number) {
    this.router.navigate(['bank-details', id]);
  }
}
