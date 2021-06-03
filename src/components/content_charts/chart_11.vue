<template>
<div class="parent">
   <div class="block">
    <div id="caleandar">
    </div>
 </div>
  </div>
</template>

<script>

</script>

<style lang="less">

.parent {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.block {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 48%;
    left: 45%;
    margin: -155px 0 0 -155px;
}

.cld-main{
  width: 350px;
  font-weight: 700;
  color: #7c95be;
}
.cld-main a{
  color: #7c95be;
}
.cld-main svg{
  fill: #7c95be;
}
  .cld-datetime{
    position: relative;
    width: 100%;
    min-width: 100px;
    max-width: 300px;
    margin: auto;
    overflow: hidden;
  }
  .cld-datetime .today{
    position: relative;
    float: left;
    width: calc(100% - 40px);
    margin: auto;
    text-align: center;
  }
  .cld-nav{
    position: relative;
    width: 20px;
    height: 20px;
    margin-top: 0;
  }
  .cld-nav:hover{
    cursor: pointer;
  }
  .cld-nav:hover svg{
      fill: #7c95be;
  }
  .cld-rwd{
    float: left;
  }
  .cld-fwd{
    float: right;
  }
.cld-labels, .cld-days{
  padding-left: 0;
  margin-top: 5px;
}
  .cld-label, .cld-day{
    box-sizing: border-box;
    display: inline-block;
    width: 14.28%;
    text-align: center;
  }
  .cld-day{
    border: 1px solid #eee;
  }
  .cld-day.today .cld-number{
    background: #7c95be;
    color: #fff;
  }
  .cld-day.disableDay{
    opacity: 0.5;
  }
  .cld-day.nextMonth, .cld-day.prevMonth{
    opacity: 0.33;
  }
    .cld-number{
      position: relative;
      margin: 0;
      padding: 10px;
    }
      .cld-title{
        position: absolute;
        z-index: 5;
        display: none;
        top: 35px;
        left: 0;
        padding: 5px 10px;
        background: #fff;
        white-space: nowrap;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 12px;
      }
      .cld-number:hover .cld-title{
        display: block;
      }
      .cld-title::before{
        content: '';
        position: absolute;
        top: -7.5px; left: 10px;
        width: 0;
        height: 0;
        border-left: 7.5px solid transparent;
        border-right: 7.5px solid transparent;

        border-bottom: 7.5px solid #ccc;
      }
      .cld-number.eventday{
        font-weight: bold;
        color: #0080FF;
      }
      .cld-number.eventday:hover{
        cursor: pointer;
        background: #eee;
      }
      .today .cld-number.eventday:hover{
        background: #005EFF;
      }


</style>