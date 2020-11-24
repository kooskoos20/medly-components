import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: ${({ minHeight }) => minHeight || 'auto'};
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};
    box-sizing: border-box;
    border-radius: 1.6rem;
    overflow-y: scroll;
    max-height: 80%;
    width: calc(100% - 2.4rem);

    @media (min-width: 768px) and (max-width: 1439px) {
        max-width: 72%;
        min-width: ${({ minWidth }) => minWidth || '42%'};
        padding: ${({ theme }) => `${theme.spacing.L1} ${theme.spacing.M2}`};
    }

    @media (min-width: 1440px) {
        padding: ${({ theme }) => `${theme.spacing.L1} ${theme.spacing.M2}`};
        min-width: ${({ minWidth }) => minWidth || `60.5rem`};
        max-width: 103.6rem;
        max-height: 80%;
    }
`;
