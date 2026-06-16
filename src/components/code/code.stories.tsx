import { type Meta, type StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Code from './code';
import type { CodeProps } from './code.types';

const meta: Meta<CodeProps> = {
  title: 'Data display/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Inline code for commands, paths, and identifiers. Renders a semantic `<code>` element with theme-aware monospace styling.',
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
      description: 'Inline code content.',
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
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InlineInText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use inside body copy for short snippets like package names or flags.',
      },
    },
  },
  render: (args) => (
    <Typography variant="body1">
      Install dependencies with <Code {...args} /> then run <Code>pnpm build</Code>.
    </Typography>
  ),
};

export const MultipleSnippets: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Several inline snippets in a single paragraph.',
      },
    },
  },
  render: () => (
    <Typography variant="body2">
      Set <Code>NODE_ENV=production</Code> and restart the <Code>api-server</Code> service.
    </Typography>
  ),
};
