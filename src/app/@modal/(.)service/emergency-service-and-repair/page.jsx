import Link from "next/link";
import Modal from '../../../components/modal'
import styles from "../services-modal.module.css";


export default async function Page() {

  const showClose = true;
  const prevLink = "/service/beer-and-wine-cleaning"
  const nextLink = "/service/draft-beer-system-audits"

  return (
    <Modal prevLink={prevLink} nextLink={nextLink}>
    <div>
        <p>Emergency Service and Repair</p>
        <Link href="/">
          <button style={{backgroundColor: "blue", color: "white", padding: "5px", margin: "20px"}}>home</button>
        </Link>
    </div>
    </Modal>
  );
}
