import React from 'react';
import { Audio, staticFile } from 'remotion';
import { TransitionSeries, springTiming, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { flip } from '@remotion/transitions/flip';

import { Frame01_BrandOpen } from './scenes/Frame01_BrandOpen';
import { Frame02_BrandStatement } from './scenes/Frame02_BrandStatement';
import { Frame03_ProjectIntro } from './scenes/Frame03_ProjectIntro';
import { Frame04_HeroExterior } from './scenes/Frame04_HeroExterior';
import { Frame05_StatsBar } from './scenes/Frame05_StatsBar';
import { Frame06_InteriorWaiting } from './scenes/Frame06_InteriorWaiting';
import { Frame07_InteriorLobby } from './scenes/Frame07_InteriorLobby';
import { Frame08_ChallengeSolution } from './scenes/Frame08_ChallengeSolution';
import { Frame09_ScopeOfWork } from './scenes/Frame09_ScopeOfWork';
import { Frame10_ClosingBrand } from './scenes/Frame10_ClosingBrand';
import { AUDIO_DATA, getDurationInFrames } from './lib/constants';

// How many frames each cross-dissolve/transition takes
const TRANSITION_FRAMES = 20;

export const MyComposition: React.FC = () => {
  const getSlideDuration = (key: string) => {
    const entry = AUDIO_DATA[key];
    return entry ? getDurationInFrames(entry.duration) : 150;
  };

  const getAudioSrc = (key: string) => {
    return AUDIO_DATA[key]?.url;
  };

  return (
    <>
      <Audio src={staticFile("audio/glc-bg-music.mp3")} volume={0.14} loop />
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

        {/* 05 – Stats Bar */}
        <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-05')}>
          <Frame05_StatsBar audioSrc={getAudioSrc('slide-05') || ''} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-top' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 06 – Interior Waiting */}
        <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-06')}>
          <Frame06_InteriorWaiting audioSrc={getAudioSrc('slide-06') || ''} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-left' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 07 – Interior Lobby */}
        <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-07')}>
          <Frame07_InteriorLobby audioSrc={getAudioSrc('slide-07') || ''} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-bottom' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 08 – Challenge & Solution */}
        <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-08')}>
          <Frame08_ChallengeSolution audioSrc={getAudioSrc('slide-08') || ''} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: 'from-right' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 09 – Scope of Work */}
        <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-09')}>
          <Frame09_ScopeOfWork audioSrc={getAudioSrc('slide-09') || ''} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={flip({ direction: 'from-left' })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 10 – Closing Brand */}
        <TransitionSeries.Sequence durationInFrames={getSlideDuration('slide-10')}>
          <Frame10_ClosingBrand audioSrc={getAudioSrc('slide-10') || ''} />
        </TransitionSeries.Sequence>

      </TransitionSeries>
    </>
  );
};
