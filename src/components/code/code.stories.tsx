import { type Meta, type StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as DocBlock from '@storybook/addon-docs/blocks';
import Code from './code';
import type { CodeProps } from './code.types';

const meta: Meta<typeof Code> = {
  title: 'Data display/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Inline code for commands, paths, and short snippets. Renders a semantic `<code>` element with theme-aware monospace styling.',
      },
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Subtitle />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
  },
  args: {
    children: 'pnpm install',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The inline code content.',
      table: { category: 'Content' },
    },
    sx: {
      control: false,
      description: 'MUI System prop for style overrides.',
      table: { category: 'Advanced' },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, maxWidth: 480 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<CodeProps>;

export const Playground: Story = {};

export const InSentence: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use inline inside body copy to highlight a command, path, or identifier.',
      },
    },
  },
  render: (args) => (
    <Typography variant="body1">
      Run <Code {...args}>pnpm storybook:dev</Code> to start Storybook locally.
    </Typography>
  ),
};

export const MultipleInline: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Several inline snippets in one paragraph.',
      },
    },
  },
  render: () => (
    <Typography variant="body2">
      Set <Code>NODE_ENV</Code> to <Code>production</Code> before running <Code>pnpm build</Code>.
    </Typography>
  ),
};
