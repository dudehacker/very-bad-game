import { Component, OnInit } from '@angular/core';
import {GameManagerService} from '../services/game-manager.service'
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private gm: GameManagerService) { }

  ngOnInit() {
  }

}
