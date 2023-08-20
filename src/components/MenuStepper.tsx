import { Autocomplete, Grow, Paper, TextField, Tooltip } from "@mui/material";
import { forwardRef, useState } from "react";
import { useStore } from "../store/LocatonStore";
import { InfoLocations } from "../utils/InfoLocations";
import RefreshIcon from "@mui/icons-material/Refresh";
console.warn = () => {}; // MUI Stinky warnings

function PaperComponent(paperProps: any, ref: any) {
  return (
    <Grow in>
      <Paper elevation={4} className="bl" {...paperProps} ref={ref} />
    </Grow>
  );
}

export default function TextMobileStepper() {
  const updateLocation = useStore((state) => state.updateLocation);
  const [showTool, setShowTool] = useState(false);
  const [buildingSearch, setBuildingSearch] = useState("");

  const changeLoc = (loc: string | null) => {
    let fallBack = loc;
    if (fallBack === "" || fallBack === null) fallBack = "RESET";
    setShowTool(fallBack !== "RESET");
    setBuildingSearch(loc === "RESET" ? "" : fallBack);
    updateLocation(fallBack);
  };

  const PaperComponentForward = forwardRef(PaperComponent);
  const buildingOptions = Object.keys(InfoLocations).filter(
    (name) => name !== "RESET"
  );

  return (
    <div className="row items-center ">
      <Autocomplete
        disableClearable
        PaperComponent={PaperComponentForward}
        onChange={(_, v) => changeLoc(v)}
        options={buildingOptions}
        value={buildingSearch}
        onInputChange={(_, newBuilding) => {
          setBuildingSearch(newBuilding);
        }}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            style={{ background: "white" }}
            {...params}
            label="Building"
            size="small"
          />
        )}
      />
      {showTool && (
        <Tooltip title="Reset View">
          <RefreshIcon
            onClick={() => changeLoc("RESET")}
            className="refresh-icon padding-side-sm"
            fontSize="large"
            htmlColor="#003594"
          />
        </Tooltip>
      )}
    </div>
  );
}
