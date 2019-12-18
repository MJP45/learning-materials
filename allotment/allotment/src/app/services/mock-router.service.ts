import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { convertToParamMap, ParamMap } from "@angular/router";

@Injectable()
export class ActivatedRouteStub {
  private paramKeys: string[] = ["projectId", "featureId"];
  private params = { projectId: "1", featureId: "DEF" };

  private _testParamMap: ParamMap = {
    has: (name: string) => true,
    get: (name: string) => this.params[name],
    getAll: (name: string) => this.paramKeys,
    keys: this.paramKeys
  };

  //Observable that contains a map of the parameters
  private subjectParamMap = new BehaviorSubject(
    convertToParamMap(this._testParamMap)
  );

  // private _paramMap = this.subjectParamMap.asObservable();

  get paramMap() {
    return this.subjectParamMap;
  }

  set paramMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subjectParamMap.next(this._testParamMap);
  }
}
