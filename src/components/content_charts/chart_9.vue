<template>
<div>
    <div class="progrB">
        <p class="NumbrB counter" style="color: #fdce56"  data-counttarget="535">0</p><div class="NumbrB" style="color: #fdce56">/986</div>
        <p class="Ytext">Emails read</p>
        <div class="proglineB">
            <div id="emailprog" class="curprog" style="background: #fdce56;"></div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">

.Numbr {
    font-size: 16pt;
    display: inline-block;
    padding-top: 5px;
}

.Ytext {
    font-size: 10pt;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.8);
}

p {
    margin: 0;
}

.progr {
    height: 100px;
    padding-left: 20px;
}

.progline {
    height: 10px;
    width: 90%;
    background: #eae9e9;
    margin-top: 10px;
    border-radius: 5px;
}

.curprog {
    height: 100%;
    width: 0;
    border-radius: 5px;
    transition: width 2s;
}

</style>