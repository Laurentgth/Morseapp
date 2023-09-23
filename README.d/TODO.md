# TODO and Backlog

## TODO

## BACKLOG

-   [ ] (v-1.0.0) Write start and finish signal functions + set up time to prepare for watching sequence.

-   [ ] Remove unwanted characters from input as they are typed.

-   [ ] (v-1.0.0) write "TRANSMISSION" over input field when playing a sequence.

-   [ ] (v-1.0.0) Complete documentation for release.

-   [ ] (v-1.0.0) Add tests:

    -   https://svelte.dev/docs/faq#how-do-i-test-svelte-apps

    -   https://vitest.dev/guide/

    -   (25:30) [Introduction to Jest Testing | JavaScript Unit Tests - 8 Aug. 2023](https://youtu.be/x6NUZ8dc9Qg) @ [Dave Gray Channel](https://www.youtube.com/channel/UCY38RvRIxYODO4penyxUwTg/videos)

    -   (38:59) [Tutoriel JavaScript : Jest - 26 Sep. 2019](https://youtu.be/_9JTTGI9-K0) @ [Grafikart.fr Channel](https://www.youtube.com/channel/UCj_iGliGCkLcHSZ8eqVNPDQ/videos)

-   [ ] (v-1.0.0) Find a way to clean up the various `setTimeOut` generated in a sequence.

-   [ ] (v-1.0.0) Add a UI control button + ESCAPE key to stop playing a sequence.

-   [ ] (v-1.0.1) Transform data to store numbers of beat instead of durations, e.g. for "X": [3, 1, 1, 3] instead of [3000, 1000, 1000, 3000] for a beat of 1000 ms.

-   [ ] (v-1.2.0) Add audio cues for both message and metronome signals.

-   [ ] (v-1.2.0) Internationalize application on frontend side (available solutions?).

-   [ ] Add handles to select beat and durations ratios; default for ratio should be 1/3/3/7.

-   [ ] Create logo (and favicon) with cartoonesque morse animal.

## DONE

-   [x] (v-0.1.0) Write 1st version [`README.md`](../README.md).

-   [x] (v-0.1.0) Allow user to click on beat info to toggle metronome.

-   [x] (v-0.1.0) Implement a metronome to synchronize with the passing of time for the message.

-   [x] (v-0.1.0) Fix bug: when empty message is sent, light caster's state becomes locked on 'ON'.

-   [x] (v-0.1.0) Remove unwanted characters from input.

-   [x] (v-0.1.0) Make display of beat value locale-friendly (tested on Chrome).

-   [x] (v-0.1.0) Disabled input field when playing the morse sequence.

    -   [x] (v-0.1.0) Prevent several sequences to `play` concurrently.
