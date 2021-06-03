<template>
<div>
    <div id="tb-13" class="top-chart-bar">Data Graph
        <a href="#" id="tp-5-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                <image id="Gear_icon" class="cls-1" width="30" height="30" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACCklEQVQ4jY3US4hPcRQH8M+MeeQRFsrSW8PEZKEsvEoeRWIhCykba0tJkqI8NpQsLKgROwmFFSmKFWqUx4LJo1FCFl7zoKNzp59r/sO3bv97v//z+95zvufc03S+u9s/sBW70ILjuDBacEvteQyaMFBwCzEz7ztr8a0YwmBFNBd/TsQhnMKs5Dowv4jpTK560Tkcw+R6hpHZHmzLt0bAmxTrKAQX4QReYjq6MrvBPD9QCUbaH/Azn5cnV1YQaE+RroLrx7uq7OpACJ3FFfwYwY5G+I5LOFMlUx56j48NhL7lVUdY9Tmr+8ND6deSGhflXMa1zGAdNqOtOL8Sq9GDviC2p9i8WgMCF3EUb/P5Ab5iRxEzF/uzUT0huBtTRignsrteiAX6cANbMD65mNvZea1oTg8aoXUErm0ETvr4KDI8nOqLsbQQid9NeIrnycXAbyyyk80Kj++ityVHJTADp7GgCN6Asbiac7kea2qZPcPBypqyoy9wL5tT8qvyaoTXpc/lzEVjJpUf+n8iPsFllVWVYAzozvSsPbmhUUT6c3zkyB3J5TJcWghPzRGI4FvZtSh/DsYVQq9wOwVjyCdk435XVglG4AF8SfGT6c007M3OBp5gX3odZ+/kSoul+6kUDMR3HMGBysde3MfatOJxigViCd/Maqot9dciqHZbiZjBh5lBjEgdw2LwCxwsdoGvqXXKAAAAAElFTkSuQmCC"/>
            </svg>
        </a>
    </div>
    <div id="chart13grapg">
        <div id="graphtitle">$<div id="grapgval" class="counter" data-counttarget="540">0</div>(0.4%)<div id="grtoday">Today</div></div>
        <div style="height: 110px;"><canvas id="chart_13_1"></canvas></div>
    </div>
    <div id="totscale">
        <div style="display: inline-block; margin-left: 25px">
            <p class="Numbr counter" style="color: rgba(0, 0, 0, 0.9); font-weight: 700;"  data-counttarget="43322">0</p><div class="Numbr" style="margin-left: 6px;"> $</div>
            <p class="Ytext">Total earned</p>
        </div>
    <div id="grscale">
        <canvas id="chart_13_2"></canvas>
    </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">
#tb-13 {
    
    border-radius: 5px 5px 0 0;
    font-size: 14pt;
    padding-left: 15px;
    line-height: 60px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    background: white;
}

#tp-13-icon {
    float: right;
    margin-right: 25px;
    line-height: 60px;
}

#tp-13-icon svg {
    vertical-align: middle;
}

#chart13grapg {
    background: #9972b5;
}

#graphtitle {
    height: 30px;
    color: white;
    padding-top: 20px;
    margin-left: 25px;
    font-weight: 500;
}

#grapgval {
    display: inline-block;
    margin-right: 10px;
}

#grtoday {
    display: inline-flex;
    float: right;
    margin-right: 25px;
}

#chart_13_1 {
    max-height: 90px;
    padding: 0 30px 30px 30px;
}

#grscale {
    float: right;
    margin-right: 30px;
}

#grscale canvas {
    width: 100px;
}

#totscale {
    height: 90px;
    padding-top: 15px;
}

</style>