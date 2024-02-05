import "../../assets/styles/buttons.css";
import { ActionNames } from "../../enums/Actions";

export default function IconActionButton({
  variant,
}: {
  variant: ActionNames;
}) {
  return (
    <div
      className={`${
        variant === ActionNames.ConfirmAdd ? "icon-success" : ""
      } icon-button-container`}
    >
      <img
        src={
          variant === ActionNames.ConfirmAdd
            ? "./images/check-svgrepo-com.svg"
            : "./images/cancel-svgrepo-com.svg"
        }
        alt="check-svg"
        className="icon-button"
      ></img>
    </div>
  );
}
