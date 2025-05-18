// ScrollableCardsContainer.tsx
import React from 'react';
import Box from '@mui/material/Box';

interface ScrollableCardsContainerProps {
  children: React.ReactNode;
}

const ScrollableCardsContainer: React.FC<ScrollableCardsContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2, // This gap property adds consistent spacing between items.
        justifyContent: 'center',
        padding: 2,
        backgroundColor: '#f5f5f5',
        // Optional: Use a fixed height with scroll if desired.
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '2px solid black',   // A solid black border to visually separate the container
        borderRadius: '8px',           // Rounded corners for a nicer feel     
        width: '90%',                  // 90% width of the viewport (adjust as needed)
        maxWidth: '1300px',            // Maximum width of the container
        height: '80vh',                // Fixed height so that overflow can trigger a scrollbar
        margin: '20px auto',
        marginLeft: 'auto', // Pushes the entire container to the right
        marginRight: 5,     // Ensures it stays flush with the right edge
        // Center the container horizontally with some vertical margin
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollableCardsContainer;

