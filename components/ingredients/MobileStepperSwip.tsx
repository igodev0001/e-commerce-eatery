import * as React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Ingredient } from "../../lib/types";
// import SwipeableViews from 'react-swipeable-views';

interface Props {
  ingredients: Ingredient[];
}

export default function MobileStepperSwip({ ingredients }: Props) {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = ingredients.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
      ></Paper>

      {ingredients.map((ingredient, index) => (
        <div
          key={ingredient.id}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {Math.abs(activeStep - index) <= 0 ? (
            <Box
              component="img"
              sx={{
                height: 150,
                display: "flex",

                maxWidth: 150,
                overflow: "hidden",
                width: "100%",
              }}
              src={ingredient.image}
              alt={ingredient.name}
            />
          ) : null}
        </div>
      ))}
      <Typography style={{ marginTop: "1rem" }}>
        {ingredients[activeStep].name}
      </Typography>
      <ThemeProvider theme={theme}>
        <MobileStepper
          steps={maxSteps}
          style={{ display: "flex", gap: "5rem" }}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ color: "black" }}
            >
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
              style={{ color: "black" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </ThemeProvider>
    </Box>
  );
}
