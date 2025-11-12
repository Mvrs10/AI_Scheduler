import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import styles from "./Home.module.css";
import { appModules } from "../../constants/appConstants.ts";
import usePermission from "../../hooks/usePermission.tsx"

const Home = () => {
  const { isAdmin } = usePermission();
  
  return (
    <main className={`${styles.main} main-container`}>
        <div className="module-title">
            Home
        </div>
      <div className={styles["main-content"]}>
        {appModules.map((module, index) => {
          const locked = module.requireAdmin && !isAdmin;

          return locked? null : (
          <Card key={index} component={Link} to={module.path} className={styles.card} elevation={3}
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
        );
        })}
      </div>

    </main>
  );
};

export default Home;
