import { KeyboardArrowRight } from "@mui/icons-material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import {
  Button,
  Container,
  Grid,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";
import useStyles from "../styles";

const ideas = [
  {
    label: "I am crazy",
  },
  {
    label: "Hello World",
  },
  {
    label: "This is the land of do-as-you-please",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Box>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{ideas[activeStep].label}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {ideas.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box>
                  <Typography variant="h5">{step.label}</Typography>
                </Box>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next{" "}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Container>
  );
}

const Hero = () => {
  const classes = useStyles();
  return (
    <main>
      <div>
        <Container align="center" className={classes.container}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid item>
              <Typography variant="h3" color="secondary" gutterBottom>
                A trusted and secure bitcoin and crypto exchange
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="p" color="textSecondary">
                Get started with the easiest and most secure platform to buy,
                sell, trade and earn cryptocurrencies.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disableElevation
                className={classes.button}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
        <SwipeableTextMobileStepper />
      </div>
    </main>
  );
};

export default Hero;
