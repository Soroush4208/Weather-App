import { Button } from "@mui/material";
import React from "react";

interface PanelProps {
  position: "left" | "right";
  title: string;
  description: string;
  buttonText: string;
  image: string;
  onClick: () => void;
  classNamePanel: string;
}

const Panel: React.FC<PanelProps> = ({
  position,
  title,
  description,
  buttonText,
  image,
  onClick,
  classNamePanel,
}) => {
  return (
    <div className={`panel ${position} ${classNamePanel}`}>
      <div className="text-white font-bold text-3xl font-kalam flex flex-col gap-5">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:0.5,
            borderRadius: 7,
            py: 2,
          }}
          onClick={onClick}
          variant="contained"
        >
          {buttonText}
        </Button>
      </div>
      <img src={image} className="absolute top-96" alt="" />
    </div>
  );
};

export default Panel;
