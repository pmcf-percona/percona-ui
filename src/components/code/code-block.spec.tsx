import type { ReactElement } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeContextProvider, baseThemeOptions, pmmThemeOptions } from '../../design';
import Code from './code';
import CodeBlock from './code-block';

const renderWithTheme = (ui: ReactElement, themeOptions = baseThemeOptions) =>
  render(<ThemeContextProvider themeOptions={themeOptions}>{ui}</ThemeContextProvider>);

const SAMPLE = 'kubectl get pods\nkubectl logs -f pmm-server-0';

describe('CodeBlock', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('renders semantic pre and code elements', () => {
    renderWithTheme(<CodeBlock data-testid="code-block">{SAMPLE}</CodeBlock>);

    const wrapper = screen.getByTestId('code-block');
    const pre = wrapper.querySelector('pre');
    const code = wrapper.querySelector('code');

    expect(pre).toBeTruthy();
    expect(code).toBeTruthy();
    expect(code?.textContent).toBe(SAMPLE);
  });

  it('does not render copy button when copyable is false', () => {
    renderWithTheme(<CodeBlock>{SAMPLE}</CodeBlock>);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('copies block text when copyable and button is clicked', async () => {
    renderWithTheme(
      <CodeBlock copyable data-testid="copyable-block">
        {SAMPLE}
      </CodeBlock>
    );

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(SAMPLE);
    });
  });

  it('renders with PMM theme without errors', () => {
    renderWithTheme(
      <>
        <Code>pnpm install</Code>
        <CodeBlock copyable>{SAMPLE}</CodeBlock>
      </>,
      pmmThemeOptions
    );

    expect(screen.getByText('pnpm install').tagName).toBe('CODE');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
