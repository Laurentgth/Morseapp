<script lang="ts">
    import { type BufferPlay, type SequencePlay } from '../scripts/constants';
    import { SwitchState, type SwitchSequence } from '../scripts/sequencer';
    import { wait, Beat } from '../scripts/timers';

    interface metronomeData {
        pulse: number;
        active: boolean;
        display: boolean;
    }

    let active = false; // .lightcast is .lightcast__active when true
    $: activeClass = active ? 'lightcast__active' : '';
    const metronome: metronomeData = {
        pulse: Beat.ms / 2,
        active: true,
        display: true,
    };
    $: activeMetronomeClass = metronome.active ? 'metronome__active' : '';

    /**
     * Plays sequence before transmitting the actual message.
     */
    const playStartStub: BufferPlay = async () => {};

    /**
     * Plays sequence after transmitting the actual message.
     */
    const playEndStub: BufferPlay = async () => {};

    /**
     * Plays a sequence of ON/OFF for the message along with the metronome.
     * @param {SwitchSequence} sequence
     */
    export const play: SequencePlay = async (sequence: SwitchSequence) => {
        if (sequence.length === 0) return; // no sequence to play
        playStartStub();
        active = true;
        metronome.active = true;
        for await (const state of sequence) {
            await wait(Beat.ms / 2);
            metronome.active = !metronome.active;
            if (state === SwitchState.ON) active = !active;
        }
        metronome.active = false;
        playEndStub();
    };
</script>

<section>
    <div class="lightcast {activeClass}" />
    <p class="beat-info">
        Durée d'un <span>temps</span> | <span>{Beat.secPrint}</span>
        seconde{Beat.s < 2 ? '' : 's'}
    </p>
    <div class="metronome-box">
        <form class="metronome-switch">
            <label for="metronome-checkbox">Métronome</label>
            <input
                type="checkbox"
                name="metronome-checkbox"
                id="metronome-checkbox"
                bind:checked={metronome.display}
            />
        </form>
        <div
            id="metronome"
            class="metronome {activeMetronomeClass}"
            style="--pulse:{metronome.pulse}ms; --display:{metronome.display
                ? 'block'
                : 'none'};"
        />
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .lightcast {
        opacity: 0;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        background-color: #f9b233;
        transition-duration: 200ms;
        transition-timing-function: linear;
    }

    .lightcast__active {
        opacity: 1;
    }

    .metronome-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .metronome-switch {
        margin: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
        align-items: center;
    }

    .metronome {
        margin: 0.5rem;
        display: var(--display);
        opacity: 0;
        height: 10px;
        width: 95%;
        background-color: orange;
        border-radius: 0.2rem;
    }

    .metronome__active {
        opacity: 0.3;
    }

    .beat-info {
        margin: 0.5rem;
    }

    .beat-info > span:nth-of-type(1) {
        color: #ffd07a;
    }

    .beat-info > span:nth-of-type(2) {
        color: #f5a731;
    }
</style>
