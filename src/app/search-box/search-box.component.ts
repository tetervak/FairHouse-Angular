import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchText: string): void {
    this.searchEvent.emit(searchText)
  }
}
