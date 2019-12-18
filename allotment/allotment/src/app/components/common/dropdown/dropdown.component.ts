import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { formatDate } from '@angular/common';
import { isString } from 'util';

interface IListItem { item: string, displayItem: string, selected: boolean };

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  @Input() list: string[];
  @Input() selectedItem: string;
  @Output() handleListItemClick = new EventEmitter();

  listItems: IListItem[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChange) {
    this.populateListItems();
  }

  populateListItems() {
    this.list.forEach(listString => {
      let newItem: IListItem;

      if(isString(listString)) {
        newItem = { item: listString, displayItem: listString, selected: false };
      } else {
        const testIsDate = new Date(listString);
        if (testIsDate !== undefined) {
          newItem = { item: listString, displayItem: formatDate(listString, 'medium', 'EN'), selected: false };
        }
      }

      if (listString === this.selectedItem) {
        newItem.selected = true;
      }
      this.listItems.push(newItem);
    });
  }

  handleClick(selectedItem: string) {
    this.handleListItemClick.emit(selectedItem);
  }
}
