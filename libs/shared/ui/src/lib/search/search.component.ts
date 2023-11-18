import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pokedex-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchText = new FormControl('');
  public showCloseButton = false;
  @Output() typingText = new EventEmitter<string | null>();

  public emitSearchText() {
    this.showCloseButton = true;
    this.typingText.emit(this.searchText.value);
  }

  public cleanInput() {
    this.searchText.reset();
    this.emitSearchText();
    this.showCloseButton = false;
  }
}
