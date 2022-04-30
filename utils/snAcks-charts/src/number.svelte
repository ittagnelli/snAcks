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
        /* width: {width}; */
        margin-right: 12px;
    }

    .number {
        font-family: 'Bowlby One SC', cursive;
        font-size: 64px;
    }

    .title {
        position: relative;
        top: 6px;
        font-size: 12px;
        color: rgb(102, 102, 102);
    }
</style>