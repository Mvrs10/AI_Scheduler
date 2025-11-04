import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

import home from "./Home.module.css";

const cards = [
  { title: "ABC Home" },
  { title: "View Schedules" },
  { title: "Generate Schedules" },
  { title: "Plant Status" },
  { title: "Configuration" },
  { title: "Logs" },
  { title: "My Profile" },
  { title: "Help" },
];

const Home: React.FC = () => {
  return (
    <main className={home.main}>
        <div className={home["main-title"]}>
            HOME
        </div>
        <div className={home["main-content"]}>
      {cards.map((card, index) => (
        <Card key={index} className={home.card} elevation={3}>
          <CardHeader
            avatar={<Avatar className={home.avatar}>A</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.title}
          />
          <CardContent className={home.content}>
            <ChangeHistoryIcon className={home.icon} />
            <SettingsIcon className={home.icon} />
          </CardContent>
        </Card>
      ))}
        </div>

    </main>
  );
};

export default Home;
