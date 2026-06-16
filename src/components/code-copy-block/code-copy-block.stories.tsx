import { type Meta, type StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/addon-docs/blocks';
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
          'Alert-style copyable command block. For inline or block code in docs and forms, prefer `Code` and `CodeBlock` in Data display.',
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
