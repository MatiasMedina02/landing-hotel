import { LinkedIn, X } from "@mui/icons-material"
import { Box, Grid, Link, Stack, Typography } from "@mui/material"
import { brown } from "@mui/material/colors"

const Footer = () => {
  return (
    <Stack style={{
      alignItems: "center",
      backgroundColor: brown[300],
      color: "white",
      padding: "48px 8px",
    }}>
      <Grid container mb={6} sx={{
        textAlign: { xs: "center", sm: "start" },
        gap: { xs: 2, sm: 0 }
      }}>
        <Grid item xs={12} sm={2} sx={{
          textAlign: "center"
        }}>
          <Typography variant="h4" height="100px" sx={{
            borderRight: { sm: "4px solid white" }
          }}>
            Logo
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{
          textAlign: "center",
          padding: "0 40px"
        }}>
          <Typography variant="h6" textAlign="start">About Us</Typography>
          <Typography variant="body1" textAlign="justify" fontSize="12px">Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor hendrerit nunc felis aliquet urna mollis quam.</Typography>
        </Grid>
        <Grid item xs={12} sm={2} sx={{
          display: "flex",
          flexDirection: "column"
        }}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="#" underline="hover">
            Input
          </Link>
          <Link href="#" underline="hover">
            Input
          </Link>
          <Link href="#" underline="hover">
            Input
          </Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Link href="#" underline="none">
            <X fontSize="large" />
          </Link>
          <Link href="#" underline="none">
            <LinkedIn fontSize="large" />
          </Link>
          <Typography variant="h5">asdasd@asd.com</Typography>
        </Grid>
      </Grid>

      <Grid container alignItems="center" justifyContent="center" gap={4}>
        <Grid item>
          <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: 700 }}>2023 Nombre. All rights reserved</Typography>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex", gap: { sm: 2 } }}>
            <Link href="#" underline="hover">
              Términos y condiciones
            </Link>
            <Link href="#" underline="hover">
              Políticas de privacidad
            </Link>
            <Link href="#" underline="hover">
              Seguridad
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Footer