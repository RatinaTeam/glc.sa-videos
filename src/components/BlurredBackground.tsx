import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

interface BlurredBackgroundProps {
    imageSrc?: string;
    blurAmount?: number;
    overlayColor?: string;
}

export const BlurredBackground: React.FC<BlurredBackgroundProps> = ({
    imageSrc = "assets/images/glc/j-875x625.png",
    blurAmount = 20,
    overlayColor = "rgba(0, 0, 0, 0.7)" // Dark blue-tinted overlay as requested
}) => {
    return (
        <AbsoluteFill>
            {/* Blurred Image */}
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img
                    src={imageSrc.startsWith('http') ? imageSrc : staticFile(imageSrc)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: `blur(${blurAmount}px)`,
                        transform: 'scale(1.2)', // compensate for blur edges
                        opacity: 0.6
                    }}
                />
            </AbsoluteFill>

            {/* Color Overlay */}
            <AbsoluteFill
                style={{
                    backgroundColor: overlayColor,
                }}
            />
        </AbsoluteFill>
    );
};
