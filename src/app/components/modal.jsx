"use client";

import React, {
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./modal.module.css";
import Link from "next/link";


export default function Modal({ children }) {
  const router = useRouter();
  const { replace } = router;  

  const overlay = useRef(null);
  const wrapper = useRef(null);
  const prevLinkRef = useRef(null);
  const nextLinkRef = useRef(null);

  const onDismiss = () => {
      replace("/");
      router.refresh();
      console.log('triggered')
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
      className="overlay fixed inset-0 mx-auto bg-black/60 p-10"
      id="test"
      onClick={clickOverlay}
    >
      <div
        ref={wrapper}
        className="modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6"
      >
        <Link href="/" style={{ display: "none" }}></Link>
        {/* {prevCrawlId && ( */}
          <>
            <div
            //   onClick={goToPreviousPage}
              className={`arrowBack top-1/2 -translate-y-1/2 z-15000 ${styles.arrowBack}`}
            >
              <ArrowBackIcon style={{ color: "rgba(77, 68, 227, 1)" }} />
            </div>
            {/* <Link
              href={`/update/${prevCrawlId}`}
              ref={prevLinkRef}
              style={{ display: "none" }}
            ></Link> */}
          </>
        {/* )} */}
        {children}
        {/* {nextCrawlId && ( */}
          <>
            <div
            //   onClick={goToNextPage}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 ${styles.arrowForward}`}
            >
              <ArrowForwardIcon style={{ color: "rgba(77, 68, 227, 1)" }} />
            </div>
            {/* <Link
              href={`/update/${nextCrawlId}`}
              ref={nextLinkRef}
              style={{ display: "none" }}
            ></Link> */}
          </>
        {/* )} */}
      </div>
    </div>
  );
}
