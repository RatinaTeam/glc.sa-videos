import React from 'react';
import { FONT_FAMILY, COLOR_WHITE, COLOR_PRIMARY } from '../lib/constants';

export const Headline: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className = '', style = {} }) => {
    return (
        <h1
            className={`text-9xl font-bold leading-tight ${className}`}
            style={{ fontFamily: FONT_FAMILY, color: COLOR_WHITE, ...style }}
        >
            {children}
        </h1>
    );
};

export const Subline: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className = '', style = {} }) => {
    return (
        <h2
            className={`text-5xl font-light tracking-wide ${className}`}
            style={{ fontFamily: FONT_FAMILY, color: COLOR_PRIMARY, ...style }}
        >
            {children}
        </h2>
    );
};

export const Label: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className = '', style = {} }) => {
    return (
        <span
            className={`text-3xl font-medium uppercase tracking-[0.2em] ${className}`}
            style={{ fontFamily: FONT_FAMILY, color: COLOR_PRIMARY, ...style }}
        >
            {children}
        </span>
    );
};

export const Body: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className = '', style = {} }) => {
    return (
        <p
            className={`text-3xl font-light ${className}`}
            style={{ fontFamily: FONT_FAMILY, color: 'rgba(255,255,255,0.65)', ...style }}
        >
            {children}
        </p>
    );
};
