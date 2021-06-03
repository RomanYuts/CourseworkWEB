<template>
<div id ="header">
  <span id="header-title"><b>Dash</b>Board</span>
  <div class="search">
    <div class="search-bar">
      <a href="#">
        <svg width="20" height="20" viewBox="0 0 15 15">
          <path id="Forma_1" data-name="Forma 1" fill="#74767c" class="cls-1" d="M14.667,13.035L11.575,9.943a6.174,6.174,0,0,0,1.118-3.6,6.238,6.238,0,0,0-.5-2.466A6.216,6.216,0,0,0,8.812.5,6.326,6.326,0,0,0,3.88.5,6.216,6.216,0,0,0,.5,3.881a6.325,6.325,0,0,0,0,4.931A6.216,6.216,0,0,0,3.88,12.192a6.236,6.236,0,0,0,2.466.5,6.173,6.173,0,0,0,3.6-1.118l3.092,3.083a1.071,1.071,0,0,0,.811.343A1.154,1.154,0,0,0,14.667,13.035ZM9.2,9.2a3.89,3.89,0,0,1-2.853,1.185A3.89,3.89,0,0,1,3.493,9.2,3.89,3.89,0,0,1,2.307,6.346,3.89,3.89,0,0,1,3.493,3.493,3.889,3.889,0,0,1,6.346,2.307,3.891,3.891,0,0,1,9.2,3.493a3.89,3.89,0,0,1,1.186,2.853A3.891,3.891,0,0,1,9.2,9.2Z"/>
        </svg>
      </a>
      <input type="search" class="input">
    </div>
  </div>
  <div class="message-icons">
      <span id="bell-count" class="count">4</span>
    <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="24" viewBox="0 0 18 24">
        <image width="18" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAACUklEQVQ4jYWUPWtVQRCG32dOEpMYoxCI4nchEgSJ+ImCkKsWRqwsRERFFEQQtBAs/Rt2gl1+gKS5iKClCHZapLMQRVCMQTG5OzKXPZeTk5zcgWH3nN15dz7eGebn57WRANclHZH0XNInd191Pjs7212tD0gh6TBwGtgLqNS6DDRgFNnwbDwKTAE33D2A30n6Hpeq3q0HVGTDR8BVM9uaPbgp6WRK6VlKaQ74WjVaExowCdwDrpjZuJkptCiKWA+Y2RMzO1+3sxpIyLSka2Y2YWaUQFmLoih2mtklMztYzVXdo/GokJmFV1UAld+xFkURd6aqQKtyBGwDdldCWVOl+JdSmogUxH4NUL48CIxU/9WBolLAkJkNb1S1OPEmrlQeDEmNyY5DoFMFaQDsZG0E+pe10aOK3fJGQJOS9m+EkGVU0h5gdD2gYPBFoNXHm5CRuCup1W63B3tAObm3gAf5tcbmLAU4Bjw2s+kuEDAA3AXuA7uCzX0ASg2qnJH0tN1uH43y35b00MwO1RncL0Qz2yTpcmzDm3PRjNWW6Cc1ekQ/XgiP2rk1TkkajmEWZw1Dj0zEUleAH8DrAJqT9FbSCUnH3T3Kvz1TYTDzZUXSUP5elPTN3T/H6JX0XtKHAPrj7gvu/sXd36SUxoDNwBZ3j9CDwdE64WFMyL/u/kvSb3dfdPefMzMzy91ei+Zz96WU0lKtUfdJinG7A4jB/7IaZ9i1Wq3ufqDs4E6ns6rbM1Cw9w4QIb9w91c5gh5QKT2g6isVviwAH4GxnIvl7H1PuyLpP54at8u68DFLAAAAAElFTkSuQmCC"/>
      </svg>
    </a>
      <span id="email-count" class="count">1</span>
    <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="18" viewBox="0 0 25 18">
        <image id="email-icon" width="25" height="18" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAYAAACuLnWgAAACNElEQVQ4ja2VT4iOURTGf8/1+ZOkRsLCSpOajIli+LYkCwvJxmwQKaMkjX81yp+VhYk0ySxGWLCxQBqanTSxsdFIWaBIsrGZkj99j67uqzvXN18NTp3e9z333uc5z7nn9GpkZARJZ4BNkt4C5v/YbGAJ0FeTNCxpFNgqqUfS7135+3TMdvUcsL0okuyR1B1CWC/pJHDiX4gSwRfba4BVtu9Fkg8hhE5JHyV1hBCeAnf+Vont58AGYFdU0mg0GkHSjAgWQpgXQngHfE1k31N8On47hLBO0nlgIJ2fiCQU/gDYDCyVNF4pqrwEruLAcWAf8ETS7qoKklQrQZJdBJbbjvd03fb2Yr20LUDszNdAW17qeEchDxRAB4DHto8C5+LmyrP6f7Zdt73A9gvbbdVapTo+a3kwf0+Aq4GdtvslvQcGs+zHbfcAb2zfr8hLxb/ISt2Fql5gLvDD9ivbK5OCMdtdwFnbE7a3AaPl+cpqJUFWy0PALOBYyjKC9AHtwExgDKgnxUOS9sdOBTaWFZlEktX7YErgQpFVnOC1QDewLAPrAK4Ae5Pyeo73R7nixNv+lhMUvqMiKOKR6EZUDjzKGySSNDKCw7Y/AUNTEEyalSZr7UlRP/CsKlAkmZPqeiROO3C1WTNMNSdN4iuAa0Cv7Ze254c0PJdSz19uBtJK1RQJREUx2dO2H0aSU7YXA8PlsDWzFsDld6ftm8Ddmu1btgfjQAHxwicdyP4NLclLSwkvtN31E2KFDtbBoBoOAAAAAElFTkSuQmCC"/>
      </svg>
    </a>
  </div>
  <span class="profile-bar">
    <a href="#">
      <img src="..\images\img.png" alt="">
    </a>
    <b>Hi</b>, Robert
    <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9">
        <path class="cls-1" fill= "#afb5c1" d="M1324,29l5,4.873L1334,29V33.13L1329,38l-5-4.873V29Z" transform="translate(-1324 -29)"/>
      </svg>
    </a>
  </span>
</div>
</template>

<script>

export default {
  name: 'head',
  components: {
      
  }
}
</script>

<style lang="less">
#header {
  height: 62px;
  width: 100%;
  position: fixed;
  background-color: #1f232c;
  z-index: 1;
}

#header-title {
  position: absolute;
  line-height: 62px;
  padding-left: 27px;
  color: white;
  font-weight: 400;
  font-size: 17pt;
}

#header .search {
  position: absolute;
  left: 320px;
  display: block;
}

#header .search-bar {
  padding-top: 11px;
}

#header .search-bar a {
  position: absolute;
  line-height: 20px;
  right: 15px;
  top: 21px;
  text-decoration: none;
  z-index: 20;
}

#header .search-bar .input {
  z-index: -1;
  top: 11px;
  width: 420px;
  height: 40px;
  outline: none;
  border-radius: 3px;
  background-color: #31343d;
  border: 0;
  color: white;
  font-size: 15pt;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0;
  padding-left: 10px;
}

input[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

#header .message-icons {
  display: inline-block;
  margin-left: 750px;
}

#header .message-icons a {
  display: inline-block;
  margin-left: 25px;
  line-height: 62px;
  width: 30px;
  text-decoration: none;
}

#header .message-icons svg {
  vertical-align: middle;
}

#header .message-icons .count {
  display: inline-block;
  position: relative;
  border-radius: 50%;
  width: 12px;
  line-height: 12px;
  color: white;
  text-align: center;
  font-size: 6pt;
  font-weight: 600;
}

#header .message-icons #bell-count {
  background-color: red;
  top: -11px;
  left: 45px;
}

#header .message-icons #email-count {
  background: #f6bb42;
  top: -11px;
  left: 56px;
}

#header .profile-bar {
  position: absolute;
  line-height: 62px;
  right: 0;
  padding-right: 30px;
  color: #a3aab4;
  font-weight: 500;
  font-size: 14pt;
}

#header .profile-bar img {
  margin-right: 10px;
  vertical-align: middle;
}

#header .profile-bar svg {
  margin-left: 10px;
}

</style>