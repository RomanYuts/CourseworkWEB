<template>
<div>
    <div id="yearsales">
        <p>Yearly Sales</p>
        <div style="height: 140px">
        <canvas id="chart_6"></canvas>
        </div>
    </div>
    <div class="progr">
        <p class="Numbr counter" style="color: #f7c055"  data-counttarget="536030">0</p><div class="Numbr" style="margin-left: 6px;color: #f7c055"> $</div>
        <p class="Ytext">Yearly Sales</p>
        <div class="progline">
            <div id="salprog" class="curprog" style="background: #f7c055"></div>
        </div>
    </div>
    <div class="progr"> 
        <p class="Numbr counter" style="color: #8cc152;" data-counttarget="4204284">0</p>
        <p class="Ytext">Yearly Visitors</p>
        <div class="progline">
            <div id="visprog" class="curprog" style="background: #8cc152;"></div>
        </div>
    </div>
    <div class="progr">
        <p class="Numbr counter" style="color: #73cba7;" data-counttarget="42000">0</p>
        <p class="Ytext">Yearly Customers</p>
        <div class="progline">
            <div id="custprog" class="curprog" style="background: #73cba7;"></div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">

#chart_6 {
    padding-left: 15px;
    padding-right: 15px;
    max-height: 130px;
}

#yearsales {
    height: 190px;
    background: #8cc152;
    border-radius: 5px 5px 0 0;
    font-size: 16pt;
}

#yearsales p {
    margin: 0;
    color: white;
    padding-left: 20px;
    line-height: 50px;
}

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