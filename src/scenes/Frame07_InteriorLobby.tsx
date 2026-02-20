import { AbsoluteFill, useCurrentFrame, Img, interpolate, staticFile } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { COLOR_PRIMARY } from '../lib/constants';
import { Headline, Label, Body } from '../components/Typography';
import { GradientOverlay } from '../components/GradientOverlay';

export const Frame07_InteriorLobby: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
    const frame = useCurrentFrame();

    // Zoom out (0.5s = 15 frames)
    const scale = interpolate(frame, [0, 120], [1.1, 1], {
        extrapolateRight: "clamp",
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
                        transform: `scale(${scale})`,
                    }}
                />
                <GradientOverlay position="left" opacity={0.7} />
            </AbsoluteFill>

            {/* Left Aligned Text */}
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
                    style={{ borderLeft: `4px solid ${COLOR_PRIMARY}` }}
                >
                    <Label style={{ color: COLOR_PRIMARY }} className="mb-4">RECEPTION & LOBBY</Label>
                    <Headline style={{ fontSize: 80 }} className="mb-4">
                        Every Detail<br />Purposefully Planned.
                    </Headline>
                    <Body style={{ color: 'rgba(255,255,255,0.65)' }}>
                        From reception flow to spatial planning —<br />precision at every level.
                    </Body>
                </div>
            </AbsoluteFill>
        </SlideWrapper>
    );
};
