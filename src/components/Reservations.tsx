import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { brown } from "@mui/material/colors"
import Room1 from "../assets/habitacion1.png"
import Room2 from "../assets/habitacion2.jpg"
import Room3 from "../assets/habitacion3.jpg"
import Carousel from "react-material-ui-carousel";

const Reservations = () => {
  const rooms = [
    { name: "Room1", img: Room1 },
    { name: "Room2", img: Room2 },
    { name: "Room3", img: Room3 },
  ]

  return (
    <Box
      sx={{
        bgcolor: brown[300],
        paddingY: 4,
        alignItems: "center",
        marginBottom: 8
      }}
    >
      <Carousel
        sx={{ padding: { xs: "20px", sm: "20px 100px", md: "20px 150px" } }}
        NextIcon={<KeyboardArrowRight style={{ color: "white", fontSize: "40px" }} />}
        PrevIcon={<KeyboardArrowLeft style={{ color: "white", fontSize: "40px" }} />}
        interval={6000}
        indicators={false}
        navButtonsAlwaysVisible={true}
      >
        {rooms.map(room => (
          <Card key={room.name} sx={{
            display: { md: "flex" },
            color: "white",
            bgcolor: "transparent",
            boxShadow: "none",
            borderRadius: 0
          }}>
            <CardMedia
              width="450"
              height="270"
              sx={{ borderRadius: "10px" }}
              component="img"
              image={room.img}
              alt={room.name}
            />
            <CardContent sx={{ textAlign: { xs: "center", sm: "start" } }}>
              <Typography mb={2} variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "20px", sm: "32px" } }}>Nombre de la habitación</Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
              <Typography mb={2} variant="body1">
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
        ))}
      </Carousel>
    </Box>
  )
}

export default Reservations