import type { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { baseThemeOptions } from '../../design';
import Code from './code';
import CodeBlock from './code-block';

const theme = createTheme(baseThemeOptions('light'));

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Code', () => {
  it('renders a semantic code element', () => {
    const { container } = renderWithTheme(<Code>npm install</Code>);
    const code = container.querySelector('code');

    expect(code).toBeInTheDocument();
    expect(code).toHaveTextContent('npm install');
    expect(container.querySelector('pre')).not.toBeInTheDocument();
  });
});

describe('CodeBlock', () => {
  it('renders semantic pre and code elements', () => {
    const { container } = renderWithTheme(<CodeBlock>line one{'\n'}line two</CodeBlock>);
    const pre = container.querySelector('pre');
    const code = container.querySelector('pre > code');

    expect(pre).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(code).toHaveTextContent('line one');
    expect(code?.textContent).toContain('line two');
  });

  it('does not render copy button by default', () => {
    renderWithTheme(<CodeBlock>secret command</CodeBlock>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders copy button when copyable', () => {
    renderWithTheme(<CodeBlock copyable>secret command</CodeBlock>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('copies block content when copy button is clicked', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    renderWithTheme(<CodeBlock copyable>copy me</CodeBlock>);
    fireEvent.click(screen.getByRole('button'));

    expect(writeText).toHaveBeenCalledWith('copy me');
  });
});
