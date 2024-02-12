import styles from './clients.module.css'
import { Typography } from '@mui/joy'
import Grid from '@mui/joy/Grid'
import ClientAvatar from './client-avatar'

const Clients = () => {
  return (
    <div className={styles.container  }>
    <Typography level="h2" className="text-center">
      Our Clients
    </Typography>
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 4, md: 6, lg: 8 }}
      className="p-4"
      textAlign={{ xs: "center", sm: "center", md: "center" }}
    >
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar

        />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar

        />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar

        />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar

        />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar

        />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar 

        />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <ClientAvatar

        />
      </Grid>
    </Grid>
  </div>  
  )
}

export default Clients