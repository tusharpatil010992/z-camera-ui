import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';

export const Title = (props:any) => {
  return (
    <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      {props.title}
    </Typography>
  </Toolbar>
</AppBar>
  )
}
