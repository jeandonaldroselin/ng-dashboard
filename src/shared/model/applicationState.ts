import {ApplicationStateData} from "./applicationStateData";

export class ApplicationState {
  
  android: ApplicationStateData;
  
  ios: ApplicationStateData;
  
  clientBoard: ApplicationStateData;
  
  trainerBoard: ApplicationStateData;
  
  constructor(android: ApplicationStateData,
              ios: ApplicationStateData,
              clientBoard: ApplicationStateData,
              trainerBoard: ApplicationStateData
              ){
    this.android = android;
    this.ios = ios;
    this.clientBoard = clientBoard;
    this.trainerBoard = trainerBoard;
  }
  
}
