"use client";

import Modal from "../../../components/modal";
import ServicesContent from "../../../components/services/services-details/services-content";
import useService from "../../../lib/useService";
import styles from "./service-modal.module.css";


export default function Page() {
  const { replace, pathname, currentService, prevLink, nextLink } = useService();
  const imageSize = {
    width: 200,
    height: 200,
  };

  return (
    <Modal prevLink={prevLink} nextLink={nextLink} pathname={pathname}>
      <div>
        <ServicesContent currentService={currentService} replace={replace} styles={styles} imageSize={imageSize}/>
      </div>
    </Modal>
  );
}
