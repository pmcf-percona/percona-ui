import { fireEvent, render, screen } from '@testing-library/react';
import CodeBlock from './code-block';

describe('CodeBlock', () => {
  const sample = 'helm install percona-db --namespace demo';

  it('renders pre and code elements', () => {
    const { container } = render(<CodeBlock>{sample}</CodeBlock>);
    const pre = container.querySelector('pre');
    const code = container.querySelector('code');

    expect(pre).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(code?.textContent).toBe(sample);
  });

  it('does not render a copy button by default', () => {
    render(<CodeBlock>{sample}</CodeBlock>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('copies block content when copyable', () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText },
    });

    render(<CodeBlock copyable>{sample}</CodeBlock>);
    fireEvent.click(screen.getByRole('button'));

    expect(writeText).toHaveBeenCalledWith(sample);
  });
});
