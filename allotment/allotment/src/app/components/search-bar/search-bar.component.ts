import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() handleSearch = new EventEmitter();
  @Input() placeholderText:string = "search for projects";
  constructor() { }

  ngOnInit() {
  }
}
