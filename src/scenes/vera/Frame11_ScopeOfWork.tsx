import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY, COLOR_WHITE, FONT_FAMILY } from '../../lib/constants-vera';
import { Label, Body } from '../../components/Typography';
import { BlurredBackground } from '../../components/BlurredBackground';

const Tag: React.FC<{ text: string, delay: number, frame: number }> = ({ text, delay, frame }) => {
    const opacity = interpolate(frame, [delay, delay + 12], [0, 1], { extrapolateRight: "clamp" });
    const translateY = interpolate(frame, [delay, delay + 12], [-16, 0], { extrapolateRight: "clamp" });

    return (
        <div
            style={{
                border: `1px solid ${COLOR_PRIMARY}`,
                padding: '16px 40px',
                color: COLOR_WHITE,
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: 32,
                opacity,
                transform: `translateY(${translateY}px)`,
            }}
        >
            {text}
        </div>
    );
};

export const Frame11_ScopeOfWork: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Line Draw: 0 -> 100% width
    const lineWidth = interpolate(frame, [0, 20], [0, 100], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.ease),
    });

    const tags = ["Architectural", "Mechanical", "Electrical", "Premium Finishing"];

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <BlurredBackground imageSrc="assets/images/glc/vera-875x625.png" />
                <Label
                    className="mb-16 text-white/50 z-10 relative"
                    style={{
                        opacity: interpolate(frame, [15, 30], [0, 1], { extrapolateRight: 'clamp' }),
                        transform: `translateY(${interpolate(frame, [15, 30], [10, 0], { extrapolateRight: 'clamp' })}px)`
                    }}
                >
                    SCOPE OF WORK
                </Label>

                {/* Container for Tags */}
                <div className="flex flex-row gap-12 mb-12 z-10 relative">
                    {tags.map((tag, i) => (
                        <Tag
                            key={i}
                            text={tag}
                            delay={20 + (i * 5)} // Start after line draw, staggered by 5 frames (~150ms)
                            frame={frame}
                        />
                    ))}
                </div>

                {/* Line */}
                <div
                    style={{
                        height: 1,
                        width: `${lineWidth}%`,
                        backgroundColor: COLOR_PRIMARY,
                        marginBottom: 32,
                        zIndex: 10,
                        position: 'relative'
                    }}
                />

                <Body
                    style={{
                        fontSize: 32,
                        color: 'rgba(255,255,255,0.7)',
                        zIndex: 10,
                        position: 'relative',
                        opacity: interpolate(frame, [45, 60], [0, 1], { extrapolateRight: 'clamp' }),
                        transform: `translateY(${interpolate(frame, [45, 60], [10, 0], { extrapolateRight: 'clamp' })}px)`
                    }}
                >
                    Full construction implementation delivered to luxury standard.
                </Body>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
