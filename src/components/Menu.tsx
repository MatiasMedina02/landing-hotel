import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { lunches, breakfasts, desserts, drinks } from "../helpers/data";

const Menu = () => {
  return (
    <Stack p={2} alignItems="center">
      <Typography variant="h4" p={6} sx={{ fontSize: { xs: "20px", sm: "32px" }, fontWeight: 500 }}>Tus Recomendaciones</Typography>

      {/* Almuerzos */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Almuerzos</Typography>
        <Grid container alignItems="center" spacing={5}>
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
        </Grid>
      </Box>

      {/* Desayunos y Cenas */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Desayunos y Cenas</Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item>
            <KeyboardArrowLeft fontSize="large" />
          </Grid>
          {breakfasts.map(breakfast => (
            <Grid item key={breakfast.name}>
              <Card style={{
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
            </Grid>
          ))}
          <Grid item>
            <KeyboardArrowRight fontSize="large" />
          </Grid>
        </Grid>
      </Box>

      {/* Postres */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Postres</Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item>
            <KeyboardArrowLeft fontSize="large" />
          </Grid>
          {desserts.map(dessert => (
            <Grid item key={dessert.name}>
              <Card style={{
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
            </Grid>
          ))}
          <Grid item>
            <KeyboardArrowRight fontSize="large" />
          </Grid>
        </Grid>
      </Box>

      {/* Bebidas */}
      <Box mb={8}>
        <Typography variant="h5" mb={2}>Bebidas</Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item>
            <KeyboardArrowLeft fontSize="large" />
          </Grid>
          {drinks.map(drink => (
            <Grid item key={drink.name}>
              <Card style={{
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
          <Grid item>
            <KeyboardArrowRight fontSize="large" />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}

export default Menu