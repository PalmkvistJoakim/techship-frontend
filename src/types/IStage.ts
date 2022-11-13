export interface IStage {
  _id: string;
  name: string;
  entities?: any;
}

export interface IStagee {
  status: IStage[];
}

export interface IprofileAdd {
  kommentar: string;
}

export interface Ikommentar {
  text: string;
}
