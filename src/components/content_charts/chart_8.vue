<template>
<div>
    <div class="progrB">
        <p class="NumbrB counter" style="color: #ff503f"  data-counttarget="113">0</p><div class="NumbrB" style="color: #ff503f">/200 GB</div>
        <p class="Ytext">From your hosting usage</p>
        <div class="proglineB">
            <div id="hostprog" class="curprog" style="background: #ff503f;"></div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">

.NumbrB {
    font-size: 20pt;
    font-weight: 700;
    display: inline-block;
    padding-top: 15px;
}

.Ytext {
    font-size: 10pt;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
}

p {
    margin: 0;
}

.progrB {
    height: 100%;
    padding-left: 20px;
}

.proglineB {
    height: 15px;
    width: 90%;
    background: #eae9e9;
    margin-top: 20px;
    border-radius: 12px;
}

.curprog {
    height: 100%;
    width: 0;
    border-radius: 12px;
    transition: width 2s;
}

</style>