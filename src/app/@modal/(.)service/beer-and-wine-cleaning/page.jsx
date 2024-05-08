import Link from "next/link";
import Modal from "../../../components/modal";
import styles from "../services-modal.module.css";
import { Suspense } from "react";

export default async function Page() {
  const showClose = true;
  const prevLink = " ";
  const nextLink = "/service/emergency-service-and-repair";

  return (
    <Suspense fallback={<div>loading...</div>}>
      {prevLink && nextLink && (
        <Modal prevLink={prevLink} nextLink={prevLink}>
          <div>
            <p>intercepted</p>
            <Link href="/">
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "5px",
                  margin: "20px",
                }}
              >
                home
              </button>
            </Link>
          </div>
        </Modal>
      )}
    </Suspense>
  );
}
