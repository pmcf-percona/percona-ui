import { FieldValues } from 'react-hook-form';
import { radii } from '../../../../design';
import { ToggleButtonGroupInputProps } from '../toggle-button-group';
import ToggleButtonGroupInput from '../toggle-button-group/toggle-button-group';

const ToggleButtonGroupInputRegular = <T extends FieldValues = FieldValues>({
  children,
  name,
  toggleButtonGroupProps,
  ...props
}: ToggleButtonGroupInputProps<T>) => {
  return (
    <ToggleButtonGroupInput
      name={name}
      toggleButtonGroupProps={{
        sx: {
          width: 'fit-content',
          '.MuiToggleButtonGroup-middleButton, .MuiToggleButtonGroup-lastButton': {
            ml: 0,
            borderLeft: 0,
          },

          '.MuiButtonBase-root:not(:first-child, :last-child)': {
            borderRadius: `${radii.none}px`,
          },

          '.MuiButtonBase-root: first-child': {
            borderTopLeftRadius: `${radii.full}px`,
            borderBottomLeftRadius: `${radii.full}px`,
            borderTopRightRadius: `${radii.none}px`,
            borderBottomRightRadius: `${radii.none}px`,
          },
          '.MuiButtonBase-root: last-child': {
            borderTopLeftRadius: `${radii.none}px`,
            borderBottomLeftRadius: `${radii.none}px`,
            borderTopRightRadius: `${radii.full}px`,
            borderBottomRightRadius: `${radii.full}px`,
          },
        },
        ...toggleButtonGroupProps,
      }}
      {...props}
    >
      {children}
    </ToggleButtonGroupInput>
  );
};

export default ToggleButtonGroupInputRegular;
