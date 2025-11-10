import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton
} from "@mui/material";
//import LockOutlineIcon from '@mui/icons-material/LockOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import styles from "./Home.module.css";
import { appModules } from "../../constants/appConstants";


const Home: React.FC = () => {
  return (
    <main className={styles.main}>
        <div className={styles["main-title"]}>
            HOME
        </div>
      <div className={styles["main-content"]}>
        {appModules.map((module, index) => (
          <Card key={index} className={styles.card} elevation={3}>
            <CardHeader
              sx={{
                backgroundColor: "#E8EBEF",
                height: "3rem",
                "& .MuiCardHeader-content": {
                  marginLeft: "0.25rem",
                },
                "& .MuiCardHeader-action": {
                  alignSelf: "center",
                },
              }}
              action={<IconButton aria-label="unlocked-module"><LockOpenIcon /></IconButton>}
              title={<Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>{module.title}</Typography>}
            />
            <CardMedia 
              sx={{ height: "13rem", objectFit: module.objectFit }}
              component="img"
              image={module.image}
              title={module.title}
            />
          </Card>
        ))}
      </div>

    </main>
  );
};

export default Home;
