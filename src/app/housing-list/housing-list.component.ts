import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {HousingDataService} from "../housing-data.service";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.css'
})
export class HousingListComponent {

  @Input() locationList: HousingLocation[] = [];

  @Output() locationSelectedEvent: EventEmitter<HousingLocation> = new EventEmitter<HousingLocation>();

  constructor() { }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }

  protected readonly HousingDataService = HousingDataService;
}
