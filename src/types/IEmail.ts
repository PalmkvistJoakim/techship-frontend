import { ChangeEvent } from "react";

export interface IEmail {
  checkEmail: string[] | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
