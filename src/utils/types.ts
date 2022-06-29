import { ChangeEvent, FormEvent } from "react";

export type HandleInputChange = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => void;

export type HandleFormSubmit = (e: FormEvent<HTMLFormElement>) => void;
