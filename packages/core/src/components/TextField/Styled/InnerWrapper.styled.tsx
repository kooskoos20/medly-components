import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { InnerWrapperProps } from '../types';
import { HelperText } from './HelperText.styled';
import { Label } from './Label.styled';
import { Prefix } from './Prefix.styled';
import { Suffix } from './Suffix.styled';

const outlineStyle = ({ theme, outlined, disabled, isErrorPresent }: InnerWrapperProps) => {
    return css`
        border-radius: ${theme.spacing.S1};
        background-color: ${outlined.default.bgColor};
        &::after {
            content: '';
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            pointer-events: none;
            background-color: transparent;
            transition: all 100ms ease-out;
            border-radius: ${theme.spacing.S1};
            border: 0.1rem solid ${outlined.default.borderColor};
        }
        &:hover {
            box-shadow: ${!disabled && `0px 0.2rem 0.8rem ${rgba(outlined.hover.shadowColor, 0.2)}`};
        }
        &:focus-within {
            box-shadow: ${!disabled && `0px 0.2rem 0.8rem ${rgba(outlined[isErrorPresent ? 'error' : 'active'].shadowColor, 0.2)}`};
        }

        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.15rem`};
            border-color: ${!disabled && outlined.hover.borderColor};
        }
    `;
};

const roundedStyle = ({ rounded, disabled, inputContainsText }: InnerWrapperProps) => {
    return css`
        border-radius: 1.2rem;
        background-color: ${inputContainsText ? 'transparent' : rounded.default.bgColor};
        &::after {
            content: '';
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            pointer-events: none;
            background-color: transparent;
            transition: all 100ms ease-out;
            border-radius: 1.2rem;
            border: 0.1rem solid ${rounded.default.borderColor};
        }

        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.15rem`};
            border-color: ${!disabled && rounded.hover.borderColor};
        }
    `;
};

const roundedErrorStyle = ({ theme: { textField }, inputContainsText }: InnerWrapperProps) => css`
    &,
    &:hover {
        color: ${textField.rounded.error.defaultTextColor};
        background-color: ${textField.rounded.error.bgColor};
        ${Label} {
            color: ${textField.rounded.error.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField.rounded.error.labelColor};
            * {
                fill: ${textField.rounded.error.labelColor};
            }
        }
        & ~ ${HelperText} {
            color: ${textField.rounded.error.helperTextColor};
        }
        input {
            caret-color: ${textField.rounded.error.caretColor};
            &::placeholder {
                color: ${textField.rounded.error.placeholderColor};
            }
        }
    }
    ,
    &:hover::after {
        border-width: 0.15rem;
    }

    &:focus-within,
    &:focus-within:hover {
        background-color: transparent;
        color: ${textField.rounded.error.activeTextColor};
    }

    ${inputContainsText &&
    css`
        && {
            background-color: transparent;
            color: ${textField.rounded.error.activeTextColor};
        }
    `}

    &&::after {
        border-color: ${textField.rounded.error.borderColor};
    }
`;

const filledStyle = ({ theme, filled, disabled }: InnerWrapperProps) => {
    return css`
        border-radius: ${theme.spacing.S1} ${theme.spacing.S1} 0 0;
        background-color: ${filled.default.bgColor};
        &::after {
            content: '';
            width: 100%;
            height: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            border-top: 0.1rem solid ${filled.default.borderColor};
            transition: all 100ms ease-out;
        }
        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.2rem`};
        }
    `;
};

const disabledStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    cursor: not-allowed;
    background-color: ${variant === 'filled' ? textField.filled.disabled.bgColor : 'transparent'};
    &::after,
    &:hover::after {
        border-width: 0.1rem;
        border-color: ${textField[variant].disabled.borderColor};
    }
    input {
        color: ${textField[variant].disabled.textColor};
    }
    ${Label} {
        color: ${textField[variant].disabled.labelColor};
    }
    ${Prefix}, ${Suffix} {
        color: ${textField[variant].disabled.labelColor};
        * {
            fill: ${textField[variant].disabled.labelColor};
        }
    }
    & ~ ${HelperText} {
        color: ${textField[variant].disabled.labelColor};
    }
    * {
        cursor: not-allowed;
    }
`;

const activeStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    &:focus-within,
    &:focus-within:hover {
        background-color: ${variant === 'filled' ? textField.filled.active.bgColor : 'transparent'};
        &::after {
            border-color: ${textField[variant].active.borderColor};
        }
        ${Label} {
            color: ${textField[variant].active.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField[variant].active.labelColor};
            * {
                fill: ${textField[variant].active.labelColor};
            }
        }
        input::placeholder {
            color: ${textField[variant].active.placeholderColor};
        }
    }
`;

const errorStyle = ({ theme: { textField }, variant }: InnerWrapperProps) =>
    variant === 'rounded'
        ? roundedErrorStyle
        : css`
              &,
              &:hover,
              &:focus-within,
              &:focus-within:hover {
                  background-color: ${variant === 'filled' ? textField.filled.error.bgColor : 'transparent'};
                  &::after {
                      border-color: ${textField[variant].error.borderColor};
                  }
                  ${Label} {
                      color: ${textField[variant].error.labelColor};
                  }
                  ${Prefix}, ${Suffix} {
                      color: ${textField[variant].error.labelColor};
                      * {
                          fill: ${textField[variant].error.labelColor};
                      }
                  }
                  & ~ ${HelperText} {
                      color: ${textField[variant].error.helperTextColor};
                  }
                  input {
                      caret-color: ${textField[variant].error.caretColor};
                      &::placeholder {
                          color: ${textField[variant].error.placeholderColor};
                      }
                  }
              }
          `;

export const InnerWrapper = styled('div').attrs(({ theme: { textField } }) => ({ ...textField, textField, height: undefined }))<
    InnerWrapperProps
>`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    height: ${({ size, theme }) => theme.textField.height[size]};
    padding: 0 ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
    transition: all 100ms ease-out;
    cursor: text;

    ${Label} {
        color: ${({ variant, textField }) => textField[variant].default.labelColor};
    }

    ${Prefix}, ${Suffix} {
        color: ${({ variant, textField }) => textField[variant].default.labelColor};
        * {
            fill: ${({ variant, textField }) => textField[variant].default.labelColor};
        }
    }

    & ~ ${HelperText} {
        color: ${({ variant, textField }) => textField[variant].default.helperTextColor};
    }

    ${({ variant }) => (variant === 'filled' ? filledStyle : variant === 'outlined' ? outlineStyle : roundedStyle)}
    ${({ disabled, isErrorPresent }) => (disabled ? disabledStyle : isErrorPresent ? errorStyle : activeStyle)}
`;
InnerWrapper.defaultProps = {
    size: 'M'
};
