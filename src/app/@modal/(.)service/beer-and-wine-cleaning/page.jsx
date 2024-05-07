import Link from "next/link";
import Modal from '../../../components/modal'


export default async function Page() {

  const showClose = true;

  return (
    <Modal className="test">
    <div>
        <p>intercepted</p>
        <Link href="/">
          <button style={{backgroundColor: "blue", color: "white", padding: "5px", margin: "20px"}}>home</button>
        </Link>
    </div>
    </Modal>
  );
}
