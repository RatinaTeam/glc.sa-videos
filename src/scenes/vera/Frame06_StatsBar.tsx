import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY, COLOR_WHITE, FONT_FAMILY } from '../../lib/constants-vera';
import { Label } from '../../components/Typography';
import { BlurredBackground } from '../../components/BlurredBackground';

export const Frame06_StatsBar: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Slide up animation for container
    const translateY = interpolate(frame, [0, 20], [50, 0], {
        extrapolateRight: "clamp",
    });

    const opacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateRight: "clamp",
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <BlurredBackground imageSrc="assets/images/glc/vera-875x625.png" />
                <div
                    className="flex flex-row items-center gap-24"
                    style={{
                        transform: `translateY(${translateY}px)`,
                        opacity: opacity
                    }}
                >
                    {/* Stat 01 */}
                    <div className="flex flex-col">
                        <Label className="mb-2">OWNER</Label>
                        <h3 style={{ fontFamily: FONT_FAMILY, color: COLOR_WHITE, fontSize: 48, fontWeight: 700 }}>
                            Vera Hospital Company
                        </h3>
                    </div>

                    {/* Divider */}
                    <div style={{ width: 1, height: 80, backgroundColor: COLOR_PRIMARY }} />

                    {/* Stat 02 */}
                    <div className="flex flex-col">
                        <Label className="mb-2">GLC ROLE</Label>
                        <h3 style={{ fontFamily: FONT_FAMILY, color: COLOR_WHITE, fontSize: 48, fontWeight: 700 }}>
                            Implementation
                        </h3>
                        <span style={{ fontFamily: FONT_FAMILY, color: 'rgba(255,255,255,0.6)', fontSize: 24, textTransform: 'uppercase' }}>Full Execution Partner</span>
                    </div>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
