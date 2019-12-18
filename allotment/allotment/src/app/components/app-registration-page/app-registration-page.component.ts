import { Component, OnInit } from '@angular/core';
import { mockProjectOne, mockBitBucketOne } from 'src/assets/data/project-data';
import { IRegisteredProject } from 'src/app/services/project.service';

interface IFormSubmission {
  projectName: string;
  bitBucketName: string;
}

@Component({
  selector: 'app-registration-page',
  templateUrl: './app-registration-page.component.html',
  styleUrls: ['./app-registration-page.component.scss']
})
export class AppRegistrationPageComponent implements OnInit {
  isUniqueName: boolean = true;
  isUniqueBitBucketName: boolean = true;
  uniqueToken: string;
  isSubmitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(formSubmission: IFormSubmission) {
    const registerdproject: IRegisteredProject = {
      appName: formSubmission.projectName,
      bitBucketName: formSubmission.bitBucketName,
      date: this.getDateAndTime(),
      token: this.uniqueToken = this.getUniqueToken()
    }
    this.isSubmitted = true;
  }

  getExistingProjectNames(): string[] {
    return [mockProjectOne.name.toLowerCase()];
  }

  checkUniqueProjectName(inputProjectName) {
    if (this.getExistingProjectNames().includes(inputProjectName.toLowerCase())) {
      this.isUniqueName = false;
    } else {
      this.isUniqueName = true;
    }
  }

  getExistingBitBucketNames(): string[] {
    return [mockBitBucketOne.appName.toLowerCase()];
  }

  checkUniqueBitBucketName(inputBitBucketName) {
    if (this.getExistingBitBucketNames().includes(inputBitBucketName.toLowerCase())) {
      this.isUniqueBitBucketName = false;
    } else {
      this.isUniqueBitBucketName = true;
    }
  }

  getDateAndTime() {
    return new Date().toLocaleString();
  }

  getUniqueToken() {
    return [...Array(15)].map(i => (~~(Math.random() * 36)).toString(36)).join('');
  }

}
