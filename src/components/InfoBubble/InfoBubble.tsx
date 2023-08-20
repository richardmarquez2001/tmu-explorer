import { useState } from "react";
import Grid from "@mui/material/Grid";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function InfoBubble({
  infoLocations,
  location,
}: {
  infoLocations: any;
  location: string;
}) {
  const [currentView, setCurrentView] = useState<"about" | "available">(
    "about"
  );

  const renderView = () => {
    switch (currentView) {
      case "about":
        return (
          <div className="info-bubble__text">
            {infoLocations[location].data?.about}
          </div>
        );

      case "available":
        return (
          <>
            {["primary", "secondary", "tertiary"].map(
              (level) =>
                infoLocations[location].data?.available[level] && (
                  <div className="info-bubble__available" key={level}>
                    {infoLocations[location].data?.available[level]}
                  </div>
                )
            )}
            <div className="info-bubble__caption">
              {infoLocations[location].data?.access}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const disableAbout = !infoLocations[location]?.data?.about;
  const disableAccess = !infoLocations[location]?.data?.access;

  return (
    <div
      className={`info-bubble-${infoLocations[location].header.placement}`}
      style={{ maxWidth: "20.5rem" }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <IconButton
            disabled={disableAbout}
            color="inherit"
            onClick={() => setCurrentView("about")}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            disabled={disableAccess}
            color="inherit"
            onClick={() => setCurrentView("available")}
          >
            <AccessTimeIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <p className="info-bubble__caption">
            {infoLocations[location].data?.address}
          </p>
        </Grid>
      </Grid>

      <h1 className="info-bubble__title">
        {infoLocations[location].data?.name}
      </h1>

      {renderView()}
    </div>
  );
}
