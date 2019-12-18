import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { SnapshotService } from 'src/app/services/snapshot.service';
import { faChevronDown, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { isString } from 'util';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-snapshot-selector',
  templateUrl: './snapshot-selector.component.html',
  styleUrls: ['./snapshot-selector.component.scss']
})
export class SnapshotSelectorComponent implements OnInit {

  @Input() projectId: string;
  @Input() snapshots: string[];
  @Output() handleCreateSnapshot = new EventEmitter();
  @Output() handleSnapshotSelected = new EventEmitter();
  isSnapshot = false;
  faChevronDown = faChevronDown;
  isClicked = false;
  selectedItem;
  snapshotCreated: boolean;

  constructor(private snapshotService: SnapshotService) { }

  ngOnInit() {
    this.showActiveVersion();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.snapshots) {
      this.snapshots = changes.snapshots.currentValue;
      this.showActiveVersion();
    }
  }

  showActiveVersion() {
    if (this.snapshots.length == 0) {
      this.snapshotCreated = false;
    } else {
      this.snapshotCreated = true;
    }
  }
  
  createSnapshot() {
    this.snapshotCreated = true;
    this.handleCreateSnapshot.emit();
  }

  handleChevronClick() {
    this.isClicked ? this.isClicked = false : this.isClicked = true;
  }

  handleLiClick(selectedItem: string) {
    this.selectedItem = selectedItem;
    this.isClicked = !this.isClicked;
    this.handleSnapshotSelected.emit(selectedItem);
  }
  // called from HTML
  getSelectedItem(): string {
    if (isString(this.selectedItem)) {
      this.snapshotCreated = true;
      return this.selectedItem;
    } else {
      const testIsDate = new Date(this.selectedItem);
      if (testIsDate !== undefined) {
        return formatDate(testIsDate, 'medium', 'EN');
      }
    }

  }

}
