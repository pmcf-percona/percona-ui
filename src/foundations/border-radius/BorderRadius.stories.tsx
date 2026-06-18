import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, Typography } from '@mui/material';
import { radii } from '../../design/themes/base';

const meta = {
  title: 'Foundations/Border Radius',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontFamily: '"Roboto Mono", monospace',
  opacity: 0.5,
  marginTop: '0.5rem',
};

const entries = Object.entries(radii) as [keyof typeof radii, number][];

/* ── Scale ────────────────────────────────────────── */

export const ScaleShowcase: Story = {
  tags: ['!dev'],
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
      {entries.map(([name, value]) => (
        <Box key={name} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: `${value}px`,
              backgroundColor: 'action.selected',
              border: 1,
              borderColor: 'divider',
            }}
          />
          <span style={labelStyle}>radii.{name}</span>
          <Typography variant="caption" color="text.secondary">
            {value}px
          </Typography>
        </Box>
      ))}
    </Box>
  ),
};

/* ── Usage ────────────────────────────────────────── */

export const UsageShowcase: Story = {
  tags: ['!dev'],
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 4 }}>
      <Box>
        <Box
          sx={(theme) => ({
            width: 220,
            padding: 2,
            borderRadius: `${theme.shape.radii.md}px`,
            border: 1,
            borderColor: 'divider',
            backgroundColor: 'background.paper',
          })}
        >
          <Typography variant="sectionHeading">Card surface</Typography>
          <Typography variant="body2" color="text.secondary">
            Uses radii.md (8px) for the container corners.
          </Typography>
        </Box>
        <span style={labelStyle}>theme.shape.radii.md</span>
      </Box>

      <Box>
        <Button variant="contained">Pill button</Button>
        <span style={labelStyle}>radii.full</span>
      </Box>

      <Box>
        <Box
          sx={(theme) => ({
            width: 220,
            padding: '8px 12px',
            borderRadius: `${theme.shape.borderRadius}px`,
            border: 1,
            borderColor: 'divider',
            ...theme.typography.inputText,
            color: 'text.secondary',
          })}
        >
          Input default
        </Box>
        <span style={labelStyle}>theme.shape.borderRadius (radii.sm)</span>
      </Box>
    </Box>
  ),
};
