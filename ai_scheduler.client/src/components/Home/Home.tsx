import React from 'react';
import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton
} from '@mui/material';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import styles from "./Home.module.css";
import { appModules } from "../../constants/appConstants";

type PropsType = {
  isAdmin: boolean;
}

const Home: React.FC<PropsType> = ({isAdmin}) => {
  return (
    <main className={`${styles.main} main-container`}>
        <div className="module-title">
            Home
        </div>
      <div className={styles["main-content"]}>
        {appModules.map((module, index) => {
          const locked = module.requireAdmin && !isAdmin;
          //const unlocked = !module.requireAdmin || isAdmin;
          return locked? null : (
          <Card key={index} component={locked? "div":Link} to={locked? undefined:module.path} className={styles.card} elevation={3} sx={{cursor:locked?"not-allowed":"pointer", filter:locked?"grayscale(20%) brightness(70%)":"none"}}
            {...(module.path.includes("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
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
              action={<IconButton aria-label="unlocked-module">{locked? <LockOutlineIcon sx={{color: "#CE3A3E"}} />:<LockOpenIcon />}</IconButton>}
              title={<Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>{module.title}</Typography>}
            />
            <CardMedia 
              sx={{ height: "13rem", objectFit: module.objectFit }}
              component="img"
              image={module.image}
              title={module.title}
            />
          </Card>
        );
        })}
      </div>

    </main>
  );
};

export default Home;
