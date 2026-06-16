import { render, screen } from '@testing-library/react';
import Typography from '@mui/material/Typography';
import Code from './code';

describe('Code', () => {
  it('renders a code element with children', () => {
    render(<Code>npm install</Code>);
    const code = screen.getByText('npm install');
    expect(code.tagName).toBe('CODE');
  });

  it('can be used inline within text', () => {
    render(
      <Typography>
        Run <Code>pnpm build</Code> to compile.
      </Typography>
    );
    expect(screen.getByText('pnpm build').tagName).toBe('CODE');
    expect(screen.getByText(/Run/)).toBeInTheDocument();
  });
});
