import { getDateParts } from "@app/(home)/utils";
import { Button } from "@lib/button/button";
import { Card } from "@lib/card/card";
import { userSelected } from "../identityStep/constants";
import { useDialog } from "@lib/hooks/useDialog";
import type { StateCrediApplicationSteps } from "@app/(home)/interfaces";
import { StepContentProps } from "@lib/stepper/interfaces";

export const SummaryStep: React.FC<
  StepContentProps<StateCrediApplicationSteps | undefined>
> = ({ sharedStepsState: { state } }) => {
  const formattedId = new Intl.NumberFormat("es-CO").format(userSelected.id);
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
      <div>
        <h1>No se han diligenciado los pasos anteriores en su totalidad</h1>
      </div>
    );

  const idExpirationDate = getDateParts(state.idExpirationDate);
  const paymentTerm = getDateParts(state.idExpirationDate);

  return (
    <>
      {dialog}
      <div>
        <h1>
          Estimado {userSelected.name}, porfavor revise la información
          suministrada
        </h1>
        <p>
          Verifica antes de enviar la información, una vez enviada, no podra
          volver a ser modificada
        </p>
        <Card>
          <article>
            <small>
              Fecha de expedición del documento <strong>{formattedId}</strong>
            </small>
            <article>
              <span>{`${idExpirationDate.day}-${idExpirationDate.month}`}</span>
              <strong>{idExpirationDate.year}</strong>
            </article>
          </article>
          <article>
            <small>Plazo de pago seleccionado</small>
            <article>
              <span>{`${paymentTerm.day}-${paymentTerm.month}`}</span>
              <strong>{paymentTerm.year}</strong>
            </article>
          </article>
        </Card>
        <Button onClick={onSubmit}>Enviar</Button>
      </div>
    </>
  );
};
