import {Component, Input} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {HousingDataService} from "../housing-data.service";

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrl: './housing-details.component.css'
})
export class HousingDetailsComponent {

  @Input() housingLocation: HousingLocation | undefined;

  protected readonly HousingDataService = HousingDataService;
}
