import { Component } from '@angular/core';
import { ProjectMarkModel } from '../../_models/ProjectMarkModel';
import { singleton } from '../../_global/singleton';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css'],
})
export class PipelineComponent {
  projectMarkList: ProjectMarkModel[] = [];
  constructor(private singleton: singleton) {
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
    if (this.singleton.salesPipeline === 'Basic') return id <= 3;
    else if (this.singleton.salesPipeline === 'Advanced') return id <= 4;
    else if (this.singleton.salesPipeline === 'Expert') return id <= 5;
    else if (this.singleton.salesPipeline === 'Custom') return true;
    else return false;
  }
}
