import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY } from '../../lib/constants-vera';
import { Headline, Label } from '../../components/Typography';
import { BlurredBackground } from '../../components/BlurredBackground';

export const Frame03_ProjectIntro: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Wipe animation: 0 -> 100% width -> 2px width
    const wipeWidth = interpolate(frame, [0, 18, 36], [0, 100, 0.2], {
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.ease),
    });

    const textOpacity = interpolate(frame, [30, 45], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <BlurredBackground imageSrc="assets/images/glc/vera-875x625.png" />
                {/* Red Wipe / Line */}
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        height: '100%',
                        width: `${wipeWidth}%`,
                        backgroundColor: COLOR_PRIMARY,
                        zIndex: 10,
                    }}
                />

                {/* Text Content */}
                <div
                    style={{
                        opacity: textOpacity,
                        textAlign: 'center',
                        zIndex: 20,
                        transform: `translateY(${interpolate(frame, [30, 45], [15, 0], { extrapolateRight: 'clamp' })}px)`
                    }}
                >
                    <Label className="mb-4 text-white/80" style={{ letterSpacing: 4, fontSize: 48 }}>PROJECT SHOWCASE · 2023</Label>
                    <Headline style={{ fontSize: 120 }}>Vera Beauty Hospital</Headline>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
