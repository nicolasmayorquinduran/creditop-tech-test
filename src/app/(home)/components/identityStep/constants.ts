import { months } from "@app/(home)/constants";
import type { User } from "@app/(home)/interfaces";
import type { SelectFieldOption } from "@lib/select/interfaces";

export const SelectDays: SelectFieldOption[] = new Array(31)
  .fill(null)
  .map<SelectFieldOption>((_, index) => ({
    label: String(index + 1),
    value: String(index + 1),
  }));

export const SelectMonths: SelectFieldOption[] = months.map<SelectFieldOption>(
  (mont) => ({ label: mont, value: mont })
);

const bounderYear: number = 1950;
const enabledYears = new Date().getFullYear() - bounderYear + 1;

export const SelectYears: SelectFieldOption[] = new Array(enabledYears)
  .fill(null)
  .map<SelectFieldOption>((_, index) => ({
    label: String(bounderYear + index),
    value: String(bounderYear + index),
  }));

export const userSelected: User = {
  id: 1067810194,
  name: "Santiago Villaquiran",
};
