import { Component } from '@angular/core';
import {HousingLocation} from "./housing-location";
import {HousingDataService} from "./housing-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'FairHouse';

  searchResult: HousingLocation[] = [];
  private searchResultSub: Subscription | undefined;

  selectedLocation: HousingLocation | undefined;

  constructor(private housingDataService: HousingDataService) {
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }

  searchLocations(searchText: string) {
    this.searchResultSub = this.housingDataService.searchLocations(searchText).subscribe(
      result =>{
        this.searchResult = result;
        this.searchResultSub?.unsubscribe();
      }
    )
  }

  protected readonly HousingDataService = HousingDataService;
}
