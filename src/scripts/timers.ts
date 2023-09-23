import { BEAT } from './constants';

/**
 * Waits for a given number of milliseconds.
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
const wait = (milliseconds: number): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });

/**
 * Convert milliseconds to seconds.
 * @param {number} time
 * @returns {number}
 */
const convertMsToS = (time: number): number => time / 1000;

/**
 * @returns {string} decimal separator in a locale-aware way.
 */
function getLocaleDecimalSeparator(): string {
    const n = 1.1;
    const regex = /^1(.+)1$/;
    return regex.exec(n.toLocaleString())![1];
}

interface BeatData {
    ms: number; // value in milliseconds
    s: number; // value in seconds
    secPrint: string; // value in second formatted for printing
}

/**
 * Gather information on the beat value.
 * @param {number} beat
 * @returns {BeatData}
 */
const getBeatData = (beat: number): BeatData => {
    const seconds: number = convertMsToS(BEAT);
    let localeStringVal: string = parseFloat(
        seconds.toFixed(1)
    ).toLocaleString();
    const decimalSeparator: string = getLocaleDecimalSeparator();
    const stringValParts: string[] = localeStringVal.split(decimalSeparator);
    const secPrint: string =
        stringValParts[1] === '0' ? stringValParts[0] : localeStringVal;
    return { ms: BEAT, s: seconds, secPrint };
};

const Beat: BeatData = getBeatData(BEAT);

export { wait, Beat };
