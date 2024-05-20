import React, { useCallback } from "react";
import Image from "next/image";
import Button from "@mui/joy/Button";
import Link from "next/link";

const ServicesContent = ({ currentService, replace, imageSize, styles }) => {
  if (!currentService) return null;

  const onClick = useCallback(
    (e) => {
      replace("/")
    },
    [currentService]
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{currentService.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={currentService.img}
            height={imageSize.height}
            width={imageSize.width}
            loading="lazy"
            alt="Beer and Wine Line Cleaning Image"
          />
        </div>
        <div className={styles.description}>
          <p>{currentService.description}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Link href="/">
          <Button
            type="button"
            onClick={onClick}
            variant="solid"
            size="md"
            background="white"
            color="black"
            aria-label="Explore Bahamas Islands"
            sx={{
              ml: "auto",
              alignSelf: "center",
              fontWeight: 600,
              border: "1px solid black",
              mt: 2,
            }}
          >
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesContent;
