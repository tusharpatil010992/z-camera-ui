import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container maxWidth="lg" sx={{margin: "3% auto"}}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Box>
    </Container>
  )
}

export default Layout;
