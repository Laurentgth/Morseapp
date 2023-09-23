<script lang="ts">
    //
    import { createEventDispatcher, type EventDispatcher } from 'svelte';
    import Instructions from './Instructions.svelte';

    //
    let inputText: string = '';
    let toggleState: boolean = false;
    $: inputType = toggleState ? 'text' : 'password';

    //
    const dispatch: EventDispatcher<any> = createEventDispatcher();
    const handleToggle = () => (toggleState = !toggleState);
    const handleSubmit = () => dispatch('submission', inputText);
    export let preventUserInput: boolean = false;
</script>

<Instructions />

<form on:submit|preventDefault={handleSubmit}>
    {#if inputType === 'text'}
        <input
            disabled={preventUserInput}
            id="input-box"
            class="input-box"
            type="text"
            bind:value={inputText}
        />
    {:else if inputType == 'password'}
        <input
            disabled={preventUserInput}
            id="input-box"
            class="input-box"
            type="password"
            bind:value={inputText}
        />
    {/if}
    <section class="toggle-section">
        <label for="toggle-message-visibility">Montrer le message</label>
        <input
            type="checkbox"
            id="toggle-box"
            class="toggle-box"
            bind:checked={toggleState}
            on:input={handleToggle}
        />
    </section>
</form>

<style>
    form {
        width: 100%;
        margin-inline: auto;
        padding: 1rem;
    }

    input {
        padding: 1rem;
    }

    .input-box {
        max-width: 20rem;
        width: 100%;
        margin: 0 auto 1rem auto;
        border-radius: 0.4rem;
        border: 1px solid black;
        font-size: 1.5rem;
    }

    .toggle-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .toggle-box {
        margin: 1rem;
        border: 0.5px solid black;
        font-size: 2rem;
        transform: scale(2);
    }
</style>
