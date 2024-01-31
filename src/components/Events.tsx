import { Box, ButtonBase, Grid, Stack, Typography } from "@mui/material"
import ConcertImage from "../assets/concierto.jpg"

const Events = () => {
  const images = [
    { name: "Concert1", url: ConcertImage },
    { name: "Concert2", url: ConcertImage },
    { name: "Concert3", url: ConcertImage }
  ];
  
  return (
    <Stack alignItems="center">
      <Box mb={12}>
        <Typography variant="h5" mb={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>Eventos</Typography>
        <Grid container spacing={6}>
          {images.map(image => (
            <Grid item xs={12} sm={6} md={4} key={image.name}>
              <ButtonBase
                style={{
                  width: 200,
                  height: 300,
                  position: "relative",
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  color: 'white',
                  padding: '16px',
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  margin: "0 auto"
                }}
              >
                <Typography variant="h6">Concierto</Typography>
                <Box sx={{ 
                  position: "absolute",
                  bottom: 0,
                  textAlign: "center",
                  paddingBottom: 2
                }}>
                  <Typography variant="body2">Fecha</Typography>
                  <Typography variant="body2">Hora</Typography>
                </Box>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}

export default Events