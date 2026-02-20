import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { COLOR_PRIMARY, COLOR_WHITE, COLOR_BLACK, FONT_FAMILY } from '../lib/constants';
import { Label, Body } from '../components/Typography';
import { BlurredBackground } from '../components/BlurredBackground';

export const Frame08_ChallengeSolution: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Split Animation (0.8s = 24 frames)
    // Left side: width 50%, left 50% -> left 0
    const leftPos = interpolate(frame, [0, 24], [50, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.ease),
    });

    // Right side: width 0% -> 50% (from right edge? Brief says "split wipe from center")
    // Let's interpret "split wipe from center":
    // Left panel grows from center to left? No, brief says "left 50% -> left 0".
    // Right panel grows from center to right?
    // Let's implement left panel = left: leftPos, width: 50%.
    // Right panel = left: 50%, width: rightWidth%.

    const rightWidth = interpolate(frame, [0, 24], [0, 50], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.ease),
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
                {/* Left Side (Dark with Blurred Image) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: `${leftPos}%`,
                        width: '50%',
                        height: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 60,
                        zIndex: 2,
                    }}
                >
                    <BlurredBackground imageSrc="assets/images/glc/j-875x625.png" />
                    <div
                        className="flex flex-col items-center text-center max-w-xl z-10 relative"
                        style={{
                            opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' }),
                            transform: `translateY(${interpolate(frame, [20, 40], [20, 0], { extrapolateRight: 'clamp' })}px)`
                        }}
                    >
                        <Label className="mb-4 text-white/80">THE CHALLENGE</Label>
                        <Body style={{ color: COLOR_WHITE, fontWeight: 500, opacity: 1 }}>
                            Delivering compliant medical<br />infrastructure for a compact<br />30-bed unit.
                        </Body>
                    </div>
                </div>

                {/* Right Side (Red) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: `${rightWidth}%`,
                        height: '100%',
                        backgroundColor: COLOR_PRIMARY,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 60,
                        zIndex: 10,
                        overflow: 'hidden' // hide content during wipe
                    }}
                >
                    <div
                        className="flex flex-col items-center text-center max-w-xl"
                        style={{
                            minWidth: 700,
                            zIndex: 10,
                            opacity: interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' }),
                            transform: `translateY(${interpolate(frame, [30, 50], [20, 0], { extrapolateRight: 'clamp' })}px)`
                        }}
                    >
                        <Label className="mb-4" style={{ color: COLOR_BLACK }}>OUR SOLUTION</Label>
                        <Body style={{ color: COLOR_WHITE, fontWeight: 500, opacity: 1 }}>
                            Precise electromechanical &<br />architectural plans ensuring<br />swift regulatory approval.
                        </Body>
                    </div>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
