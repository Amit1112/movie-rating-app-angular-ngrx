import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieTypes} from '../../movies/enum/MovieTypes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  MovieTypes = MovieTypes;

  constructor() {
  }

  ngOnInit() {
  }
}
