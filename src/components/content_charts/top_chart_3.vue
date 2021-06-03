<template>
<div id ="top_chart_3">
    <div id="message">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 70 70">
                <image id="visitor" width="70" height="70" xlink:href="data:img/png;base64,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"/>
            </svg>
        </div>
        <div class="text">
            <div id="value" class="counter" data-counttarget="9001">0</div>
            <div>Today Visitors</div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">

#top_chart_3 {
    font-size: 10pt;
    display: flex;
    align-items: center;
}

#top_chart_3 #message {
  position: absolute;
  top: 50%;
  left: 15%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  
}

#top_chart_3  #value {
    font-size: 20pt;
    font-weight: 700;
}

 #top_chart_3 .icon {
    display: inline-block;
    vertical-align: middle;
 }

#top_chart_3 .text {
    display: inline-block;
    padding-left: 15px;
    vertical-align: middle;
}

</style>