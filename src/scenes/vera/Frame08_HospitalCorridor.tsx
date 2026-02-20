import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Img, interpolate, Easing, staticFile } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY } from '../../lib/constants-vera';
import { Headline, Label, Body } from '../../components/Typography';
import { GradientOverlay } from '../../components/GradientOverlay';

export const Frame08_HospitalCorridor: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    // Pan Left -> Right
    const pan = interpolate(frame, [0, durationInFrames], [20, 80], {
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.ease),
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img
                    src={staticFile("assets/images/glc/4rwc-596x332.png")}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: `${pan}% center`,
                        transform: 'scale(1.1)',
                    }}
                />
                <GradientOverlay position="right" opacity={0.7} />
            </AbsoluteFill>

            {/* Vignette */}
            <AbsoluteFill
                style={{
                    background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(188, 23, 34, 0.05) 100%)',
                }}
            />

            {/* Right Aligned Text */}
            <AbsoluteFill
                style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingRight: 80,
                    zIndex: 10,
                    opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' }),
                    transform: `translateX(${interpolate(frame, [20, 40], [30, 0], { extrapolateRight: 'clamp' })}px)`
                }}
            >
                <div className="flex flex-col items-end text-right">
                    <Label style={{ color: COLOR_PRIMARY }} className="mb-4">CORRIDORS & MEP</Label>
                    <Headline style={{ fontSize: 80 }} className="mb-4">
                        Clean Lines.<br />Flawless Integration.
                    </Headline>
                    <Body style={{ color: 'rgba(255,255,255,0.65)' }}>
                        MEP engineering embedded seamlessly<br />within premium architectural finishes.
                    </Body>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
