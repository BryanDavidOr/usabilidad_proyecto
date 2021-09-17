import "./App.css";
import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Button, TextField, Modal, Fade, Backdrop } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    width: 650,
    height: 500,
  },
  internalCard: {
    height: 400,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: 600,
  },
  box: {
    height: 60,
  },
  margin: {
    margin: theme.spacing(4),
  },
  text: {
    fontWeight: 600,
    fontSize: 13,
  },
  labels: {
    fontWeight: 600,
    marginTop: 25,
    fontSize: 13,
  },
  labels_error: {
    fontWeight: 600,
    marginTop: 25,
    fontSize: 25,
    color: "gray"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    border: "2px solid #00aae4",
    margin: theme.spacing(0, 3, 0),
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [correct, setCorrect] = React.useState(false);
  const [cedula, setcedula] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <a href="#content" role="navigation">
        Ir al contenido principal
      </a>
      <header className="App-header">
        <Fragment>
          <center>
            <img
              src="./headImage.png"
              className="App-head"
              alt="cabecera del Ministerio de Salud del Ecuador"
              width="650px"
            />
          </center>
        </Fragment>
      </header>
      <body id="content" tabIndex="-1" role="main">
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div id="modal-modal-title">
                <Typography
                  variant="h6"
                  component="h2"
                  color="primary"
                  className={classes.text}
                  align="center"
                >
                  Datos consulta
                </Typography>
              </div>
              <Card>
                {correct? <CardContent>
                  <div id="modal-modal-description">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          Nombre: ORTUÑO BARRERA BRYAN DAVID
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          PROVINCIA: PICHINCHA
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          CANTÓN: QUITO
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          PARROQUIA: SAN BARTOLO
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          CENTRO DE VACUNACIÓN: INSTITUTO SUPERIOR CONSEJO
                          PROVINCIAL DE PICHINCHA
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          DIRECCIÓN: AJAVI OE4-154 Y AV. CARDENAL DE LA TORRE
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          PRIMERA DOSIS: VACUNADO/A (SINOVAC)
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          color="primary"
                          className={classes.text}
                          align="left"
                        >
                          SEGUNDA DOSIS: VACUNADO/A (SINOVAC)
                        </Typography>
                      </li>
                    </ul>
                  </div>
                  <Box m={2}>
                    <Button
                      onClick={null}
                      color="primary"
                      variant="outlined"
                      className={classes.button}
                    >
                      Actualizar registro de vacunación
                    </Button>
                  </Box>
                  <Box>
                    <center>
                      <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                      >
                        Aceptar
                      </Button>
                    </center>
                  </Box>
                </CardContent> : 
                <CardContent>
                  <div id="modal-modal-description">
                  <center>
                    <img
                      src="./icono_información.png"
                      className="App-head"
                      alt="Icono de información de error"
                      width="350px"
                    />
                  </center>
                  </div>
                  <Typography className={classes.labels_error} variant="h3" align ="center">INFORMACIÓN</Typography>
                  <Typography align ="center">{cedula? "NÚMERO DE CÉDULA ICORRECTO " : "FECHA DE NACIMIENTO INCORRECTA"}</Typography>
                  <Box md = "2">
                    <center>
                      <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                      >
                        Aceptar
                      </Button>
                    </center>
                  </Box>
                </CardContent>}
              </Card>
            </div>
          </Fade>
        </Modal>
        <div>
          <center>
            <Card className={classes.mainCard}>
              <CardContent>
                <Box
                  className={classes.box}
                  bgcolor="#00809c"
                  justifyContent="center"
                >
                  <h1 style={{ margin: 1 }}>
                    <Typography className={classes.title}>
                      CONSULTA TU CENTRO DE VACUNACIÓN
                    </Typography>
                  </h1>
                </Box>
                <Card className={classes.internalCard}>
                  <CardContent>
                    <Fragment>
                      <Formik
                        initialValues={{
                          Cedula: "",
                          FechaNacimiento: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          setSubmitting(true);
                          try {
                            if(values.Cedula === "1725213555"){
                              setcedula(false);
                              setCorrect(true);
                            }
                            handleOpen();
                            setSubmitting(false);
                            //if(values.FechaNacimiento !== )
                            console.log(values.Cedula + values.Fecha);
                           
                          } catch (err) {
                            setSubmitting(false);
                          }
                        }}
                        validationSchema={Yup.object().shape({
                          Cedula: Yup.string()
                            .required("¡Por favor ingrese un número de cédula!")
                            .matches(/^\d{10}$/gm, "¡Se requieren 10 números!"),
                          FechaNacimiento: Yup.date().required(
                            "¡Por favor ingrese una fecha!"
                          ),
                        })}
                      >
                        {(props) => {
                          const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                          } = props;
                          return (
                            <form onSubmit={handleSubmit}>
                              <Grid container spacing={2}>
                                <Grid item xs={4}>
                                  <Typography
                                    align="left"
                                    className={classes.labels}
                                  >
                                    Cédula:
                                  </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <TextField
                                    error={errors.Cedula && touched.Cedula}
                                    id="cedula"
                                    label="Número de cédula"
                                    placeholder = "Por favor ingresa tu número de cédula"
                                    name="Cedula"
                                    fullWidth={true}
                                    autoComplete="off"
                                    className={useStyles.margin}
                                    value={values.Cedula}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    inputProps={{ maxLength: 10 }}
                                    helperText={
                                      errors.Cedula &&
                                      touched.Cedula &&
                                      errors.Cedula
                                    }
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography
                                    align="left"
                                    className={classes.labels}
                                  >
                                    Fecha de nacimiento:
                                  </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <TextField
                                    error={
                                      errors.FechaNacimiento &&
                                      touched.FechaNacimiento
                                    }
                                    id="fecha"
                                    label="Fecha de nacimiento"
                                    placeholder = "Por favor ingresa tu fecha de nacimiento"
                                    name="FechaNacimiento"
                                    fullWidth={true}
                                    className={useStyles.margin}
                                    type="date"
                                    autoComplete="off"
                                    value={values.FechaNacimiento}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    helperText={
                                      errors.FechaNacimiento &&
                                      touched.FechaNacimiento &&
                                      errors.FechaNacimiento
                                    }
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <div>
                                    <Box className={classes.margin}>
                                      <Typography
                                        color="primary"
                                        className={classes.text}
                                        align="left"
                                      >
                                        Recuerda las medidas de bioseguridad.
                                        Usa mascarilla y mantén la distancia de
                                        dos metros con otras personas.
                                      </Typography>
                                      <Typography
                                        color="primary"
                                        className={classes.text}
                                        align="left"
                                      >
                                        Infórmate por medios oficiales y sigue
                                        las recomendaciones dadas por el
                                        Ministerio de Salud Pública.
                                      </Typography>
                                      <Typography
                                        color="primary"
                                        className={classes.text}
                                        align="left"
                                      >
                                        RECUERDA EL HORARIO DE ATENCIÓN EN EL
                                        CENTRO DE VACUNACIÓN ES DE 08:00 A
                                        17:00.
                                      </Typography>
                                    </Box>
                                    <div>
                                      <center>
                                        <Button
                                          type="submit"
                                          color="primary"
                                          variant="contained"
                                          disabled={isSubmitting}
                                        >
                                          Consulta
                                        </Button>
                                      </center>
                                    </div>
                                  </div>
                                </Grid>
                              </Grid>
                            </form>
                          );
                        }}
                      </Formik>
                    </Fragment>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </center>
        </div>
      </body>
    </div>
  );
}

export default App;
