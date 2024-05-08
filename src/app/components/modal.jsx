"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'

import Link from "next/link";
import useEscapeKey from "../custom-hooks/useEscapeKey"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./modal.module.css";


export default function Modal({ children, prevlink, nextLink }) {
  const router = useRouter();
  const pathname = usePathname()

  const overlay = useRef(null);
  const wrapper = useRef(null);

  // Default to false to handle undefined pathname
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    "/service/beer-and-wine-cleaning",
    "/service/emergency-service-and-repair",
    "/service/draft-beer-system-audits",
    "/service/draft-system-installation",
    "/service/glycol-system-service",
    "/service/bar-supplies",
    "/service/fruit-fly-control",
  ];

  useEffect(() => {
    
    // Only update state when pathname is defined
    if (pathname) {
      console.log("pathname", pathname)

      setIsModalOpen(links.includes(pathname));
    }
  }, [pathname]);

  const onDismiss = useCallback(() => {
    setIsModalOpen(false); 
    router.push("/")
  }, [router]);

  const clickOverlay = useCallback((e) => {
    if (e.target === overlay.current || e.target === wrapper.current) {
      onDismiss();
    }
  }, [onDismiss]);

  useEscapeKey(isModalOpen, onDismiss);

  // Don't render the modal if it's not open
  if (!isModalOpen) return null; 


  return (
    <div ref={overlay} className={styles.overlay} onClick={clickOverlay}>
      <div ref={wrapper} className={styles.wrapper}>
        <Link href="/" style={{ display: "none" }}></Link>
        {prevlink != " " && (
          <>
            <div className={styles.arrowBack}>
              <ArrowBackIcon />
            </div>
            <Link prefetch={false} href="/service/emergency-service-and-repair" style={{ display: "none" }}></Link> 
          </>
        )}
          <div className={styles.content}>
          {children}
        </div>
        {nextLink != " " && (
          <>
            <div className={styles.arrowForward}>
              <ArrowForwardIcon />
            </div>
            <Link prefetch={false} href={nextLink} style={{ display: "none" }}></Link>
          </>
        )}
      </div>
    </div>
  );
}