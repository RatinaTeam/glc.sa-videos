import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing, staticFile, Img } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { COLOR_PRIMARY, COLOR_WHITE, FONT_FAMILY } from '../lib/constants';
import { Label } from '../components/Typography';

export const Frame10_ClosingBrand: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Logo Snap Scale: 0 -> 1
    const logoScale = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.back(1.5)), // Snap effect
    });

    // Tagline Fade: starts at 15
    const textOpacity = interpolate(frame, [15, 30], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Line Draw: starts at 24 (0.8s)
    const lineWidth = interpolate(frame, [24, 54], [0, 200], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.ease),
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ backgroundColor: COLOR_PRIMARY, justifyContent: 'center', alignItems: 'center' }}>
                <Img
                    src={staticFile("glc-logo.png")}
                    style={{
                        width: 500, // Slightly smaller than opening for closing
                        transform: `scale(${logoScale})`,
                        marginBottom: 32
                    }}
                />

                <div style={{ opacity: textOpacity, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontFamily: FONT_FAMILY, fontSize: 24, color: COLOR_WHITE, marginBottom: 32 }}>
                        Golden Lines International
                    </span>

                    {/* Line */}
                    <div
                        style={{
                            height: 1,
                            width: lineWidth,
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            marginBottom: 24
                        }}
                    />

                    <Label style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginBottom: 40 }}>
                        MEDICAL PLANNING · CONSTRUCTION · MEP SYSTEMS
                    </Label>

                    <span style={{ fontFamily: FONT_FAMILY, fontSize: 18, color: 'rgba(255,255,255,0.5)' }}>
                        www.glc.sa
                    </span>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
