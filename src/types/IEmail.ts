import { ChangeEvent } from "react";

export interface IEmail {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
