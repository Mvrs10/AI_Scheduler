import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { appModules } from '../../constants/appConstants';
import prodImg from '../../images/ProductionReport.png';

const PlantReport: React.FC = () => {
  const [view, setView] = useState<"Production" | "Staff">("Production");

  return (
    <main className="main-container">
      <div className="module-title">{appModules[3].title}</div>

      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 3, marginLeft: "2rem" }}>
        <Button
          variant={view === "Production" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setView("Production")}
        >
          Production
        </Button>

        <Button
          variant={view === "Staff" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setView("Staff")}
        >
          Staff
        </Button>
      </Stack>

      <div style={{ textAlign: "center" }}>
        {view === "Production" ? (
          <img
            src={prodImg}
            alt="Production Report"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", paddingBottom: "20px" }}
          />
        ) : (
          <div style={{ fontSize: "1.2rem", color: "#666" }}>
            Staff report is currently unavailable...
            {/* TODO */}
          </div>
        )}
      </div>
    </main>
  );
};

export default PlantReport;
