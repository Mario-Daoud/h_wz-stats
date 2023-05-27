import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/service/player.service';
import { Player } from 'src/app/shared/player/player.model';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  ngOnInit() {
    const sr = ScrollReveal({
      distance: '65px',
      duration: 2600,
      delay: 150,
      reset: true,
    });

    sr.reveal('.stats-head', { delay: 200, origin: 'top' });
    sr.reveal('.searchbar-input', { delay: 200, origin: 'bottom' });

    this.selectImage = '/assets/images/platform-icons/platform-icon.png';
  }
  playerName: string;
  playerStats: Player;
  playerPlatform: string;
  selectImage: string;

  constructor(private playerService: PlayerService) {}

  getPlayerStats(): void {
    const name = this.playerName.split('#')[0];
    const tag = this.playerName.split('#')[1];
    const platform = this.playerPlatform;
    this.playerService
      .getPlayerStats(name, tag, platform)
      .subscribe((playerStats) => (this.playerStats = playerStats));
  }

  togglePlatform() {
    var dropdownContent = document.getElementsByClassName(
      'dropdown-content'
    )[0] as HTMLElement;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  }

  setPlatform(platform: string) {
    this.playerPlatform = platform;
    var dropdownContent = document.getElementsByClassName(
      'dropdown-content'
    )[0] as HTMLElement;

    dropdownContent.style.display = 'none';

    this.selectImage =
      '/assets/images/platform-icons/' + platform + '-icon.png';
    this.togglePlatform();
  }
}
