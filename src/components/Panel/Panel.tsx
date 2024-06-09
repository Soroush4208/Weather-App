import { Button } from "@mui/material";
import React from "react";

interface PanelProps {
  position: "left" | "right";
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  classNamePanel: string;
  positionText: string;
}

const Panel: React.FC<PanelProps> = ({
  position,
  title,
  description,
  buttonText,
  onClick,
  classNamePanel,
  positionText,
}) => {
  return (
    <div className={`panel z-10 ${position} ${classNamePanel}`}>
      <div
        className={`flex flex-col absolute ${positionText} text-white font-bold text-3xl font-kalam`}
      >
        <h3 className="text-center mb-5 text-6xl">{title}</h3>
        <p className="text-nowrap">{description}</p>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 1,
            borderRadius: 7,
            py: 2,
            px: 10,
            textWrap: "nowrap",
            backgroundColor: "white",
            color: "black",
            fontSize: 30,
            my: 5,
            ":hover":{backgroundColor:"gray",color:"white"}
          }}
          onClick={onClick}
          variant="contained"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Panel;
