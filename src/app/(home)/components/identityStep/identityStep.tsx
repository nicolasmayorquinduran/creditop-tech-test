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

export const IdentityStep: React.FC<
  StepContentProps<StateCrediApplicationSteps | undefined>
> = ({ nextStep, sharedStepsState: { state, setState } }) => {
  const [dateParts, setDateParts] = useState<Partial<DateParts>>();

  const formattedId = new Intl.NumberFormat("es-CO").format(userSelected.id);

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const { value, name } = e.currentTarget;
    if (!dateParts! || !(name in dateParts)) return;
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
    <div>
      <h1>Completa la fecha de expedición del documento*</h1>
      <p>
        Recuerda seleccionar una fecha que se ajuste a tus ingresos para que
        puedas pagar tus cuotas cómodamente
      </p>
      <form onChange={onChange}>
        <SelectField
          optionsKeySufix={FormFieldKeysEnum.DAY}
          value={dateParts?.[FormFieldKeysEnum.DAY]}
          options={SelectDays}
        />
        <SelectField
          optionsKeySufix={FormFieldKeysEnum.MONTH}
          value={dateParts?.[FormFieldKeysEnum.MONTH]}
          options={SelectMonths}
        />
        <SelectField
          optionsKeySufix={FormFieldKeysEnum.YEAR}
          value={dateParts?.[FormFieldKeysEnum.YEAR]}
          options={SelectYears}
        />
      </form>
      <article>
        <Card>
          <Checkbox />
          <small>
            ¿Confirmas que eres <strong>{userSelected.name}</strong> el titular
            de la cèdula <strong>{formattedId}</strong>?
          </small>
        </Card>
      </article>
      <section>
        <Button disabled>No corresponde</Button>
        <Button onClick={handleClick}>Confirmar</Button>
      </section>
    </div>
  );
};
