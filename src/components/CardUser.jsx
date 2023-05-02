import {useState} from 'react';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';
function CardUser(){
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <Card 
          variant="outlined" 
          sx={{
            borderRadius: 2,
            borderWidth: 3,
            borderColor:"#1867AA",
            maxWidth: 445,
            height: 250
          }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <Box
                  display="flex" 
                  justifyContent="center" 
                  alignItems="center"
                  bgcolor="#F1F1F1"
                  borderRadius={7}
                  >
                  <SchoolIcon
                    fontSize='large'
                    sx={{
                        textAlign:'center',
                        color:'#000',
                        fontSize:'9rem',
                    }}
                  />          
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{fontSize: '15px'}}>
                  Nombre
                </Typography>
                <Typography sx={{fontSize: '20px'}} component="p">
                  Josue Fierro Morfin
                </Typography>
                <Typography sx={{fontSize: '15px'}}>
                  Matricula
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: 'bold'}} component="p">
                  666999
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{marginTop:3}}>
              <Button variant="contained" size="small">
                Cargar Imagen
              </Button>
              <Button variant="outlined" size="small" sx={{marginLeft: '10px'}}>
                Seleccionar
              </Button>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <IconButton aria-label="menu" color="primary" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Opción 1</MenuItem>
                <MenuItem onClick={handleClose}>Opción 2</MenuItem>
              </Menu>
            </Box>
          </CardContent>
        </Card>
    );
}
export default CardUser;