import { Component } from '@angular/core';
import { ProjectMarkModel } from '../_models/ProjectMarkModel';
import { globalService } from '../_services/global';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css'],
})
export class PipelineComponent {
  projectMarkList: ProjectMarkModel[] = [];
  constructor(private globalService: globalService) {
    this.projectMarkList.push(
      new ProjectMarkModel(1, 'LEAD'),
      new ProjectMarkModel(2, 'REP IN PROGRESS'),
      new ProjectMarkModel(3, 'SUBMITTED'),
      new ProjectMarkModel(4, 'WON'),
      new ProjectMarkModel(5, 'LOST'),
      new ProjectMarkModel(6, 'CLOSED')
    );
  }

  showIt(id: number): boolean {
    if (this.globalService.salesPipeline === 'Basic') return id <= 3;
    else if (this.globalService.salesPipeline === 'Advanced') return id <= 4;
    else if (this.globalService.salesPipeline === 'Expert') return id <= 5;
    else if (this.globalService.salesPipeline === 'Custom') return true;
    else return false;
  }
}
