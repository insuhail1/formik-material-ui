import React, { useState } from "react";
import { withFormik } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/PersonRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";

import AssetCreate from "Asset/Create";
import {
  ASSET_CREATE_STEP_TYPES,
  BASIC_EDIT_LAYOUT_TYPES,
} from "utils/constants";

function Register({ values: formValues }) {
  const [activeStep, setActiveStep] = useState(0);
  const [stepsError, setStepsError] = useState([]);
  const { fullName, displayName, workspaceName, workspaceURL, plan } =
    formValues || {};
  const steps = [
    {
      label: "Welcome! First things first...",
      onNext: onStepOneNextButtonClick,
      subLabel: "You can always change them later.",
      type: ASSET_CREATE_STEP_TYPES.INPUT,
      basic: [
        {
          label: "Full Name",
          dataKey: "fullName",
          typeProps: {
            placeholder: "Steve Jobs",
          },
        },
        {
          label: "Display Name",
          dataKey: "displayName",
          typeProps: { placeholder: "Steve" },
        },
      ],
    },
    {
      label: "let's set up a home for all your work",
      subLabel: "You can always create another workspace.",
      onNext: onStepTwoNextButtonClick,
      type: ASSET_CREATE_STEP_TYPES.INPUT,
      basic: [
        {
          label: "Workspace name",
          dataKey: "workspaceName",
          typeProps: { placeholder: "Eden" },
        },
        {
          label: "Workspace URL",
          dataKey: "workspaceURL",
          typeProps: {
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">www.eden.com/</InputAdornment>
              ),
            },
            placeholder: "Example",
          },
        },
      ],
    },
    {
      label: "How are you planning to use Eden?",
      subLabel: "We'll streamline your setup Experience accordingly.",
      onNext: onStepThreeNextButtonClick,
      type: ASSET_CREATE_STEP_TYPES.INPUT,
      basic: [
        {
          dataKey: "plan",
          type: BASIC_EDIT_LAYOUT_TYPES.TOGGLE,
          typeProps: {
            options: [
              {
                icon: <PersonIcon color="inherit" />,
                label: "For myself",
                dataKey: "workspaceName",
                subLabel: "Write better. Think more clearly. Stay organized",
                value: "myself",
              },
              {
                icon: <PeopleAltRoundedIcon color="inherit" />,
                label: "With my team",
                dataKey: "workspaceName",
                subLabel: "Wikis, docs, tasks & projects, all in one place.",
                value: "myteam",
              },
            ],
          },
        },
      ],
    },
    {
      label: `Congratulations, ${displayName}!`,
      subLabel: "You have completed onbnoarding, you can start using the Eden!",
      type: ASSET_CREATE_STEP_TYPES.CONFIRM,
      basic: [
        {
          label: "Full Name",
          dataKey: "fullName",
          typeProps: {
            placeholder: "Steve Jobs",
          },
        },
        {
          label: "Display Name",
          dataKey: "displayName",
          typeProps: { placeholder: "Steve" },
        },
      ],
    },
  ];

  function onStepOneNextButtonClick() {
    if (!fullName) {
      handleSetStepsError("Display Name is required");
    } else if (!displayName) {
      handleSetStepsError("Display Name is required");
    } else setActiveStep(1);
  }
  function onStepTwoNextButtonClick() {
    if (!workspaceName) {
      handleSetStepsError("Workspace name is required");
    } else if (!workspaceURL) {
      handleSetStepsError("Workspace URL is required");
    } else setActiveStep(2);
  }
  function onStepThreeNextButtonClick() {
    if (!plan) {
      handleSetStepsError("Please select plan");
    } else setActiveStep(3);
  }
  function handleSetStepsError(error) {
    setStepsError((state) => {
      const slicedState = state.slice();
      slicedState[activeStep] = error;
      return slicedState;
    });
  }

  return (
    <AssetCreate
      steps={steps}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      stepsError={stepsError}
    />
  );
}

const withFormikForm = withFormik({
  mapPropsToValues: () => ({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
  }),
  handleSubmit: () => {},
});

export default withFormikForm(Register);
