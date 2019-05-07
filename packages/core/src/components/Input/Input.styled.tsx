import { defaultTheme } from '@medly-components/theme';
import { fullWidth, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

export const InputFieldStyled = styled('div')`
    ${Text.Style} {
        display: block;
    }
`;

export const InputStyled = styled('input').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<Props>`
    padding: 10px;
    margin: 0px ${({ theme }) => theme.spacing.S} ${({ theme }) => theme.spacing.S} 0px;
    font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
    font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
    color: ${props => props.input.color};
    background-color: ${props => props.input.bgColor};
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 3px;

    &:focus {
        border-color: ${props => props.input.focus.borderColor};
        outline: 0;
    }

    &::placeholder {
        color: ${props => props.input.placeHolderColor};
    }

    ${props => props.fullWidth && fullWidth()};
`;

InputStyled.defaultProps = {
    theme: defaultTheme
};
