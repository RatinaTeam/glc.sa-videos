import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
import fs from 'fs';
import path from 'path';
import mp3Duration from 'mp3-duration';

const API_KEY = 'sk_a6aa875f4e06a3923cd30e15bb62d614c6376e2b8cf38a99';
const VOICE_ID = 'CwhRBWXzGAHq8TQ4Fs17';
const MODEL_ID = 'eleven_multilingual_v2';

const SLIDES = [
    {
        id: '01',
        text: null // Silent
    },
    {
        id: '02',
        text: "We execute with precision. Golden Lines International — turning architectural vision into world-class reality."
    },
    {
        id: '03',
        text: "Two thousand and twenty-three. A landmark execution in Riyadh. Vera Beauty Hospital."
    },
    {
        id: '04',
        text: "A striking glass curtain wall facade — built and delivered on the Northern Ring Road, Riyadh."
    },
    {
        id: '05',
        text: "Every detail of the exterior — crafted to communicate luxury, precision, and premium identity."
    },
    {
        id: '06',
        text: "Owned by Vera Hospital Company. Delivered by Golden Lines International as full implementation partner."
    },
    {
        id: '07',
        text: "Luxury patient suites — high-end finishing executed with specialized teams to the highest standard."
    },
    {
        id: '08',
        text: "Premium glass partition corridors — clean lines, refined materials, and flawless MEP integration."
    },
    {
        id: '09',
        text: "A luxury waiting experience — warm tones, artisan wall details, and thoughtful spatial design."
    },
    {
        id: '10',
        text: "The challenge: executing high-end finishing and precise MEP works for a luxury medical facility. Our solution: specialized finishing teams and MEP engineers ensuring premium quality delivery."
    },
    {
        id: '11',
        text: "Our scope covered architectural, mechanical, and electrical implementation — executed with elite precision."
    },
    {
        id: '12',
        text: "Golden Lines International. Building world-class facilities that define modern care."
    }
];

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio', 'vera');
const DATA_FILE = path.join(process.cwd(), 'src', 'lib', 'audio-data-vera.json');

const elevenlabs = new ElevenLabsClient({
    apiKey: API_KEY
});

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Create lib directory if it doesn't exist
const LIB_DIR = path.dirname(DATA_FILE);
if (!fs.existsSync(LIB_DIR)) {
    fs.mkdirSync(LIB_DIR, { recursive: true });
}

async function downloadAudio() {
    console.log('Starting Vera audio download...');
    const audioData: Record<string, { duration: number, url: string }> = {};

    for (const slide of SLIDES) {
        if (!slide.text) {
            console.log(`Skipping Slide ${slide.id} (Silent)`);
            audioData[`slide-${slide.id}`] = {
                duration: 3, // Default silent duration from brief
                url: ''
            };
            continue;
        }

        console.log(`Generating audio for Slide ${slide.id}...`);

        try {
            const audioStream = await elevenlabs.textToSpeech.convert(
                VOICE_ID,
                {
                    text: slide.text,
                    model_id: MODEL_ID,
                    output_format: 'mp3_44100_128',
                }
            );

            const chunks: Buffer[] = [];
            for await (const chunk of audioStream) {
                chunks.push(chunk);
            }
            const buffer = Buffer.concat(chunks);

            const fileName = `slide-${slide.id}.mp3`;
            const filePath = path.join(OUTPUT_DIR, fileName);

            fs.writeFileSync(filePath, buffer);
            console.log(`Saved ${fileName}`);

            // Get duration
            const duration = await new Promise<number>((resolve, reject) => {
                mp3Duration(buffer, (err, duration) => {
                    if (err) reject(err);
                    else resolve(duration);
                });
            });

            console.log(`Duration for Slide ${slide.id}: ${duration.toFixed(2)}s`);

            audioData[`slide-${slide.id}`] = {
                duration: duration,
                url: `/audio/vera/${fileName}`
            };

        } catch (error) {
            console.error(`Error processing Slide ${slide.id}:`, error);
        }
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(audioData, null, 2));
    console.log(`Audio data saved to ${DATA_FILE}`);
}

downloadAudio().catch(console.error);
