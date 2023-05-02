
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import {
    TextField,
    InputAdornment,
    Icon,
    Grid,
    Box,
    Typography,
    Button,
    Stack
} from '@mui/material';
function SearchFilter(){
    return(
        <>
            <Grid container spacing={2} >
                <Grid xs={12} sm={3} marginBottom={2}>
                    <Box
                        sx={{
                            backgroundColor: '#a0c2f1',
                            marginRight:2,
                            padding:1.2,
                            borderRadius:3,
                            border: '3px solid',
                            borderColor: '#1867AA',
                        }}
                    >
                        <Typography
                            textAlign='center'
                            sx={{
                                color: "#fff",
                                fontWeight: 'bold'
                            }}
                        >
                            Buscar por: Nombe completo
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={9}>
                    <TextField
                        label="Buscar"
                        fullWidth={true}
                        size="small"
                        sx={{
                        backgroundColor:'#fff',
                    
                        marginBottom: '2rem'
                        }}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Icon>
                            <SearchIcon />
                            </Icon>
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={12} sm={2} marginBottom={2}>
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems="center"
                            sx={{
                                backgroundColor: '#fff',
                                marginRight:2,
                                padding:1.2,
                                borderRadius:3
                            }}
                        >
                            <GroupIcon
                                sx={{
                                    color: '#1867AA'
                                }}
                            />
                            <Typography
                                textAlign='center'
                                sx={{
                                    color: "#1867AA",
                                    fontWeight: 'bold',
                                    fontSize: '0.8rem'
                                }}
                            >
                               
                                Cantidad registrados  44
                            </Typography>
                        </Box>
                </Grid>
                <Grid xs={12} sm={6} marginBottom={2}>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined">
                            Alumnos
                        </Button>
                        <Button variant="outlined">
                            Profesores
                        </Button>
                        <Button variant="outlined">
                            Colaboradores
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>

    );
}
export default SearchFilter;