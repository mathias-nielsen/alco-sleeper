import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Circle from "@/components/atoms/Circle";

export default function CircularProgressWithLabel(
  props: CircularProgressProps
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        size={84}
        variant="determinate"
        thickness={2}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          fontSize: 22,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Circle>
          <p>
            {props.value && props.value != 0
              ? `${Math.round(props.value)}%`
              : "N/A"}
          </p>
        </Circle>
      </Box>
    </Box>
  );
}
