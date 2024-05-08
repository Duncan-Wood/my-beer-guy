"use client";

import React, {
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useRouter, usePathname } from 'next/navigation';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./modal.module.css";
import Link from "next/link";


export default function Modal({ children, prevlink, nextLink }) {
  const router = useRouter();
  const { replace } = router;  

  const overlay = useRef(null);
  const wrapper = useRef(null);

  const links = [
    "/service/beer-and-wine-cleaning",
    "/service/emergency-service-and-repair",
    "/service/draft-beer-system-audits",
    "/service/draft-system-installation",
    "/service/glycol-system-service",
    "/service/bar-supplies",
    "/service/fruit-fly-control",
  ];

  const currentIndex = links.indexOf(pathname);

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : " ";
  const nextIndex = currentIndex < links.length - 1 ? currentIndex + 1 : " ";

  const onDismiss = () => {
      replace("/");
      router.reload();
    }
  
  const clickOverlay = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

//   const goToPreviousPage = () => {
//     if (prevCrawlId) {
//       if (prevLinkRef.current) {
//         prevLinkRef.current.click();
//       }
//     } else {
//       router.push(homeURL);
//       router.refresh();
//     }
//   };

//   const goToNextPage = () => {
//     if (nextCrawlId) {
//       if (nextLinkRef.current) {
//         nextLinkRef.current.click();
//       }
//     } else {
//       router.push(homeURL);
//       router.refresh();
//     }
//   };

  return (
    <div
      ref={overlay}
      className={styles.overlay}
      onClick={clickOverlay}
    >
      <div
        ref={wrapper}
        className={styles.wrapper}
      >
        <Link href="/" style={{ display: "none" }}></Link>
        {prevlink != " " && (
          <>
            <div
            //   onClick={goToPreviousPage}
            className={styles.arrowBack}
            >
              <ArrowBackIcon />
            </div>
            <Link
            prefetch={false}
              href="/service/emergency-service-and-repair"
              style={{ display: "none" }}
            ></Link> 
          </>
        )}
        <div className={styles.content}>
        {children}
        </div>
        {nextLink != " " && (
          <>
            <div
            //   onClick={goToNextPage}
              className={styles.arrowForward}
            >
              <ArrowForwardIcon/>
            </div>
            <Link
            prefetch={false}
              href={nextLink}
              style={{ display: "none" }}
            ></Link>
          </>
        )}
      </div>
    </div>
  );
}
