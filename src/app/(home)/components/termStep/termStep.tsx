"use client";

import { paymentTerms } from "@app/(home)/constants";
import { getDateParts } from "@app/(home)/utils";
import { Button } from "@lib/button/button";
import { useState } from "react";
import type { StateCrediApplicationSteps } from "@app/(home)/interfaces";
import { StepContentProps } from "@lib/stepper/interfaces";

export const TermStep: React.FC<
  StepContentProps<StateCrediApplicationSteps | undefined>
> = ({ nextStep }) => {
  const [termSelected, setTermSelected] = useState<number>();

  const daySelected = termSelected
    ? paymentTerms[termSelected].getDate()
    : undefined;

  return (
    <div className="flex flex-col gap-6">
      <article className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-800">
          Elige tu fecha de pago
        </h1>
        <p className="text-gray-600">
          Recuerda seleccionar una fecha que se ajuste a tus ingresos para que
          puedas pagar tus cuotas cómodamente
        </p>
      </article>
      <article className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Elige tu primera fecha de pago
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {paymentTerms.map((term, index) => {
            const { day, month, year } = getDateParts(term);
            const isSelected = termSelected === index;
            return (
              <section
                key={`paymentTerms${index + 1}`}
                onClick={() => setTermSelected(index)}
                className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer ${
                  isSelected
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                <span className="text-lg font-bold">{`${day}-${month}`}</span>
                <strong className="text-sm">{year}</strong>
              </section>
            );
          })}
        </div>
        {daySelected !== undefined && (
          <p className="text-gray-700">
            Tu fecha límite de pago será el{" "}
            <strong>día {daySelected} de cada</strong> mes
          </p>
        )}
      </article>
      <Button onClick={nextStep} disabled={termSelected === undefined} className="w-full bg-blue-500 text-white px-6 py-2 rounded-md disabled:opacity-50">
        Confirmar
      </Button>
    </div>
  );
};
