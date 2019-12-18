import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/services/project.service';

@Component({
  selector: 'app-summary-title',
  templateUrl: './summary-title.component.html',
  styleUrls: ['./summary-title.component.scss']
})
export class SummaryTitleComponent implements OnInit {
  isProject: boolean; 
  @Input() primaryTitle: string; 
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    if (this.primaryTitle) { 
      this.isProject = false; 
    } else {
      this.isProject = true;
    }
  }

}
