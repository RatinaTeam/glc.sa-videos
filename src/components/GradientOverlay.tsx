import React from 'react';
import { AbsoluteFill } from 'remotion';

interface GradientOverlayProps {
    position?: 'left' | 'right' | 'bottom' | 'full';
    opacity?: number;
}

export const GradientOverlay: React.FC<GradientOverlayProps> = ({
    position = 'full',
    opacity = 0.6
}) => {
    const getGradient = () => {
        switch (position) {
            case 'left':
                return `linear-gradient(to right, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,0) 100%)`;
            case 'right':
                return `linear-gradient(to left, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,0) 100%)`;
            case 'bottom':
                return `linear-gradient(to top, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,0) 100%)`;
            case 'full':
            default:
                return `radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,${opacity}) 100%)`;
        }
    };

    return (
        <AbsoluteFill
            style={{
                background: getGradient(),
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    );
};
