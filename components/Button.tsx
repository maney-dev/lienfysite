import React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material";

interface Props extends Omit<ButtonProps, "color"> {
  color: string;
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export const Button = ({
  color,
  variant,
  children,
  sx,
  onClick,
  ...props
}: Props) => {
  return (
    <MuiButton
      {...props}
      onClick={onClick}
      variant={variant}
      sx={{
        background: variant !== "outlined" ? color : null,
        color: variant === "outlined" ? color : "auto",
        border: variant === "outlined" ? `1px solid ${color}` : null,
        width: "20rem",
        padding: "1rem 2rem",
        borderRadius: 2,
        fontWeight: "0.5rem",
        letterSpacing: "1px",

        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
