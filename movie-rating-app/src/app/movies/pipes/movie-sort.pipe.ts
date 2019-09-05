import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from '../models/Movie';
import {SortTypes} from '../enum/SortTypes';
import {MovieTypes} from '../enum/MovieTypes';

@Pipe({
  name: 'movieSort'
})
export class MovieSortPipe implements PipeTransform {

  transform(value: Movie[], args?: { type: MovieTypes, sorting: SortTypes }): any {
    if (!args.type && !args.sorting) {
      return value;
    }
    let sortedValue = value.slice();
    if (args.sorting) {
      if (args.sorting === SortTypes.ASC) {
        sortedValue = value.sort((a, b) => a.rate - b.rate);
      } else {
        sortedValue = value.sort((a, b) => b.rate - a.rate);
      }
    }

    if (args.type) {
      switch (args.type) {
        case MovieTypes.ALL:
          break;
        case MovieTypes.TV_SERIES:
          sortedValue = sortedValue.filter(el => el.type === MovieTypes.TV_SERIES);
          break;
        case MovieTypes.FILM:
          sortedValue = sortedValue.filter(el => el.type === MovieTypes.FILM);
          break;
      }
    }
    return sortedValue;
  }
}
