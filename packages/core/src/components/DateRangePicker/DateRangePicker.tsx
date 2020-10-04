import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, useOuterClickNotifier, useUpdateEffect } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DateIconWrapper } from '../DatePicker/DatePicker.styled';
import getMaskedValue from '../TextField/getMaskedValue';
import * as TextFieldStyled from '../TextField/Styled';
import Month from './Calendar/Month';
import DateRangeInput from './DateRangeInput';
import * as Styled from './DateRangePicker.styled';
import { getFormattedDate, getValidDate } from './helpers';
import InputSeparator from './InputSeparator';
import { DateRangeProps } from './types';

export const DateRangePicker: FC<DateRangeProps> = React.memo(props => {
    const {
        id,
        value,
        minWidth,
        fullWidth,
        displayFormat,
        fromLabel,
        toLabel,
        errorText,
        helperText,
        variant,
        disabled,
        size,
        minSelectableDate,
        maxSelectableDate,
        popoverPlacement,
        onChange,
        ...restProps
    } = props;
    const inputId = id || 'medly-date-range-picker',
        [active, setActive] = useState(false),
        [builtInErrorMessage, setErrorMessage] = useState(''),
        [showCalendar, toggleCalendar] = useState(false),
        [focusedElement, setFocusedElement] = useState<'START_DATE' | `END_DATE`>('START_DATE'),
        [startDateText, setStartDateText] = useState(''),
        [endDateText, setEndDateText] = useState(''),
        [startDate, setStartDate] = useState<Date | null>(null),
        [endDate, setEndDate] = useState<Date | null>(null),
        startDateRef = useRef<HTMLInputElement>(null),
        endDateRef = useRef<HTMLInputElement>(null),
        wrapperRef = useRef<HTMLDivElement>(null),
        mask = displayFormat.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase(),
        [startDateMaskLabel, setStartDateMaskLabel] = useState(mask),
        [endDateMaskLabel, setEndDateMaskLabel] = useState(mask);

    const month = useMemo(() => (startDate || new Date()).getMonth(), [startDate]),
        year = useMemo(() => (startDate || new Date()).getFullYear(), [startDate]),
        isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

    const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []),
        onIconClick = React.useCallback(
            event => {
                event.stopPropagation();
                if (!disabled) {
                    toggleCalendar(val => !val);
                    setActive(true);
                    startDateRef.current.focus();
                }
            },
            [disabled]
        ),
        onFocus = React.useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                setActive(true);
                setFocusedElement(event.target.name as `START_DATE` | `END_DATE`);
                event.target.setSelectionRange(event.target.value.length, event.target.value.length);
                props.onFocus && props.onFocus(event);
            },
            [props.onFocus]
        ),
        onBlur = React.useCallback(
            (event: React.FocusEvent<HTMLInputElement>) => {
                event.target.value &&
                    parseToDate(event.target.value, displayFormat).toString() === 'Invalid Date' &&
                    setErrorMessage('Enter valid date');
                props.onBlur && props.onBlur(event);
            },
            [props.onBlur, displayFormat]
        ),
        handleTextChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            const maskedValue = getMaskedValue(e, mask),
                parsedDate = parseToDate(e.target.value, displayFormat),
                maskedLabel = `${maskedValue}${mask.substr(maskedValue.length)}`;
            if (e.target.name === 'START_DATE') {
                setStartDateText(maskedValue);
                setStartDateMaskLabel(maskedLabel);
                parsedDate.toString() !== 'Invalid Date' && setStartDate(parsedDate);
            } else if (e.target.name === 'END_DATE') {
                setEndDateText(maskedValue);
                setEndDateMaskLabel(maskedLabel);
                parsedDate.toString() !== 'Invalid Date' && setEndDate(parsedDate);
            }
        }, []),
        handleDateChange = useCallback(
            (date: Date) => {
                const formattedDate = getFormattedDate(date, displayFormat);
                if (focusedElement === `START_DATE`) {
                    setStartDate(date);
                    setStartDateText(formattedDate);
                    setStartDateMaskLabel(formattedDate);
                    setFocusedElement('END_DATE');
                } else {
                    setEndDate(date);
                    setEndDateText(formattedDate);
                    setEndDateMaskLabel(formattedDate);
                    setFocusedElement('START_DATE');
                }
            },
            [focusedElement]
        );

    useOuterClickNotifier(() => {
        setActive(false);
        toggleCalendar(false);
    }, wrapperRef);

    useEffect(() => {
        const formattedStartDate = value.startDate ? getFormattedDate(startDate, displayFormat) : '',
            formattedEndDate = value.endDate ? getFormattedDate(endDate, displayFormat) : '';

        setStartDate(getValidDate(value.startDate, displayFormat));
        setEndDate(getValidDate(value.endDate, displayFormat));
        setStartDateText(formattedStartDate);
        setEndDateText(formattedEndDate);
        setStartDateMaskLabel(formattedStartDate || mask);
        setEndDateMaskLabel(formattedEndDate || mask);
    }, [value, displayFormat]);

    useUpdateEffect(() => {
        if (focusedElement === 'START_DATE') {
            toggleCalendar(false);
            setActive(false);
        } else endDateRef.current.focus();
    }, [focusedElement]);

    const textProps = {
            variant,
            size,
            onBlur,
            onFocus,
            disabled,
            placeholder: mask,
            onChange: handleTextChange,
            errorText: errorText || builtInErrorMessage,
            ...restProps
        },
        iconProps = {
            variant,
            isErrorPresent,
            disabled,
            size,
            isActive: active
        };

    const Prefix = () => (
        <DateIconWrapper {...iconProps}>
            <DateRangeIcon onClick={onIconClick} size={size} />
        </DateIconWrapper>
    );

    return (
        <TextFieldStyled.OuterWrapper id={`${inputId}-input-wrapper`} ref={wrapperRef} fullWidth={fullWidth} minWidth={minWidth}>
            <Styled.InnerWrapper size={size} variant={variant} disabled={disabled} isErrorPresent={isErrorPresent} isLabelPresent>
                <TextFieldStyled.Prefix size={size}>
                    <Prefix />
                </TextFieldStyled.Prefix>
                <DateRangeInput
                    ref={startDateRef}
                    id={`${inputId}-from-input`}
                    value={startDateText}
                    name="START_DATE"
                    isPrefixPresent
                    dateMaskLabel={startDateMaskLabel}
                    label={fromLabel}
                    {...textProps}
                />
                <InputSeparator {...iconProps} />
                <DateRangeInput
                    ref={endDateRef}
                    id={`${inputId}-to-input`}
                    value={endDateText}
                    name="END_DATE"
                    dateMaskLabel={endDateMaskLabel}
                    label={toLabel}
                    {...textProps}
                />
            </Styled.InnerWrapper>
            <TextFieldStyled.HelperText id={`${id}-helper-text`} onClick={stopPropagation} size={size}>
                {errorText || builtInErrorMessage || helperText}
            </TextFieldStyled.HelperText>
            {showCalendar && (
                <Styled.DateRangePopup size={size} placement={popoverPlacement}>
                    <Month startDate={startDate} endDate={endDate} month={month} year={year} onChange={handleDateChange} />
                    <Month startDate={startDate} endDate={endDate} month={month + 1} year={year} onChange={handleDateChange} />
                </Styled.DateRangePopup>
            )}
        </TextFieldStyled.OuterWrapper>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {
    variant: 'filled',
    minWidth: '33.8rem'
};
