import { Component, OnInit, Input, Output } from '@angular/core';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IDiff } from 'src/app/services/snapshot-diff.service';

@Component({
  selector: 'app-diff-viewer',
  templateUrl: './diff-viewer.component.html',
  styleUrls: ['./diff-viewer.component.scss']
})
export class DiffViewerComponent implements OnInit {

  @Input() projectId: string;
  @Input() snapshots: string[];
  @Input() diff: IDiff;
  isSnapshot = false;
  faChevronDown = faChevronDown;
  isClicked = false;
  featureTitleFontSize = 14; //element adds the px on the Ng-style of the tag.
  constructor() { }

  ngOnInit() {
  }

  handleChevronClick() {
    this.isClicked ? this.isClicked = false : this.isClicked = true;
  }

  handleClick() {
  }

}
