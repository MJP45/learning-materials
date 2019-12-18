import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { IFeature, IScenario } from 'src/app/services/project.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project-features',
  templateUrl: './project-features.component.html',
  styleUrls: ['./project-features.component.scss']
})
export class ProjectFeaturesComponent implements OnInit {

  // @Output() featureCountChange = new EventEmitter();
  @Input() features: IFeature[];
  @Input() isList: boolean = true;
  @Input() featureTitleFontSize = 20;
  @Input() isViewingSnapshot: boolean = false;


  featureCount: string = "0";
  viewType: string = "listView";
  newUrl: string;
  featureId: string;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const urlId = param.get("projectId");
      this.newUrl = `/projects/${urlId}/features`;
    });
  }

}
