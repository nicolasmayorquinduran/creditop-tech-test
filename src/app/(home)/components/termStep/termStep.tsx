"use client";

import { paymentTerms } from "@app/(home)/constants";
import { getDateParts } from "@app/(home)/utils";
import { Button } from "@lib/button/button";
import { useState } from "react";
import type { StateCrediApplicationSteps } from "@app/(home)/interfaces";
import type { StepContentProps } from "@lib/stepper/components/stepContent/interfaces";

export const TermStep: React.FC<
  StepContentProps<StateCrediApplicationSteps | undefined>
> = ({ nextStep }) => {
  const [termSelected, setTermSelected] = useState<number>();
  const daySelected = termSelected
    ? paymentTerms[termSelected].getDate()
    : undefined;
  return (
    <div>
      <article>
        <h1>Elige tu fecha de pago</h1>
        <p>
          Recuerda seleccionar una fecha que se ajuste a tus ingresos para que
          puedas pagar tus cuotas cómodamente
        </p>
      </article>
      <article>
        <h2>Elige tu primera fecha de pago</h2>
        {paymentTerms.map((term, index) => {
          const { day, month, year } = getDateParts(term);
          return (
            <section
              key={`paymentTerms${index + 1}`}
              onClick={() => setTermSelected(index)}
            >
              <span>{`${day}-${month}`}</span>
              <strong>{year}</strong>
            </section>
          );
        })}
        {daySelected !== undefined && (
          <p>
            Tu fecha límite de pago será el{" "}
            <strong>día {daySelected} de cada</strong> mes
          </p>
        )}
      </article>
      <Button onClick={nextStep} disabled={termSelected === undefined}>
        Confirmar
      </Button>
    </div>
  );
};
