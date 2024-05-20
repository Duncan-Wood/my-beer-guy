"use client";

import React from "react";
import ServiceCard from "./service-card";
import styles from "./services.module.css";
import Grid from "@mui/joy/Grid";
import { Typography } from "@mui/joy";
import Link from "next/link";
import { Suspense } from "react";

import { servicesArray } from "../../lib/utils";

const Services = () => {

  return (
    <div className={styles.container}>
      <Typography level="h2" className="text-center">
        Our Services
      </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 6, lg: 8 }}
          className="p-4"
        >
          {servicesArray.map((service, title) => (
            <Grid key={title} xs={2} sm={2} md={2} lg={2} className={styles.serviceCard}>
              <Link href={`${service.pathname}`}>
                <ServiceCard id={service.id} img={service.img} title={service.title} />
              </Link>
            </Grid>
          ))}
        </Grid>
    </div>
  );
};

export default Services;
