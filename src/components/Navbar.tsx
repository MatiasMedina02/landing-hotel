import { Link, Stack, Typography, Button, Grid, Box, Input } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HotelImage from "../assets/hotel.jpg";

const Navbar = () => {
  return (
    <Stack style={{
      width: "100%",
      minHeight: 375,
      display: "flex",
      backgroundImage: `url(${HotelImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center"
    }}>
      <Grid container p={2} style={{ flexGrow: 1 }}>
        <Grid item xs={6} md sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Typography variant="h4" color="white">Logo</Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          order: { xs: 1, md: 0 }
        }}>
          <Link href="#"underline="hover">
            Home
          </Link>
          <Link href="#"underline="hover">
            Menu
          </Link>
          <Link href="#"underline="hover">
            Eventos
          </Link>
          <Link href="#"underline="hover">
            Servicios
          </Link>
        </Grid>
        <Grid item xs={6} md sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button variant="contained" sx={{ 
            minWidth: "35px",
            height: "35px",
            bgcolor: "white", 
            borderRadius: "10px",
            padding: 0,
            ":hover": { 
              bgcolor: "lightgray" 
            } 
          }}>
            <PersonIcon style={{ color: "black" }} />
          </Button>
        </Grid>
      </Grid>
      <Stack style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 1 auto"
      }}>
        <Box component="form" style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Typography variant="h3" color="white" mb={4} sx={{ fontSize: { xs: "24px", sm: "48px" }, fontWeight: 900 }}>Nombre del Hotel</Typography>
          <Input placeholder="Hacer reserva" disableUnderline sx={{
            bgcolor: "white",
            borderRadius: "10px",
            padding: "8px 16px"
          }}></Input>
        </Box>
      </Stack>
    </Stack>
  )
}

export default Navbar