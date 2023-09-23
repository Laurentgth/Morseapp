<script>
    //
    import morseappLogo from '/morseappLogo.svg';
</script>

<header>
    <img src={morseappLogo} alt="Morseapp" />
    <h1>Morse<span>app</span></h1>
</header>

<style>
    header {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
            sans-serif;
        margin: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    img {
        height: 4rem;
    }

    h1 {
        margin: 1rem;
        color: #ffe3b0;
    }

    h1 > span {
        color: #f5a731;
    }
</style>
