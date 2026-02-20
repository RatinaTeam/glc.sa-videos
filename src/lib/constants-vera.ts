import { loadFont } from "@remotion/google-fonts/Poppins";
import audioData from "./audio-data-vera.json";

// Load Poppins font
const { fontFamily } = loadFont();

export const COLOR_PRIMARY = "#BC1722";
export const COLOR_WHITE = "#FFFFFF";
export const COLOR_BLACK = "#0A0A0A";
export const COLOR_DARK_BASE = "#0D0D0D";

export const FONT_FAMILY = fontFamily;

export const ASPECT_RATIO = 16 / 9;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const FPS = 30;

// Type for audio data entries
type AudioEntry = {
    duration: number;
    url: string;
};

const rawAudioData = (audioData as any).default || audioData;

// Typed audio data
export const AUDIO_DATA: Record<string, AudioEntry> = rawAudioData;

// Helper to get total duration in frames
export const getDurationInFrames = (seconds: number) => {
    if (typeof seconds !== 'number' || isNaN(seconds)) return 0;
    return Math.ceil(seconds * FPS);
};

// Calculate total composition duration
export const getTotalDurationInFrames = () => {
    let totalSeconds = 0;
    try {
        Object.values(AUDIO_DATA).forEach((entry) => {
            if (entry && typeof entry.duration === 'number') {
                totalSeconds += entry.duration;
            }
        });
    } catch (e) {
        console.error("Error calculating total duration:", e);
    }

    const frames = getDurationInFrames(totalSeconds);
    return frames > 0 ? frames : 900; // Fallback to 30 seconds if calculation fails
};

// calculate start frames for each slide
export const getSlideStartFrames = () => {
    let currentFrame = 0;
    const startFrames: Record<string, number> = {};

    // maintain order based on slide ID
    const sortedKeys = Object.keys(AUDIO_DATA).sort();

    sortedKeys.forEach(key => {
        startFrames[key] = currentFrame;
        currentFrame += getDurationInFrames(AUDIO_DATA[key].duration);
    });

    return startFrames;
}
