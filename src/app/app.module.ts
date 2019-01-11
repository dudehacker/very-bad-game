import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent, DialogComponent } from './board/board.component';
import {GameManagerService} from './services/game-manager.service'
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DialogComponent,
    LeaderboardComponent
  ],
  entryComponents:[
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [GameManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
