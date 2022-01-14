import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

import { THEME_COLORS } from "utils/constants";

const useStyles = makeStyles((theme) => ({
  errorIcon: {
    paddingRight: theme.spacing(1),
  },
}));

function AssetError({ message, boxProps = {} }) {
  const styles = useStyles();
  return (
    <Box
      alignItems="center"
      bgcolor={`${THEME_COLORS.DANGER}30`}
      border={`1px solid ${THEME_COLORS.DANGER}`}
      borderRadius={4}
      display="flex"
      padding={0.4}
      {...boxProps}
    >
      <ErrorIcon color="error" className={styles.errorIcon} />
      <Typography variant="caption" color="error">
        {message}
      </Typography>
    </Box>
  );
}

AssetError.propTypes = {
  message: PropTypes.string,
  boxProps: PropTypes.object,
  stickyBoxProps: PropTypes.object,
};

export default AssetError;
