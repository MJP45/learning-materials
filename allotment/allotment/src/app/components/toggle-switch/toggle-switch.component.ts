import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Output() handleClick = new EventEmitter();
  faList = faList;
  faTh = faTh;

  constructor() { }

  ngOnInit() {
  }

 }
