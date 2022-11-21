export interface IStage {
  entities?: any;
  _id: string;
  name: string;
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
