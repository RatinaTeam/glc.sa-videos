import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { COLOR_PRIMARY, COLOR_WHITE, FONT_FAMILY, COLOR_DARK_BASE } from '../lib/constants';
import { Headline, Subline } from '../components/Typography';
import { BlurredBackground } from '../components/BlurredBackground';

export const Frame02_BrandStatement: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const text = "We Build Facilities That Define Modern Care.";
    const words = text.split(' ');

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill className="flex flex-row">
                <BlurredBackground imageSrc="assets/images/glc/j-875x625.png" />
                {/* Left accent line */}
                <div style={{ width: 4, height: '100%', backgroundColor: COLOR_PRIMARY, marginLeft: 100 }} />

                <div className="flex flex-col justify-center ml-16 max-w-4xl">
                    <Headline className="mb-8" style={{ fontSize: 60 }}>
                        {words.map((word, i) => {
                            const delay = i * 5; // Stagger by 5 frames (~160ms)
                            const opacity = frame > delay ? Math.min((frame - delay) / 10, 1) : 0;
                            const translateY = frame > delay ? Math.max(24 - (frame - delay) * 2, 0) : 24;

                            return (
                                <span
                                    key={i}
                                    style={{
                                        display: 'inline-block',
                                        marginRight: '0.25em',
                                        opacity,
                                        transform: `translateY(${translateY}px)`,
                                    }}
                                >
                                    {word}
                                </span>
                            );
                        })}
                    </Headline>

                    <Subline
                        style={{
                            fontSize: 24,
                            opacity: frame > 30 ? Math.min((frame - 30) / 10, 1) : 0,
                            transform: `translateY(${frame > 30 ? Math.max(20 - (frame - 30) * 2, 0) : 20}px)`,
                        }}
                    >
                        Advanced Medical Planning · Construction · MEP Systems
                    </Subline>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
