import React, {useState} from "react";
import './App.css';
import {
  AppBar, BottomNavigation, BottomNavigationAction,
  Box,
  Button,
  Card, CardActions, CardContent,
  CardMedia,
  Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import {makeStyles} from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"

import FolderIcon from "@material-ui/icons/Folder"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import FavoriteIcon from "@material-ui/icons/Favorite"
import RestoreIcon from "@material-ui/icons/Restore"

import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(5)

  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false)
const handleClickOpen = () => {
    setOpen(true)
};
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          {/*В Toolbar пишеться верхня панель іконки меню випливаюче...*/}
          <Toolbar>
            <IconButton edge="start" color="inherit"
                        aria-label="menu" className={classes.menuButton}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Web Site Sasha Voloshyn </Typography>

            {/*Box щось на подобі div.... mr - margin 1 = 8px */}
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}> Log In </Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText> Log in to see videos</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Email Adress" type="email"
                  fullWidth/>
                  <TextField autoFocus margin="dense" id="password" label="Password" type="password"
                             fullWidth/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color={"primary"}> Cancel </Button>
                  <Button onClick={handleClose} color={"primary"}>  Log In </Button>
                </DialogActions>
              </Dialog>
            </Box>

            <Button color="secondary" variant="contained"> Sign Up </Button>
          </Toolbar>

        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" color="inherit" gutterBottom
                              variant="h3">
                    Web Block
                  </Typography>

                  <Typography component="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores beatae blanditiis consectetur
                    consequatur deserunt eum exercitationem incidunt libero magni neque quibusdam repudiandae rerum sit
                    suscipit, temporibus vero. Labore, officiis.
                  </Typography>

                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom> Web Block </Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores beatae blanditiis consectetur
              consequatur deserunt eum exercitationem incidunt libero magni neque quibusdam repudiandae rerum sit
              suscipit, temporibus vero. Labore, officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              A asperiores beatae blanditiis consectetur
              consequatur deserunt eum exercitationem incidunt libero magni neque quibusdam repudiandae rerum sit
              suscipit, temporibus vero. Labore, officiis.</Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"> Start Now </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary"> Learn More </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                             image="https://source.unsplash.com/random"
                             title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      My Blog post My Blog post
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="primary" size="small"> View </Button>
                    <Button color="primary" size="small"> Edit </Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>

                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom> Footer </Typography>
        <BottomNavigation value={value}
                          onChange={handleChange}
                          className={classes.root}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon/>}/>
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}/>
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon/>}/>
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon/>}/>

        </BottomNavigation>
      </footer>
      <Typography align={"center"} variant={"subtitle1"} color={"textSecondary"} component={"p"}> Material React Web
        site</Typography>

    </>
  );
}

export default App;
