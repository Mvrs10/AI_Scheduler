import React from "react";
import home from "./Home.module.css";
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
    </main>
  );
};

export default Home;
