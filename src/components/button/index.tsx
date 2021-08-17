import React, { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';


interface ButtonProps extends React.ComponentPropsWithRef<'button'> { 
    disabled?: boolean;
    text?: string | ReactElement<any>[];
    variant: 'primary' | 'secondary' | 'danger';
    action?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
    color: white;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors[props.variant]};
    border: 1px solid ${(props) => props.theme.colors[props.variant]};
    border-radius: 4px;
    line-height: 1.4;
    padding: 0.25rem 0.4rem;
    font-size: 1rem;
    
   ${(props) => props.disabled ? css`
        pointer-events: none;
        opacity: 0.6;
    ` : 
        css`
            &:focus, &:hover {
                cursor: pointer;
                background-color: ${darken(0.15, props.theme.colors[props.variant])};
                border-color:  ${darken(0.15, props.theme.colors[props.variant])}
            }`
}
`;


export const Button: FC<ButtonProps> = (props) => {
    const { text, action, ...other} = props;

    return <StyledButton onClick={action} {...other}>{text}</StyledButton>
};