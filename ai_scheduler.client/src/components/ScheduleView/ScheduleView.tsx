import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { appModules } from '../../constants/appConstants';
import weeklyImg from '../../images/WeeklySample.png';
// You can later import a daily image too if you have one
// import dailyImg from '../../images/DailySample.png';

const ScheduleView: React.FC = () => {
  const [view, setView] = useState<'weekly' | 'daily'>('weekly');

  return (
    <main className="main-container">
      <div className="module-title">{appModules[1].title}</div>

      {/* Buttons */}
      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 3, marginLeft: "2rem" }}>
        <Button
          variant={view === 'weekly' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setView('weekly')}
        >
          Weekly
        </Button>

        <Button
          variant={view === 'daily' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setView('daily')}
        >
          Daily
        </Button>
      </Stack>

      {/* Conditional content */}
      <div style={{ textAlign: 'center' }}>
        {view === 'weekly' ? (
          <img
            src={weeklyImg}
            alt="Weekly schedule"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          />
        ) : (
          <div style={{ fontSize: '1.2rem', color: '#666' }}>
            Daily view coming soon...
            {/* You can replace this with <img src={dailyImg} ... /> later */}
          </div>
        )}
      </div>
    </main>
  );
};

export default ScheduleView;
