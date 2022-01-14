import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import * as globalConstants from "utils/constants";

const { THEME_COLORS } = globalConstants;
const useStyles = makeStyles((theme) => ({
  toggleButton: {
    cursor: "pointer",
  },
  toggleButtonSelected: {
    border: `1px solid ${THEME_COLORS.PRIMARY} !important`,
    pointerEvents: "none",
    cursor: "default",
  },
  icon: {
    color: THEME_COLORS.PRIMARY,
  },
}));

function Toggle({ field, typeProps, form }) {
  const styles = useStyles(typeProps);
  const { value: fieldValue, name: fieldName } = field || {};
  const { options = [], boxProps = {} } = typeProps || {};
  console.log(`field`, field);
  function setData(optionValue) {
    form.setFieldValue(fieldName, optionValue);
  }

  return (
    <Box pt={1} {...boxProps}>
      <Box display="flex" alignItems="center" pt={1}>
        {options.map(({ label, value: optionValue, subLabel, icon }, index) => (
          <Box
            p={2}
            borderRadius={12}
            border={`1px solid ${THEME_COLORS.GREY}`}
            className={clsx({
              [styles.toggleButton]: true,
              [styles.toggleButtonSelected]: optionValue === fieldValue,
            })}
            key={optionValue}
            onClick={() => setData(optionValue)}
            {...(index !== options.length - 1 && { mr: 2 })}
          >
            {console.log(`optionValue === fieldValue`, optionValue, fieldValue)}
            <Box
              className={clsx({
                [styles.icon]: optionValue === fieldValue,
              })}
            >
              {icon}
            </Box>
            <Box pt={1}>
              <Typography variant="h6">{label}</Typography>
            </Box>
            <Box pt={2}>
              <Typography variant="subtitle2">{subLabel}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function FormikToggle({ name, ...otherProps }) {
  return <Field name={name} component={Toggle} {...otherProps} />;
}

Toggle.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  typeProps: PropTypes.object,
};

FormikToggle.propTypes = {
  name: PropTypes.string,
};

export default FormikToggle;
