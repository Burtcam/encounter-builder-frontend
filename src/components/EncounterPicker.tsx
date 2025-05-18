import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const EncounterSettings: React.FC = () => {
  const [partySize, setPartySize] = useState(4);
  const [level, setLevel] = useState(1);
  const [difficulty, setDifficulty] = useState("Moderate");

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
        border: '2px solid black',
        borderRadius: 4,
        width: 300,
        backgroundColor: '#fff',
      }}
    >
      {/* Party Size Dropdown */}
      <FormControl fullWidth>
        <InputLabel id="party-size-label">Party Size</InputLabel>
        <Select
          labelId="party-size-label"
          value={partySize}
          onChange={(e) => setPartySize(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Level Dropdown */}
      <FormControl fullWidth>
        <InputLabel id="level-label">Level</InputLabel>
        <Select
          labelId="level-label"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((lvl) => (
            <MenuItem key={lvl} value={lvl}>
              {lvl}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Difficulty Dropdown */}
      <FormControl fullWidth>
        <InputLabel id="difficulty-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {["Trivial", "Low", "Moderate", "Severe", "Extreme"].map((diff) => (
            <MenuItem key={diff} value={diff}>
              {diff}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EncounterSettings;

