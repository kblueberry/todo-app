import { MouseEventHandler } from "react";
import "../../assets/styles/buttons.css";
import { ActionNames } from "../../enums/Actions";
import Button from "react-bootstrap/Button";

export default function IconActionButton({
  variant,
  onClick,
}: {
  variant: ActionNames;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      variant={variant === ActionNames.ConfirmAdd ? "success" : "light"}
      className={variant === ActionNames.ConfirmAdd ? "" : "icon-light"}
      size="sm"
      onClick={onClick}
    >
      <img
        src={
          variant === ActionNames.ConfirmAdd
            ? "./images/check-svgrepo-com.svg"
            : "./images/cancel-svgrepo-com.svg"
        }
        alt="check-svg"
      ></img>
    </Button>
  );
}
