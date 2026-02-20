import React from 'react';
import { Series, Audio, staticFile } from 'remotion';
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

export const MyComposition: React.FC = () => {
  const getSlideDuration = (key: string) => {
    const entry = AUDIO_DATA[key];
    return entry ? getDurationInFrames(entry.duration) : 150; // Fallback to 5 seconds
  };

  const getAudioSrc = (key: string) => {
    return AUDIO_DATA[key]?.url;
  };

  return (
    <>
      <Audio src={staticFile("audio/glc-bg-music.mp3")} volume={0.14} loop />
      <Series>
        <Series.Sequence durationInFrames={90}>
          <Frame01_BrandOpen />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-02')}>
          <Frame02_BrandStatement audioSrc={getAudioSrc('slide-02') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-03')}>
          <Frame03_ProjectIntro audioSrc={getAudioSrc('slide-03') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-04')}>
          <Frame04_HeroExterior audioSrc={getAudioSrc('slide-04') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-05')}>
          <Frame05_StatsBar audioSrc={getAudioSrc('slide-05') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-06')}>
          <Frame06_InteriorWaiting audioSrc={getAudioSrc('slide-06') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-07')}>
          <Frame07_InteriorLobby audioSrc={getAudioSrc('slide-07') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-08')}>
          <Frame08_ChallengeSolution audioSrc={getAudioSrc('slide-08') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-09')}>
          <Frame09_ScopeOfWork audioSrc={getAudioSrc('slide-09') || ''} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={getSlideDuration('slide-10')}>
          <Frame10_ClosingBrand audioSrc={getAudioSrc('slide-10') || ''} />
        </Series.Sequence>
      </Series>
    </>
  );
};
