import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
const pages = [
  'Inicio',
  'Generador',
  'Enviar mensage',
  'Registro individual',
  'Generar reporte'
];

function NavBarApp(){
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar
        position="fixed">
        <Container maxWidth="xl">
            <Toolbar 
            disableGutters
            sx={{
                display: { xs: "flex" },
                flexDirection: "row",
                justifyContent: "center"
            }}
            >
            <Box
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 300,
                        
                        fontSize:20,
                        color: '#17a2b8',
                        textDecoration: 'none',
                    }}
                    >
                    <StarBorderPurple500Icon
                    fontSize='large'
                    sx={{
                        textAlign:'center',
                        color:'#000',
                        fontSize:'4rem',
                    }}
                    />          
                </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{color:'#000'}}
                >
                <MenuIcon />
                </IconButton>
                <Menu

                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none'},
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography 
                    sx={{color: '#000'}} 
                    textAlign="center">
                        <Link underline="none">
                        {page}
                        </Link>
                    </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,flexDirection: "row",
                justifyContent: "end"} }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#000', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}
export default NavBarApp;