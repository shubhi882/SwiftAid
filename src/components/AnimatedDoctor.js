import React from 'react';
import { Box, Typography } from '@mui/material';

const AnimatedDoctor = ({ isTyping }) => {
  return (
    <Box
      sx={{
        width: '80px',
        height: '80px',
        position: 'fixed',
        bottom: '120px',
        right: '30px',
        zIndex: 1000,
        backgroundColor: '#e8f5fe',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: -2,
          borderRadius: 'inherit',
          background: 'linear-gradient(45deg, #00f2fe, #4facfe)',
          opacity: 0.3,
          animation: 'pulse 2s infinite',
        },
        animation: isTyping ? 'hover 1s infinite' : 'idle 3s infinite ease-in-out',
        '@keyframes hover': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-5px) scale(1.02)',
          }
        },
        '@keyframes idle': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-3px)',
          }
        },
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 0.3,
          },
          '50%': {
            opacity: 0.5,
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '8px',
          background: 'radial-gradient(rgba(0,242,254,0.3), transparent)',
          borderRadius: '50%',
          animation: 'shadow 1s infinite',
        },
        '@keyframes shadow': {
          '0%, 100%': {
            transform: 'translateX(-50%) scale(1)',
            opacity: 0.3,
          },
          '50%': {
            transform: 'translateX(-50%) scale(0.85)',
            opacity: 0.2,
          }
        }
      }}
    >
      <Typography
        sx={{
          fontSize: '50px',
          lineHeight: 1,
          userSelect: 'none',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          animation: isTyping ? 'blink 0.5s infinite' : 'none',
          '@keyframes blink': {
            '0%, 100%': {
              opacity: 1,
              transform: 'scale(1)',
            },
            '50%': {
              opacity: 0.8,
              transform: 'scale(0.95)',
            }
          }
        }}
      >
        🤖
      </Typography>
    </Box>
  );
};

export default AnimatedDoctor;
