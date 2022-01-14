import React from "react";
import PropTypes from "prop-types";
import { Form } from "formik";
import makeStyles from "@material-ui/styles/makeStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import AssetError from "components/Error";
import * as globalConstants from "utils/constants";
import AssetOrdersCreateInput from "./Input";
import AssetOrdersCreateConfirm from "./Confirm";

const { ASSET_CREATE_STEP_TYPES } = globalConstants;

const useStyles = makeStyles((theme) => ({
  form: { margin: 2 },
  label: { padding: 0, "& .MuiStepLabel-iconContainer": { paddingRight: 0 } },
}));

function AssetCreate({
  steps = [],
  activeStep = 0,
  setActiveStep,
  stepsError = [],
  router,
}) {
  const styles = useStyles();

  function onButtonClick() {
    const { onNext } = steps[activeStep];
    onNext();
  }

  const steppers = (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={`steps-${step.label}`} className={styles.label}>
          <StepLabel className={styles.label}></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
  return (
    <>
      <Box display="flex" justifyContent="center">
        <img src="logo.png" alt="logo" width={150} />
      </Box>
      {steppers}
      <Form className={styles.form}>
        {stepsError[activeStep] && (
          <AssetError message={stepsError[activeStep]} />
        )}
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          maxWidth={550}
        >
          {steps.map((step, index) => {
            const { type, label } = step || {};

            if (activeStep === index && type === ASSET_CREATE_STEP_TYPES.INPUT)
              return <AssetOrdersCreateInput key={label} step={step} />;
            if (
              activeStep === index &&
              type === ASSET_CREATE_STEP_TYPES.CONFIRM
            )
              return <AssetOrdersCreateConfirm key={label} step={step} />;

            return null;
          })}
          <Button
            color="primary"
            variant="contained"
            onClick={onButtonClick}
            fullWidth
            disableElevation
          >
            {activeStep === steps.length - 1
              ? "Launch Eden"
              : "Create Workspace"}
          </Button>
        </Box>
      </Form>
    </>
  );
}

AssetCreate.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  stepsError: PropTypes.array,
  resource: PropTypes.string,
};

export default AssetCreate;
