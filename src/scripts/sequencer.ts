import { REST, Morse } from './constants';
import { Beat } from './timers';

enum SwitchState {
    OFF,
    ON,
}
type DurationSequence = number[];
type SwitchSequence = Array<SwitchState>;

/**
 * Returns a copy of `str` with accents removed.
 * @param {string} str
 * @returns {string}
 */
const removeAccents = (str: string): string =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Returns a copy of `str` with duplicate spaces removed.
 * @param {string} str
 * @returns {string}
 */
const removeDuplicateSpaces = (str: string): string =>
    str.trim().replaceAll(/\s+/g, ' ');

/**
 * Returns an UPPERCASE of `str` with duplicated spaces,
 * accents and end spaces removed.
 * @param {string} str
 * @returns {string}
 */
const prepareString = (str: string): string => {
    str = removeDuplicateSpaces(str);
    str = str.trim();
    str = removeAccents(str);
    str = str.toUpperCase();
    return str;
};

/**
 * Translates a letter into a sequence of morse durations (in milliseconds).
 * @param {string} letter
 * @returns {DurationSequence}
 */
const sequenceLetter = (letter: string): DurationSequence => {
    const letterCode = Morse[letter];
    const letterSequence: DurationSequence = [];
    letterCode.map((val, idx, arr) => {
        letterSequence.push(val);
        if (arr[idx + 1] !== undefined) letterSequence.push(REST.SHORT);
    });
    return letterSequence;
};

/**
 * Translates a string into a sequence of morse durations (in milliseconds).
 * @param {string} text - the string to translate
 * @returns {DurationSequence}
 */
const getDurationSequence = (text: string): DurationSequence => {
    const sprucedUpText = prepareString(text);
    const splittedText = sprucedUpText.split('');
    let sequence: DurationSequence = [];
    splittedText.map((val, idx, arr) => {
        if (val === ' ') sequence.push(REST.LONG);
        else {
            sequence = sequence.concat(sequenceLetter(val));
            if (arr[idx + 1] !== undefined && arr[idx + 1] !== ' ')
                sequence.push(REST.MID);
        }
    });
    return sequence;
};

/**
 * Translates a string into a sequence of switch states (ON/OFF).
 * @param {string} message - the string to translate
 * @returns {SwitchSequence}
 */
const getSwitchSequence = (message: string): SwitchSequence => {
    const durationSeq: DurationSequence = getDurationSequence(message);
    if (durationSeq.length === 0) return [];
    const sequence: SwitchSequence = [];
    for (const dur of durationSeq) {
        const nbPulse: number = (2 * dur) / Beat.ms;
        for (let i = 0; i < nbPulse - 1; i++) sequence.push(SwitchState.OFF);
        sequence.push(SwitchState.ON);
    }
    return sequence;
};

export { SwitchState, type SwitchSequence, getSwitchSequence };
