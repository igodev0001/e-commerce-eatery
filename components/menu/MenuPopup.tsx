import Modal from "../modal/Modal";
import { useUiContext } from "../../context/ui-context";

export default function MenuPopup() {
  const { isMenuOpen } = useUiContext();

  return (
    <Modal st={isMenuOpen}>
      <div>nima</div>
    </Modal>
  );
}
