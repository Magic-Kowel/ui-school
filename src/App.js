import CardUser from './components/CardUser';
import Breadcrumb from './components/Breadcrumb';
import SearchFilter from './components/SearchFilter';
import NavBarApp from './components/NavBarApp';
import Box from '@mui/material/Box';
import {
  Container,Grid
} from '@mui/material';
function App() {

  return (
  <>
    <NavBarApp />
    <Container  maxWidth="xl" sx={{
      marginTop:10,
      paddingBottom:5,
      backgroundColor: '#D0E4FF'
    }}>
        <Breadcrumb />
        <SearchFilter />
        <Grid container spacing={3}  justify="center">
            <Grid
              item xs={12} sm={6} md={4}>
              <CardUser />
            </Grid>
            <Grid
              item xs={12} sm={6} md={4}>
              <CardUser />
            </Grid>
            <Grid
              item xs={12} sm={6} md={4}>
              <CardUser />
            </Grid>
            <Grid
              item xs={12} sm={6} md={4}>
              <CardUser />
            </Grid>
            <Grid
              item xs={12} sm={6} md={4}>
              <CardUser />
            </Grid>
        </Grid>
    </Container>
  </>
  );
}

export default App;
