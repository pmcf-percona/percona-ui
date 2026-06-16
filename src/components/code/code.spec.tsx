import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeContextProvider, baseThemeOptions } from '../../design';
import Code from './code';

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeContextProvider themeOptions={baseThemeOptions}>{ui}</ThemeContextProvider>);

describe('Code', () => {
  it('renders a semantic code element with content', () => {
    renderWithTheme(<Code data-testid="inline-code">pnpm install</Code>);

    const code = screen.getByTestId('inline-code');
    expect(code.tagName).toBe('CODE');
    expect(code).toHaveTextContent('pnpm install');
  });
});
