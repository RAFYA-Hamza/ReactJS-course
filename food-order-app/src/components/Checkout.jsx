import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <h2>Your Checkout</h2>
    </Modal>
  );
}
