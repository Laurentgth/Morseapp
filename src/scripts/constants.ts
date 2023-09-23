const BEAT: number = 1000; // in milliseconds

const REST = {
    SHORT: BEAT,
    MID: 3 * BEAT,
    LONG: 7 * BEAT,
};

const SIGN = {
    DOT: BEAT,
    DAH: 3 * BEAT,
};

type MorseDict = Record<string, number[]>;

const Morse: MorseDict = {
    A: [SIGN.DOT, SIGN.DAH],
    B: [SIGN.DAH, SIGN.DOT, SIGN.DOT, SIGN.DOT],
    C: [SIGN.DAH, SIGN.DOT, SIGN.DAH, SIGN.DOT],
    D: [SIGN.DAH, SIGN.DOT, SIGN.DOT],
    E: [SIGN.DOT],
    F: [SIGN.DOT, SIGN.DOT, SIGN.DAH, SIGN.DOT],
    G: [SIGN.DAH, SIGN.DAH, SIGN.DOT],
    H: [SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DOT],
    I: [SIGN.DOT, SIGN.DOT],
    J: [SIGN.DOT, SIGN.DAH, SIGN.DAH, SIGN.DAH],
    K: [SIGN.DAH, SIGN.DOT, SIGN.DAH],
    L: [SIGN.DOT, SIGN.DAH, SIGN.DOT, SIGN.DOT],
    M: [SIGN.DAH, SIGN.DAH],
    N: [SIGN.DAH, SIGN.DOT],
    O: [SIGN.DAH, SIGN.DAH, SIGN.DAH],
    P: [SIGN.DOT, SIGN.DAH, SIGN.DAH, SIGN.DOT],
    Q: [SIGN.DAH, SIGN.DAH, SIGN.DOT, SIGN.DAH],
    R: [SIGN.DOT, SIGN.DAH, SIGN.DOT],
    S: [SIGN.DOT, SIGN.DOT, SIGN.DOT],
    T: [SIGN.DAH],
    U: [SIGN.DOT, SIGN.DOT, SIGN.DAH],
    V: [SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DAH],
    W: [SIGN.DOT, SIGN.DAH, SIGN.DAH],
    X: [SIGN.DAH, SIGN.DOT, SIGN.DOT, SIGN.DAH],
    Y: [SIGN.DAH, SIGN.DOT, SIGN.DAH, SIGN.DAH],
    Z: [SIGN.DAH, SIGN.DAH, SIGN.DOT, SIGN.DOT],
    1: [SIGN.DOT, SIGN.DAH, SIGN.DAH, SIGN.DAH, SIGN.DAH],
    2: [SIGN.DOT, SIGN.DOT, SIGN.DAH, SIGN.DAH, SIGN.DAH],
    3: [SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DAH, SIGN.DAH],
    4: [SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DAH],
    5: [SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DOT],
    6: [SIGN.DAH, SIGN.DOT, SIGN.DOT, SIGN.DOT, SIGN.DOT],
    7: [SIGN.DAH, SIGN.DAH, SIGN.DOT, SIGN.DOT, SIGN.DOT],
    8: [SIGN.DAH, SIGN.DAH, SIGN.DAH, SIGN.DOT, SIGN.DOT],
    9: [SIGN.DAH, SIGN.DAH, SIGN.DAH, SIGN.DAH, SIGN.DOT],
    0: [SIGN.DAH, SIGN.DAH, SIGN.DAH, SIGN.DAH, SIGN.DAH],
};

type SequencePlay = (sequence: number[]) => Promise<void>;
type BufferPlay = () => Promise<void>;

const bannedEntries: RegExp = new RegExp(
    `[^${Object.keys(Morse).join('')} ]`,
    'g'
);

export { BEAT, REST, SIGN, Morse, bannedEntries };
export type { MorseDict, SequencePlay, BufferPlay };
