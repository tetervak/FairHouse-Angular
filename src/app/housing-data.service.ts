import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HousingDataService {

  private static dataUrl: string = "assets/data/housing-data.json";
  public static imageFolder: string = "assets/images/";

  constructor(private http: HttpClient) { }

  searchLocations(searchText: string): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(HousingDataService.dataUrl).pipe(
      map(locations => locations.filter(
        (location: HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase())))
    )
  }

}
