import { Observable } from "rxjs";
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

import { LivretDialog } from './livret-dialog/livret-dialog.component';
import { AlternantDialog } from './alternant-dialog/alternant-dialog.component';
import { EntrepriseDialog } from './entreprise-dialog/entreprise-dialog.component';

import { AlternantElement } from '../model/alternant-element';

@Injectable()
export class DialogsService {

    constructor(protected dialog: MatDialog) { }

    public form(alternant: AlternantElement, onglet: string): Observable<boolean> {
        let dialogRef;

        if(onglet=='livret')
        {
            dialogRef = <MatDialogRef<LivretDialog>>this.dialog.open(LivretDialog);
        }
        else
        {
            if(onglet=='alternant')
            {
                dialogRef = <MatDialogRef<AlternantDialog>>this.dialog.open(AlternantDialog);
            }
            else
            {
                dialogRef = <MatDialogRef<EntrepriseDialog>>this.dialog.open(EntrepriseDialog);
            }
        }

        dialogRef.componentInstance.alternant = alternant;

        return dialogRef.afterClosed();
    }
}  