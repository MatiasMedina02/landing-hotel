import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { lunches, breakfasts, desserts, drinks } from "../helpers/data";
import Carousel from "react-material-ui-carousel"

const Menu = () => {
  return (
    <Stack p={2} alignItems="center">
      <Typography variant="h4" p={6} sx={{ fontSize: { xs: "20px", sm: "32px" }, fontWeight: 500 }}>Tus Recomendaciones</Typography>

      {/* Almuerzos */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Almuerzos</Typography>
        <Box minWidth="300px">
          <Carousel
            NextIcon={<KeyboardArrowRight style={{ color: "white", fontSize: "40px" }} />}
            PrevIcon={<KeyboardArrowLeft style={{ color: "white", fontSize: "40px" }} />}
            interval={6000}
            indicators={false}
            navButtonsAlwaysVisible={true}
            animation="slide"
          >
            {lunches.map(lunch => (
              <Card key={lunch.name} style={{
                padding: "16px"
              }}>
                <CardMedia
                  component="img"
                  image={lunch.img}
                  alt={lunch.name}
                />
                <CardContent>
                  <Typography textAlign="center" variant="h6">Nombre</Typography>
                  <Typography textAlign="center" variant="body2">00.00 $</Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Box>
        {/* <Grid container alignItems="center" spacing={5}>
          <Grid item>
            <KeyboardArrowLeft fontSize="large" />
          </Grid>
          {lunches.map(lunch => (
            <Grid item key={lunch.name}>
              <Card style={{
                padding: "16px"
              }}>
                <CardMedia
                  component="img"
                  image={lunch.img}
                  alt={lunch.name}
                />
                <CardContent>
                  <Typography textAlign="center" variant="h6">Nombre</Typography>
                  <Typography textAlign="center" variant="body2">00.00 $</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item>
            <KeyboardArrowRight fontSize="large" />
          </Grid>
        </Grid> */}
      </Box>

      {/* Desayunos y Cenas */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Desayunos y Cenas</Typography>
        <Box minWidth="300px">
          <Carousel
            NextIcon={<KeyboardArrowRight style={{ color: "white", fontSize: "40px" }} />}
            PrevIcon={<KeyboardArrowLeft style={{ color: "white", fontSize: "40px" }} />}
            interval={6000}
            indicators={false}
            navButtonsAlwaysVisible={true}
            animation="slide"
          >
            {breakfasts.map(breakfast => (
              <Card key={breakfast.name} style={{
                padding: "16px"
              }}>
                <CardMedia
                  component="img"
                  image={breakfast.img}
                  alt={breakfast.name}
                />
                <CardContent>
                  <Typography textAlign="center" variant="h6">Nombre</Typography>
                  <Typography textAlign="center" variant="body2">00.00 $</Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Box>
      </Box>

      {/* Postres */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Postres</Typography>
        <Box minWidth="300px">
          <Carousel
            NextIcon={<KeyboardArrowRight style={{ color: "white", fontSize: "40px" }} />}
            PrevIcon={<KeyboardArrowLeft style={{ color: "white", fontSize: "40px" }} />}
            interval={6000}
            indicators={false}
            navButtonsAlwaysVisible={true}
            animation="slide"
          >
            {desserts.map(dessert => (
              <Card key={dessert.name} style={{
                padding: "16px"
              }}>
                <CardMedia
                  component="img"
                  image={dessert.img}
                  alt={dessert.name}
                />
                <CardContent>
                  <Typography textAlign="center" variant="h6">Nombre</Typography>
                  <Typography textAlign="center" variant="body2">00.00 $</Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Box>
      </Box>

      {/* Bebidas */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Bebidas</Typography>
        <Box minWidth="300px">
          <Carousel
            NextIcon={<KeyboardArrowRight style={{ color: "white", fontSize: "40px" }} />}
            PrevIcon={<KeyboardArrowLeft style={{ color: "white", fontSize: "40px" }} />}
            interval={6000}
            indicators={false}
            navButtonsAlwaysVisible={true}
            animation="slide"
          >
            {drinks.map(drink => (
              <Grid item key={drink.name}>
                <Card key={drink.name} style={{
                  padding: "16px"
                }}>
                  <CardMedia
                    component="img"
                    image={drink.img}
                    alt={drink.name}
                  />
                  <CardContent>
                    <Typography textAlign="center" variant="h6">Nombre</Typography>
                    <Typography textAlign="center" variant="body2">00.00 $</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Stack>
  )
}

export default Menu