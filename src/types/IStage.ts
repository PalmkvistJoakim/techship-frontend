export interface IStage {
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

export enum StageType {
  applied = "APPLIED",
  techship_school = "TECHSHIP_SCHOOL",
  techship_program = "TECHSHIP_PROGRAMME",
}
