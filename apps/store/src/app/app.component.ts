import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { getAllGames } from '../fake-api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    console.log('component constructed');
  }

  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = this.http.get<any[]>('/api/games');
}
