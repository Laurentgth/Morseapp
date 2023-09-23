<script lang="ts">
    import Entry from './lib/Entry.svelte';
    import SignalCaster from './lib/SignalCaster.svelte';
    import Header from './lib/Header.svelte';
    import { getSwitchSequence } from './scripts/sequencer';
    import { bannedEntries, type SequencePlay } from './scripts/constants';
    import Footer from './lib/Footer.svelte';
    let playSequence: SequencePlay;
    let preventUserInput: boolean;

    const handleSubmission = async (event: CustomEvent): Promise<void> => {
        preventUserInput = true;
        const message = event.detail.toUpperCase().replace(bannedEntries, '');
        const switchSequence = getSwitchSequence(message);
        await playSequence(switchSequence);
        preventUserInput = false;
    };
</script>

<Header />
<main>
    <Entry on:submission={handleSubmission} bind:preventUserInput />
    <SignalCaster bind:play={playSequence} />
</main>
<Footer />

<style>
    main {
        flex-grow: 1;
        padding: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>
