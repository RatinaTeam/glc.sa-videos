import { AbsoluteFill, useCurrentFrame, Img, interpolate, staticFile } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { COLOR_PRIMARY } from '../lib/constants';
import { Headline, Label, Body } from '../components/Typography';
import { GradientOverlay } from '../components/GradientOverlay';

export const Frame04_HeroExterior: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Ken Burns Zoom: 1 -> 1.08 over the WHOLE slide duration
    const scale = interpolate(frame, [0, 150], [1, 1.2], {
        extrapolateRight: "clamp",
        // easing: Easing.out(Easing.ease), // Removed as per instructions
    });

    // Text animation: starts at frame 30
    const textOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });
    const textTranslateY = interpolate(frame, [30, 50], [20, 0], { extrapolateRight: 'clamp' });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            {/* Image with Ken Burns */}
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img
                    src={staticFile("assets/images/glc/pic-17-596x426.png")}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: `scale(${scale})`,
                    }}
                />
                <GradientOverlay position="bottom" opacity={0.8} />
            </AbsoluteFill>

            {/* Lower Third Text */}
            <AbsoluteFill
                style={{
                    justifyContent: 'flex-end',
                    padding: 80,
                    paddingBottom: 60,
                    zIndex: 10,
                    opacity: textOpacity,
                    transform: `translateY(${textTranslateY}px)`
                }}
            >
                <Label style={{ color: COLOR_PRIMARY }} className="mb-2">MEDICAL PLANNING</Label>
                <Headline style={{ fontSize: 100 }} className="mb-2">Jeddah National Hospital (JNH)</Headline>
                <Body style={{ color: 'rgba(255,255,255,0.7)', fontSize: 32 }}>Riyadh — Mansoura · 2023</Body>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
