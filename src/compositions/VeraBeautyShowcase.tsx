import React from 'react';
import { Audio, staticFile } from 'remotion';
import { TransitionSeries, springTiming, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { flip } from '@remotion/transitions/flip';

import { Frame01_BrandOpen } from '../scenes/vera/Frame01_BrandOpen';
import { Frame02_BrandStatement } from '../scenes/vera/Frame02_BrandStatement';
import { Frame03_ProjectIntro } from '../scenes/vera/Frame03_ProjectIntro';
import { Frame04_HeroExterior } from '../scenes/vera/Frame04_HeroExterior';
import { Frame05_ExteriorSignage } from '../scenes/vera/Frame05_ExteriorSignage';
import { Frame06_StatsBar } from '../scenes/vera/Frame06_StatsBar';
import { Frame07_PatientSuite } from '../scenes/vera/Frame07_PatientSuite';
import { Frame08_HospitalCorridor } from '../scenes/vera/Frame08_HospitalCorridor';
import { Frame09_WaitingLounge } from '../scenes/vera/Frame09_WaitingLounge';
import { Frame10_ChallengeSolution } from '../scenes/vera/Frame10_ChallengeSolution';
import { Frame11_ScopeOfWork } from '../scenes/vera/Frame11_ScopeOfWork';
import { Frame12_ClosingBrand } from '../scenes/vera/Frame12_ClosingBrand';
import { AUDIO_DATA, getDurationInFrames } from '../lib/constants-vera';

// How many frames each transition takes
const TRANSITION_FRAMES = 20;

export const VeraBeautyShowcase: React.FC = () => {
    const getSlideDuration = (key: string) => {
        const entry = AUDIO_DATA[key];
        return entry ? getDurationInFrames(entry.duration) : 150;
    };

    const getAudioSrc = (key: string) => {
        return AUDIO_DATA[key]?.url;
    };

    return (
        <>
            <Audio src={staticFile("audio/bg-music.mp3")} volume={0.14} loop />
            <TransitionSeries>

                {/* 01 – Brand Open */}
                <TransitionSeries.Sequence durationInFrames={90}>
                    <Frame01_BrandOpen />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 02 – Brand Statement */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-02')}>
                    <Frame02_BrandStatement audioSrc={getAudioSrc('slide-02') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: 'from-left' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 03 – Project Intro */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-03')}>
                    <Frame03_ProjectIntro audioSrc={getAudioSrc('slide-03') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: 'from-right' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 04 – Hero Exterior */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-04')}>
                    <Frame04_HeroExterior audioSrc={getAudioSrc('slide-04') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 05 – Exterior Signage */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-05')}>
                    <Frame05_ExteriorSignage audioSrc={getAudioSrc('slide-05') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: 'from-top' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 06 – Stats Bar */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-06')}>
                    <Frame06_StatsBar audioSrc={getAudioSrc('slide-06') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: 'from-left' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 07 – Patient Suite */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-07')}>
                    <Frame07_PatientSuite audioSrc={getAudioSrc('slide-07') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: 'from-bottom' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 08 – Hospital Corridor */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-08')}>
                    <Frame08_HospitalCorridor audioSrc={getAudioSrc('slide-08') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe({ direction: 'from-right' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 09 – Waiting Lounge */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-09')}>
                    <Frame09_WaitingLounge audioSrc={getAudioSrc('slide-09') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={flip({ direction: 'from-left' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 10 – Challenge & Solution */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-10')}>
                    <Frame10_ChallengeSolution audioSrc={getAudioSrc('slide-10') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide({ direction: 'from-bottom' })}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 11 – Scope of Work */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-11')}>
                    <Frame11_ScopeOfWork audioSrc={getAudioSrc('slide-11') || ''} />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
                />

                {/* 12 – Closing Brand */}
                <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-12')}>
                    <Frame12_ClosingBrand audioSrc={getAudioSrc('slide-12') || ''} />
                </TransitionSeries.Sequence>

            </TransitionSeries>
        </>
    );
};
