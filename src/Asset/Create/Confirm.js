import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import makeStyles from "@material-ui/styles/makeStyles";

import { THEME_COLORS } from "utils/constants";

const useStyles = makeStyles(() => ({
  Avatar: {
    width: 60,
    height: 60,
    color: THEME_COLORS.WHITE,
    backgroundColor: THEME_COLORS.PRIMARY,
  },
}));
function AssetCreateConfirm({ step }) {
  const styles = useStyles();
  const { label, subLabel } = step || {};
  return (
    <>
      <Box pt={4}>
        <Avatar className={styles.Avatar} s>
          <CheckIcon />
        </Avatar>
      </Box>

      <Box pt={4}>
        <Typography variant="h4">{label}</Typography>
      </Box>
      <Box pt={2} mb={3} color={THEME_COLORS.SECONDARY}>
        <Typography variant="subtitle1">{subLabel}</Typography>
      </Box>
    </>
  );
}

AssetCreateConfirm.propTypes = {
  step: PropTypes.object,
};

export default AssetCreateConfirm;
