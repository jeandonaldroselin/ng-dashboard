export class UninstallationStatistic {
  
  labels: Array<string>;
  
  datasets: Array<{ data : Array<number>, backgroundColor: Array<string>, hoverBackgroundColor: Array<string>}>;
  
  constructor(labels: Array<string>, datasets: Array<{ data : Array<number>, backgroundColor: Array<string>, hoverBackgroundColor: Array<string>}>){
    this.labels = labels;
    this.datasets = datasets;
  }
  
}
