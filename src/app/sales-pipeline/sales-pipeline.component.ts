import { Component } from '@angular/core';
import { globalService } from '../_services/global';

@Component({
  selector: 'app-sales-pipeline',
  templateUrl: './sales-pipeline.component.html',
  styleUrls: ['./sales-pipeline.component.css'],
})
export class SalesPipelineComponent {
  public checklist: any[];
  salesPipeline!: string;
  constructor(private globalService: globalService) {
    this.checklist = [
      { id: 1, value: 'Basic', isSelected: true },
      { id: 2, value: 'Advanced', isSelected: false },
      { id: 3, value: 'Expert', isSelected: false },
      { id: 4, value: 'Custom', isSelected: false },
    ];

    this.salesPipeline = globalService.salesPipeline = 'Basic';
  }

  isAllSelected(item: any) {
    this.checklist.forEach((val) => {
      if (val.id == item.id) {
        this.salesPipeline = item.value;
        val.isSelected = true;
        console.log(item.value);
        this.salesPipeline = this.globalService.salesPipeline = item.value;
      } else {
        val.isSelected = false;
      }
    });
  }
}
