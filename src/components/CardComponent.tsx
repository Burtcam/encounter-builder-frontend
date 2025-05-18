// MonsterInfoCard.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MonsterSheet } from '../../types/monsterSheetTypes'; // Adjust the path accordingly
import Chip from '@mui/material/Chip';
import Draggable from 'react-draggable';

interface MonsterInfoCardProps {
  monster: MonsterSheet;
}

const MonsterInfoCard: React.FC<MonsterInfoCardProps> = ({ monster }) => {
  return (
    <Draggable>
      <Card
        variant="outlined"
      sx={{
        display: 'flex',
        position: 'relative',
        border: '2px solid #b71c1c',
        backgroundColor: '#ffebee',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        // Set the card to take up roughly 20% of the container width minus some space for margins.
        flex: '0 0 calc(20% - 16px)',
        margin: 1, // Adjust the margin as needed to control gaps between cards.
      }}
      >
        {/* Level badge in the top right corner */}
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: '#b71c1c',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: 1,
            fontWeight: 'bold',
            fontSize: 12,
            zIndex: 1,
          }}
        >
          {monster.level}
        </Box>
        <Box
  sx={{
    position: 'absolute',
    top: 8,
    left: 8, // positions this chip at the top left
    backgroundColor: '#1976d2', // you can change this color as desired
    color: '#fff',
    padding: '4px 8px',
    borderRadius: 1,
    fontWeight: 'bold',
    fontSize: 12,
    zIndex: 1,
  }}
>
  {monster.size}
</Box>

        {/* Main content area */}
        <Box sx={{ flexGrow: 1, padding: 2, paddingRight: '140px', paddingTop: '40px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            {monster.name}
          </Typography>


              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 2, // margin bottom to separate from other card content
                }}
              >
                {monster.traits.map((trait, index) => (
                  <Chip key={index} label={trait} variant="outlined" size="small" />
                ))}
              </Box>
      <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start', // Forces child elements (i.e. the ul) to start at the left edge
        boxSizing: 'border-box',
      }}
    >
      <Box
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'row',       // Allows items to wrap into multiple lines if needed
          listStyle: 'none',
          gap: 1,                 // Optional: adds space between items
          padding: '16px',        // Space inside the border // Black border around the box
          margin: 0,
          textAlign: 'left',
          width: '100%',
        }}
      >
        <Box component="li" sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
          STR: {monster.attributes.str}
        </Box>
        <Box component="li" sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
          DEX: {monster.attributes.dex}
        </Box>
        <Box component="li" sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
          CON: {monster.attributes.con}
        </Box>
        </Box>
        </Box>
        <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start', // Forces child elements (i.e. the ul) to start at the left edge
        boxSizing: 'border-box',
      }}
    >
      <Box
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'row',       // Allows items to wrap into multiple lines if needed
          listStyle: 'none',
          gap: 1,                 // Optional: adds space between items
          padding: '16px',        // Space inside the border // Black border around the box
          margin: 0,
          textAlign: 'left',
          width: '100%',
        }}
      >


        <Box component="li" sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
          WIS: {monster.attributes.wis}
        </Box>
        <Box component="li" sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
          INT: {monster.attributes.int}
        </Box>
        <Box component="li" sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
          CHA: {monster.attributes.cha}
        </Box>
      </Box>
    </Box>
          {/* Defenses */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Defenses:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, m: 0 }}>
            <li>AC: {monster.defenses.ac}</li>
            <li>Fort: {monster.saves.fort}</li>
            <li>Ref: {monster.saves.ref}</li>
            <li>Will: {monster.saves.will}</li>
            <li>HP: {monster.defenses.hp}</li>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute', // absolute positioning relative to Card
            bottom: 0,
            right: 0,
            width: 120,
            height: 120,
            borderTopLeftRadius: 6,
            overflow: 'hidden',
          }}
        >
          <img
            src={monster.image_link}
            alt={`${monster.name} image`}
            style={{
              width: '100%',      // image fills the container's width
              height: 'auto',     // height adjusts automatically to maintain aspect ratio
              objectFit: 'contain', // use 'cover' to fill the container, or 'contain' if you prefer the entire image to be visible
              display: 'block'
            }}
          />
        </Box>
      </Card>
    </Draggable>
  );
};

export default MonsterInfoCard;
