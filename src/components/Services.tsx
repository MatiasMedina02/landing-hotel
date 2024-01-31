import { Stack, Box, Typography, Grid, Card, CardMedia, CardContent, Container, Button } from "@mui/material"
import { services } from "../helpers/data"
import { brown } from "@mui/material/colors"

const Services = () => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center">
        <Box mb={12}>
          <Typography variant="h5" mb={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>Servicios</Typography>
          <Grid container alignItems="center" spacing={4}>
            {services.map(service => (
              <Grid item key={service.name} xs={9} sm={4} md={3} sx={{ margin: "0 auto" }}>
                <Card style={{
                  padding: "16px",
                  textAlign: "center"
                }}>
                  <CardMedia
                    component="img"
                    src={service.img}
                    alt={service.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{service.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
      <Stack alignItems="center">
        <Box mb={12}>
          <Typography variant="h4" mb={3} sx={{
            color: brown[300],
            fontWeight: 700,
            fontSize: { xs: "24px", sm: "42px" }
          }}>
            Clasifica tu experiencia
          </Typography>
          <Button variant="contained" style={{
            width: "100%",
            color: "white",
            backgroundColor: "black",
            padding: "8px 16px",
            borderRadius: "10px",
          }}>
            Clasificar
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}

export default Services