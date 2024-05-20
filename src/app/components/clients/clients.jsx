import { Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import ClientAvatar from "./client-avatar";

const Clients = () => {
  let fourBrands = "/clients/4-brands-horizontal.png";
  let fiveStar = "/clients/Five-Star-Distributing.png";
  let wCThunderbolts = "/clients/W-C-Thunderbolts.png";
  let bWW = "/clients/bww-full-horizontal.png";
  let outback = "/clients/outback-black.png";

  return (
    <div>
      <Typography level="h2" className="text-center">
        Our Clients
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 6, lg: 8 }}
        className="p-4"c
        textAlign={{ xs: "center", sm: "center", md: "center" }}
      >
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ClientAvatar clientLogo={fourBrands} />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ClientAvatar clientLogo={fiveStar} />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ClientAvatar clientLogo={wCThunderbolts} />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ClientAvatar clientLogo={bWW} />
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
          <ClientAvatar clientLogo={outback} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Clients;
