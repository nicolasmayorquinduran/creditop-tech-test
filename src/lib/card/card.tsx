import { CardProps } from "./interfaces";

export const Card: React.FC<CardProps> = ({ isSelected, ...sectionProps }) => {
  const defaultClassname: string = "";
  const isActiveClassname: string = "";
  return (
    <section
      {...sectionProps}
      className={`${defaultClassname} ${isSelected ? isActiveClassname : ""} ${
        sectionProps.className
      }`}
    />
  );
};
