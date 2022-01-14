import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import FormikTextField from "components/formik/TextField";
import FormikToggle from "components/formik/Toggle";
import { THEME_COLORS, BASIC_EDIT_LAYOUT_TYPES } from "utils/constants";

function AssetCreateInput({ step }) {
  const { basic = [], label, subLabel } = step || {};
  return (
    <>
      <Box pt={4}>
        <Typography variant="h4">{label}</Typography>
      </Box>
      <Box pt={2} mb={3} color={THEME_COLORS.SECONDARY}>
        <Typography variant="subtitle1">{subLabel}</Typography>
      </Box>
      {basic.map((info) => {
        const { type, dataKey, typeProps, label } = info || {};
        if (type === BASIC_EDIT_LAYOUT_TYPES.TOGGLE) {
          return (
            <Box width={1} pb={2} key={dataKey}>
              <FormikToggle name={dataKey} typeProps={typeProps} />
            </Box>
          );
        }
        return (
          <Box width={1} pb={2} key={dataKey}>
            <Box pb={1} color={THEME_COLORS.BLACK}>
              <Typography variant="caption">{label}</Typography>
            </Box>
            <FormikTextField name={dataKey} textFieldProps={typeProps} />
          </Box>
        );
      })}
    </>
  );
}

AssetCreateInput.propTypes = {
  step: PropTypes.object,
};

export default AssetCreateInput;
