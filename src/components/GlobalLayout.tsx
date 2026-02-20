import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLOR_BLACK, FONT_FAMILY } from '../lib/constants';

export const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AbsoluteFill
            style={{
                backgroundColor: COLOR_BLACK,
                fontFamily: FONT_FAMILY,
            }}
        >
            {children}
        </AbsoluteFill>
    );
};
