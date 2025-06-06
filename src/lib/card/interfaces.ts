import type { HtmlHTMLAttributes } from "react";

export interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
}
