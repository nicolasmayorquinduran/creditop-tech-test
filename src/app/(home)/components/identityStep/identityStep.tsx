// src/app/(home)/components/identityStep/identityStep.tsx
import { FormFieldKeysEnum } from "@app/(home)/enums";
import { fromDateParts } from "@app/(home)/utils";
import { Button } from "@lib/button/button";
import { Card } from "@lib/card/card";
import { Checkbox } from "@lib/checkbox/checkbox";
import { SelectField } from "@lib/select/select";
import { FormEvent, useState } from "react";
import {
  SelectDays,
  SelectMonths,
  SelectYears,
  userSelected,
} from "./constants";
import type { StateCrediApplicationSteps } from "@app/(home)/interfaces";
import type { DateParts } from "@app/(home)/types";
import { StepContentProps } from "@lib/stepper/interfaces";
import clsx from "clsx";
import { useDialog } from "@lib/hooks/useDialog";

export const IdentityStep: React.FC<
  StepContentProps<StateCrediApplicationSteps | undefined>
> = ({ nextStep, sharedStepsState: { state, setState }, className }) => {
  const [dateParts, setDateParts] = useState<Partial<DateParts>>();
  const { dialog, setIsOpen } = useDialog({
    title: "Haz cancelado el proceso de solicitud",
    body: "Pero puedes intentarlo en otra oportunidad, gracias!",
    ctaText: "Cerrar",
    ctaAction: (close) => close(),
  });
  const formattedId = new Intl.NumberFormat("es-CO").format(userSelected.id);

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setDateParts((lastState) => ({ ...lastState, [name]: value }));
  };

  const handleClick: VoidFunction = () => {
    if (!dateParts) return;
    const idExpirationDate = fromDateParts(dateParts);
    if (!idExpirationDate) return;
    setState({ ...state, idExpirationDate });
    nextStep();
  };

  return (
    <div
      className={clsx([className, "flex flex-col items-center justify-center"])}
    >
      {dialog}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Completa la fecha de expedición del documento*
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Recuerda seleccionar una fecha que se ajuste a tus ingresos para que
        puedas pagar tus cuotas cómodamente
      </p>
      <form onChange={onChange} className="grid grid-cols-3 gap-4 mb-6">
        <SelectField
          optionsKeySufix={FormFieldKeysEnum.DAY}
          label="Día"
          value={dateParts?.[FormFieldKeysEnum.DAY]}
          options={SelectDays}
          required
        />
        <SelectField
          optionsKeySufix={FormFieldKeysEnum.MONTH}
          label="Mes"
          value={dateParts?.[FormFieldKeysEnum.MONTH]}
          options={SelectMonths}
          required
        />
        <SelectField
          optionsKeySufix={FormFieldKeysEnum.YEAR}
          label="Año"
          value={dateParts?.[FormFieldKeysEnum.YEAR]}
          options={SelectYears}
          required
        />
      </form>
      <article className="w-full justify-center items-center flex mb-6">
        <span className="bg-yellow-500 text-white mr-3 py-1 px-3 rounded">
          !
        </span>
        <Card className="flex items-center p-4 border border-yellow-500 bg-yellow-100 rounded-md">
          <Checkbox checked />
          <small className="text-gray-700 ml-2">
            ¿Confirmas que eres
            <strong className="font-semibold"> {userSelected.name} </strong> el
            titular de la cèdula
            <strong className="font-semibold"> {formattedId} </strong>?
          </small>
        </Card>
      </article>
      <section className="flex space-x-4">
        <Button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 border border-red-500 text-red-500 rounded-md"
        >
          No corresponde
        </Button>
        <Button
          className="px-6 py-2 bg-primary text-white rounded-md disabled:opacity-50"
          onClick={handleClick}
          disabled={
            !dateParts ||
            !Object.values(FormFieldKeysEnum).every((key) => key in dateParts)
          }
        >
          Confirmar
        </Button>
      </section>
    </div>
  );
};
