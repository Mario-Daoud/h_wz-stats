import { Injectable } from '@angular/core';
import { Player } from '../player/player.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CommonService {
  private playerStatsSubject: BehaviorSubject<Player | null> =
    new BehaviorSubject<Player | null>(null);
  playerStats$: Observable<Player | null> =
    this.playerStatsSubject.asObservable();

  setPlayerStats(playerStats: Player) {
    this.playerStatsSubject.next(playerStats);
  }

  getPlayerStats(): Observable<Player | null> {
    return this.playerStats$;
  }
}
