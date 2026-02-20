import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { GlobalLayout } from './GlobalLayout';

interface SlideWrapperProps {
    children: React.ReactNode;
    audioSrc?: string; // Relative path to audio file in public folder
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, audioSrc }) => {
    return (
        <GlobalLayout>
            <AbsoluteFill>
                {children}
            </AbsoluteFill>
            {audioSrc && <Audio src={staticFile(audioSrc)} />}
        </GlobalLayout>
    );
};
