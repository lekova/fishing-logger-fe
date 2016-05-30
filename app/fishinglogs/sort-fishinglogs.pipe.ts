import { Pipe, PipeTransform } from '@angular/core';
import { Fishinglog } from './fishinglog.service';

@Pipe({ name: 'sortFishinglogs' })
export class SortFishinglogsPipe implements PipeTransform {
  transform(value: Fishinglog[], args: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Fishinglog, b: Fishinglog) => {
      if (a.place_name < b.place_name) { return -1; }
      if (a.place_name > b.place_name) { return 1; }
      return 0;
    });
  }
}