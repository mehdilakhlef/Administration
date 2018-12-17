import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AlternantElement } from '../model/alternant-element';

import { DialogsService } from '../dialog-service/dialogs.service';

// Données pour les étudiants d'une promotion
import { ALTERNANTS_M1 } from '../mock';
import { ALTERNANTS_M2 } from '../mock';

@Component({
  selector: 'app-detail-promotion',
  templateUrl: './detail-promotion.component.html',
  styleUrls: ['./detail-promotion.component.scss']
})
export class DetailPromotionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  promotion: string;
  displayedColumns: string[] = ['INE', 'nom', 'prenom', 'parcours', "action"];
  dataSource: any;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private dialogsService: DialogsService,) {}

  ngOnInit() {
    this.promotion = this.route.snapshot.params['promotion'];
    if(this.promotion=='M1 MIAGE 2018/2019')
    {
      this.dataSource = new MatTableDataSource(ALTERNANTS_M1);
    }
    else
    {
      this.dataSource = new MatTableDataSource(ALTERNANTS_M2);
    }
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(alternant: AlternantElement, onglet: string){
    this.dialogsService.form(alternant, onglet);
  }  
}
