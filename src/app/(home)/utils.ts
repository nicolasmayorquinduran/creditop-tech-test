import { months } from "./constants";
import type { DateParts } from "./types";

export const getDateParts = (date: Date): DateParts => {
  return {
    day: String(date.getDate()),
    month: date.toLocaleString("es-CO", { month: "short" }),
    year: String(date.getFullYear()),
  };
};

export const fromDateParts = ({
  day,
  month,
  year,
}: Partial<DateParts>): Date | undefined => {
  if ([day, month, year].includes(undefined)) return undefined;
  const monthIndex = months.findIndex(
    (m) => m.toLowerCase() === month?.toLowerCase()
  );

  if (monthIndex === -1) {
    throw new Error(`Mes inválido: "${month}"`);
  }

  return new Date(Number(year), monthIndex, Number(day));
};
