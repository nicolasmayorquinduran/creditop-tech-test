import { getDateParts } from "@app/(home)/utils";
import { Button } from "@lib/button/button";
import { Card } from "@lib/card/card";
import { userSelected } from "../identityStep/constants";
import { useDialog } from "@lib/hooks/useDialog";
import type { StateCrediApplicationSteps } from "@app/(home)/interfaces";
import { StepContentProps } from "@lib/stepper/interfaces";
import clsx from "clsx";

export const SummaryStep: React.FC<
  StepContentProps<StateCrediApplicationSteps | undefined>
> = ({ sharedStepsState: { state }, className }) => {
  const { dialog, setIsOpen } = useDialog({
    title: "Felicidades",
    body: "Haz Hecho tu solicitud con éxito, pronto nos pondremos en contacto",
    ctaText: "Cerrar",
    ctaAction: (close) => close(),
  });
  const onSubmit: VoidFunction = () => {
    setIsOpen(true);
  };

  if (!state?.idExpirationDate || !state.paymentTerm)
    return (
      <div className={clsx(["text-center text-2xl font-bold mb-2", className])}>
        <h1>No se han diligenciado los pasos anteriores en su totalidad</h1>
      </div>
    );

  const idExpirationDate = getDateParts(state.idExpirationDate);
  const paymentTerm = getDateParts(state.paymentTerm);

  return (
    <>
      {dialog}
      <div
        className={clsx([
          "flex flex-col items-center justify-center text-center",
          className,
        ])}
      >
        <h1 className="text-2xl font-bold mb-2">
          Estimado {userSelected.name}, por favor revise la información
          suministrada
        </h1>
        <p className="text-gray-600 mb-6">
          Verifica antes de enviar la información, una vez enviada, no podra
          volver a ser modificada
        </p>
        <Card className="w-full max-w-md mb-6">
          <article className="flex flex-col items-start">
            <small className="text-gray-500 text-sm">
              Fecha de expedición del documento:
            </small>
            <article className="flex items-baseline space-x-2 text-lg font-semibold text-gray-800">
              <span>{`${idExpirationDate.day}-${idExpirationDate.month}`}</span>
              <strong>{idExpirationDate.year}</strong>
            </article>
          </article>
          <article className="flex flex-col items-start">
            <small className="text-gray-500 text-sm">
              Plazo de pago seleccionado:
            </small>
            <article className="flex items-baseline space-x-2 text-lg font-semibold text-gray-800">
              <span>{`${paymentTerm.day}-${paymentTerm.month}`}</span>
              <strong>{idExpirationDate.year}</strong>
            </article>
          </article>
        </Card>
        <Button
          className="px-6 py-2 bg-primary text-white rounded-md disabled:opacity-50"
          onClick={onSubmit}
        >
          Enviar
        </Button>
      </div>
    </>
  );
};
