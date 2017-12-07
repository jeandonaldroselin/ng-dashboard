export class UserAcquisitionStatistic {
  
  labels: Array<string>;
  
  datasets: Array<{ label : string, backgroundColor: string, borderColor: string, data: Array<number>}>;
  
  constructor(labels: Array<string>, datasets: Array<{ label : string, backgroundColor: string, borderColor: string, data: Array<number>}>){
    this.labels = labels;
    this.datasets = datasets;
  }
  
}
