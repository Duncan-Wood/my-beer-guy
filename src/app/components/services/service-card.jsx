import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import styles from "./services.module.css";

export default function ServiceCard({ img, title }) {
  return (
    <Card className={styles.cardContainer} sx={{ width: 320}}>
      <CardOverflow>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={img}
            srcSet={img}
            loading="lazy"
            alt="Beer and Wine Line Cleaning Image"
          />
        </AspectRatio>
        <CardContent orientation="vertical" className="text-center">
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body" color="textSecondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
          <Button
          variant="solid"
          size="md"
          background="white"
          color="black"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, border:"1px solid black", mt: 2 }}
        >
          Learn More
        </Button>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
