import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

function RenderMuiTextField({
  field,
  form,
  textFieldProps,
  showMessage = true,
}) {
  const { name: fieldName } = field;
  const { touched, errors } = form;
  const error = get(errors, fieldName, undefined);
  const isTouched = get(touched, fieldName, undefined);
  const isError = error && isTouched;
  return (
    <TextField
      fullWidth
      variant="outlined"
      error={isError}
      helperText={isError && showMessage && error}
      {...field}
      {...textFieldProps}
    />
  );
}

function FormikTextField({ name, textFieldProps, ...otherProps }) {
  return (
    <Field
      name={name}
      component={RenderMuiTextField}
      textFieldProps={textFieldProps}
      {...otherProps}
    />
  );
}

RenderMuiTextField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  textFieldProps: PropTypes.object,
  showMessage: PropTypes.bool,
};

FormikTextField.propTypes = {
  name: PropTypes.string,
  textFieldProps: PropTypes.object,
};

export default FormikTextField;
