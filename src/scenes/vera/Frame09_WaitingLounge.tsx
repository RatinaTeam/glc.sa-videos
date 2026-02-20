import { AbsoluteFill, useCurrentFrame, Img, interpolate, staticFile } from 'remotion';
import { SlideWrapper } from '../../components/SlideWrapper';
import { COLOR_PRIMARY } from '../../lib/constants-vera';
import { Headline, Label, Body } from '../../components/Typography';
import { GradientOverlay } from '../../components/GradientOverlay';

export const Frame09_WaitingLounge: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Ken Burns Zoom In: 1.00 -> 1.08
    const scale = interpolate(frame, [0, 150], [1, 1.08], {
        extrapolateRight: "clamp",
    });

    return (
        <SlideWrapper audioSrc={audioSrc}>
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img
                    src={staticFile("assets/images/glc/22xx-596x332.png")}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: `scale(${scale})`,
                    }}
                />
                <GradientOverlay position="left" opacity={0.7} />
            </AbsoluteFill>

            {/* Left Aligned Text with Red Border */}
            <AbsoluteFill
                className="flex flex-col justify-center items-start pl-20 z-10"
                style={{
                    zIndex: 10,
                    opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' }),
                    transform: `translateX(${interpolate(frame, [20, 40], [-30, 0], { extrapolateRight: 'clamp' })}px)`
                }}
            >
                <div
                    className="flex flex-col items-start pl-4"
                    style={{ borderLeft: `8px solid ${COLOR_PRIMARY}` }}
                >
                    <Label style={{ color: COLOR_PRIMARY }} className="mb-4">WAITING LOUNGE</Label>
                    <Headline style={{ fontSize: 80 }} className="mb-4">
                        Where Comfort Meets<br />Premium Design.
                    </Headline>
                    <Body style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Every lounge crafted to reflect<br />the facility's luxury standard.
                    </Body>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
