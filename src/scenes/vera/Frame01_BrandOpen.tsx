import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, Img } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY } from '../../lib/constants-vera';

export const Frame01_BrandOpen: React.FC = () => {
    const frame = useCurrentFrame();

    // Line draw animation: 0 -> 60% width
    const lineWidthRaw = interpolate(frame, [0, 36], [0, 60], {
        extrapolateRight: "clamp",
    });

    // Logo fade and scale: starts at 1.4s (42 frames)
    const logoOpacity = interpolate(frame, [42, 66], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const logoScale = interpolate(frame, [42, 66], [0.95, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <SlideWrapper>
            <AbsoluteFill className="justify-center items-center bg-black">
                
                {/* Logo */}
                <AbsoluteFill className="justify-center items-center">
                    <Img
                        src={staticFile("glc-logo.png")}
                        style={{
                            width: 600,
                            opacity: logoOpacity,
                            transform: `scale(${logoScale})`,
                        }}
                    />
                </AbsoluteFill>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
