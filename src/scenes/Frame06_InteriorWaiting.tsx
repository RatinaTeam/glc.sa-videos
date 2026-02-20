import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Img, interpolate, Easing, staticFile } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { COLOR_PRIMARY, COLOR_WHITE, FONT_FAMILY } from '../lib/constants';
import { Headline, Label, Body } from '../components/Typography';
import { GradientOverlay } from '../components/GradientOverlay';

export const Frame06_InteriorWaiting: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    // Pan Left -> Right
    // object-position: 20% center -> 80% center
    const pan = interpolate(frame, [0, durationInFrames], [20, 80], {
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.ease),
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img
                    src={staticFile("assets/images/glc/pic-20-596x426.png")}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: `${pan}% center`,
                        transform: 'scale(1.1)', // slight scale to allow panning without edges
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
                    <Label style={{ color: COLOR_PRIMARY }} className="mb-4">INTERIOR DESIGN</Label>
                    <Headline style={{ fontSize: 80 }} className="mb-4">
                        Designed for Comfort.<br />Built for Care.
                    </Headline>
                    <Body style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Modern waiting areas engineered<br />for patient well-being.
                    </Body>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
