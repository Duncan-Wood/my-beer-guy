"use client"

import React from "react";
import ServiceCard from "./service-card";
import styles from "./services.module.css";
import Grid from "@mui/joy/Grid";
import { Typography } from "@mui/joy";
import Link from "next/link";
import { Suspense } from "react";

const Services = () => {
  return (
    <div className={styles.container}>
      <Typography level="h2" className="text-center">
        Our Services
      </Typography>
      <Suspense fallback={<div>test</div>}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 6, lg: 8 }}
        className="p-4"
      >
        <Grid xs={2} sm={2} md={2} lg={2}>
          <Link href='/service/beer-and-wine-cleaning'>
            <ServiceCard
              img="/services/beer-and-wine-cleaning.jpeg"
              title="Beer and Wine Line Cleaning"
            />
          </Link>
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ServiceCard
            img="/services/emergency-service-and-repair.jpeg"
            title="Emergency Service and Repair"
          />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ServiceCard
            img="/services/draft-beer-system-audits.webp"
            title="Draft Beer System Audits"
          />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ServiceCard
            img="/services/draft-system-installation.jpeg"
            title="Draft System Installation"
          />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ServiceCard
            img="/services/glycol-system-service.jpeg"
            title="Glycol System Service"
          />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ServiceCard img="/services/bar-supplies.webp" title="Bar Supplies" />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ServiceCard
            img="/services/fruit-fly-control.webp"
            title="Fruit Fly Control"
          />
        </Grid>
      </Grid>
      </Suspense>
    </div>
  );
};

export default Services;
