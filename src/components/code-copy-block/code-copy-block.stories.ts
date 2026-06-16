import { type Meta, type StoryObj } from '@storybook/react';
import CodeCopyBlock from './code-copy-block';
import { CodeCopyBlockProps } from './code-copy-block.types';

const meta = {
  title: 'Inputs/Buttons/Copy Code',
  component: CodeCopyBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Legacy alert-style code snippet with a built-in copy action. Prefer `Code Block` with `copyable` for new work.',
      },
    },
  },
} satisfies Meta<CodeCopyBlockProps>;

export default meta;
type Story = StoryObj<CodeCopyBlockProps>;

export const WithCopyButtonCommand: Story = {
  args: {
    message: 'helm install percona/percona-db-namespace --create-namespace --namespace <NAMESPACE>',
    showCopyButtonText: true,
  },
};
export const WithoutCopyButtonCommand: Story = {
  args: {
    message: 'helm install percona/percona-db-namespace --create-namespace --namespace <NAMESPACE>',
    showCopyButtonText: false,
  },
};
