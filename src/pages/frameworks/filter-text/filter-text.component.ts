import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: './filter-text.component.html'
})
export class FilterTextComponent implements OnInit {
  @Output() changed: EventEmitter<string>;
  public filter: string;
  constructor() {
    this.changed = new EventEmitter<string>();
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }

  ngOnInit() {
  }
}
