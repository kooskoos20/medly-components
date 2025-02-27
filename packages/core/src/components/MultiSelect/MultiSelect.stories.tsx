import { defaultTheme, MultiSelectTheme } from '@medly-components/theme';
import React from 'react';
import { MultiSelectProps } from './types';

export const variants: MultiSelectProps['variant'][] = ['outlined', 'filled', 'fusion'];
export const sizes: MultiSelectProps['size'][] = ['S', 'M'];

export const options = [
        { value: 'lorem pharmacy', label: 'Lorem Pharmacy' },
        { value: 'ipsum pharmacy', label: 'Ipsum Pharmacy' },
        {
            label: 'Group',
            value: [
                { value: 'a pharmacy', label: 'a Pharmacy with some bog label' },
                { value: 'b pharmacy', label: 'b Pharmacy' },
                { value: 'c pharmacy', label: 'c Pharmacy' },
                { value: 'd pharmacy', label: 'd Pharmacy' }
            ]
        }
    ],
    disabledOptions = [{ value: 'disabled pharmacy', label: 'Disabled Pharmacy', disabled: true }, ...options];

export const ThemeInterface: React.FC<MultiSelectTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.multiSelect
};
