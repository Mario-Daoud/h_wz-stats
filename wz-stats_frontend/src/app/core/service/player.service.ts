import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Player } from 'src/app/shared/player/player.model';
import { CommonService } from 'src/app/shared/common/common.service';

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient, private commonService: CommonService) {}
  API_URL = environment.API_URL;

  getAllPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(`${this.API_URL}/players`)
      .pipe(tap((result) => console.log('fetched all players: ', result)));
  }

  getPlayerStats(
    playerName: string,
    playerTag: string,
    platform: string
  ): Observable<Player> {
    return this.http
      .get<Player>(
        `${this.API_URL}/players/${playerName}/${playerTag}/${platform}`
      )
      .pipe(tap((result) => console.log('fetched player stats: ', result)))
      .pipe(tap((result) => this.commonService.setPlayerStats(result)));
  }
}
