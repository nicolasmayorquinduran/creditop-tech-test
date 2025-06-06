"use client";

import { isValidElement, Children } from "react";
import { StepContent } from "../components/stepContent/stepContent";
import type { ReactNode } from "react";
import type { StepperChildren, UseStepNodesOutput } from "../interfaces";

export const UseStepNodes = (): UseStepNodesOutput => {
  const getStepNodes = (
    children: ReactNode | ReactNode[]
  ): StepperChildren[] => {
    return Children.toArray(children).filter(
      (child): child is StepperChildren => {
        if (isValidElement(child) && child.type === StepContent) {
          return true;
        }
        return false;
      }
    );
  };

  return { getStepNodes };
};
