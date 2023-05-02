import { 
    Box,
    Breadcrumbs,
    Link
} from '@mui/material';
function Breadcrumb(){
    return(
        <Box
            sx={{
                marginTop: '10px',
                marginBottom: '10px',
                paddingTop: '10px',
                paddingBottom: '10px'
            }}
        >
            <Breadcrumbs 
                aria-label="breadcrumb"
            >
                <Link underline="hover" color="inherit" href="/">
                    Inicio
                </Link>
                <Link
                underline="hover"
                color="inherit"
                href="/"
                >
                    Generador
                </Link>
            </Breadcrumbs>

        </Box>
    );
}
export default Breadcrumb;