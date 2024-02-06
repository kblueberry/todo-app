import "../../assets/styles/buttons.css";
import { ActionNames } from "../../enums/Actions";
import Button from "react-bootstrap/Button";

export default function IconActionButton({
  variant,
}: {
  variant: ActionNames;
}) {
  return (
    <Button
      variant={variant === ActionNames.ConfirmAdd ? "success" : "light"}
      className={variant === ActionNames.ConfirmAdd ? "" : "icon-light"}
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
