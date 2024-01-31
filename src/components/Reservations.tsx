import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { brown } from "@mui/material/colors"
import Room1 from "../assets/habitacion1.png"

const Reservations = () => {
  return (
    <Grid container mb={8} sx={{
      bgcolor: brown[300],
      paddingY: 4,
      alignItems: "center",
    }}>
      <Grid item xs display="flex" justifyContent="center">
        <KeyboardArrowLeft style={{ color: "white", fontSize: "40px" }} />
      </Grid>
      <Grid item xs={8}>
        <Card sx={{
          display: "flex",
          color: "white",
          bgcolor: "transparent",
          boxShadow: "none",
          borderRadius: 0
        }}>
          <CardMedia
            component="img"
            image={Room1}
            alt="Habitación"
          />
          <CardContent>
            <Typography variant="h2">Nombre de la habitación</Typography>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant="body1">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography>
            <Button variant="contained" sx={{
              bgcolor: "white",
              color: brown[300],
              ":hover": {
                bgcolor: "lightgray"
              }
            }}>Hacer Reservación</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs display="flex" justifyContent="center">
        <KeyboardArrowRight style={{ color: "white", fontSize: "40px" }} />
      </Grid>
    </Grid>
  )
}

export default Reservations