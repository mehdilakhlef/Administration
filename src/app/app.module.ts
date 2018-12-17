import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule }   from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DemandeComponent } from './demande/demande.component';
import { LivretComponent } from './livret/livret.component';
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';
import { DetailPromotionComponent } from './detail-promotion/detail-promotion.component';
import { DetailLivretComponent } from './detail-livret/detail-livret.component';

import { DialogsService } from './dialog-service/dialogs.service';

import { LivretDialog } from './dialog-service/livret-dialog/livret-dialog.component';
import { AlternantDialog } from './dialog-service/alternant-dialog/alternant-dialog.component';
import { EntrepriseDialog } from './dialog-service/entreprise-dialog/entreprise-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DemandeComponent,
    LivretComponent,
    DetailDemandeComponent,
    DetailPromotionComponent,
    DetailLivretComponent,

    LivretDialog,
    AlternantDialog,
    EntrepriseDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {
          path: 'demandes',
          component: DemandeComponent
      }, 
      {
          path: 'livrets',
          component: LivretComponent
      },
      {
        path: 'livrets/:promotion',
        component: DetailPromotionComponent
      },
      {
        path: 'livrets/:promotion/:INE',
        component: DetailLivretComponent
      },
      {
        path: 'demandes/:INE',
        component: DetailDemandeComponent
      }
    ])
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,

    LivretDialog
  ],
  providers: [DialogsService],
  entryComponents: [
    LivretDialog,
    AlternantDialog,
    EntrepriseDialog
],
  bootstrap: [AppComponent]
})
export class AppModule { }
