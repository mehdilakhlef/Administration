import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { AlternantElement } from '../../model/alternant-element';

@Component({
    selector: 'livret-dialog',
    templateUrl: './livret-dialog.html',
})
export class LivretDialog {
 
    public alternant: AlternantElement;

    constructor(public dialogRef: MatDialogRef<LivretDialog>) {
    }
    
    ngOnInit(): void {
    };
}