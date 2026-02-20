import { AbsoluteFill, useCurrentFrame, Img, interpolate, staticFile } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY } from '../../lib/constants-vera';
import { Headline, Label, Body } from '../../components/Typography';
import { GradientOverlay } from '../../components/GradientOverlay';

export const Frame04_HeroExterior: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Ken Burns Zoom: 1 -> 1.08 over the WHOLE slide duration
    const scale = interpolate(frame, [0, 150], [1, 1.08], {
        extrapolateRight: "clamp",
    });

    // Text animation: starts at frame 30
    const textOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });
    const textTranslateY = interpolate(frame, [30, 50], [20, 0], { extrapolateRight: 'clamp' });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            {/* Image with Ken Burns */}
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img
                    src={staticFile("assets/images/glc/vera-875x625.png")}
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
                <Label style={{ color: COLOR_PRIMARY }} className="mb-2">CONSTRUCTION IMPLEMENTATION</Label>
                <Headline style={{ fontSize: 100 }} className="mb-2">Vera Beauty Hospital</Headline>
                <Body style={{ color: 'rgba(255,255,255,0.7)', fontSize: 32 }}>Riyadh — Northern Ring Road · 2023</Body>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
