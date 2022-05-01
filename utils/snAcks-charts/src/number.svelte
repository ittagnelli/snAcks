<div class="chart-box number-dash">
    <span class="title">{title}</span><br>
    <span class="number">{number}</span>
</div>

<script>
    export let number;
    export let title;
</script>

<style>
    .number-dash {
        margin-right: 12px;
    }

    .number {
        font-family: 'Bowlby One SC', cursive;
        font-size: clamp(6vmin, 7vmin, 8vmin);
    }

    .title {
        position: relative;
        top: 0.5vw;
        font-size: clamp(2vmin, 2.5vmin, 3vmin);
        color: rgb(102, 102, 102);
    }
</style>