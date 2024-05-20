"use client";

import ServicesContent from "../../components/services/services-details/services-content";
import useService from "../../lib/useService";
import styles from "./service-profile.module.css";

export default function Page() {
  const { currentService, replace } = useService();
  const imageSize = {
    width: 500,
    height: 500,
  };

  return (
    <div>
      <ServicesContent
        currentService={currentService}
        replace={replace}
        styles={styles}
        imageSize={imageSize}
      />
    </div>
  );
}
