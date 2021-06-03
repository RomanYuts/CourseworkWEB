<template>
<div id="chart10">
        <div id="icon-sun">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75" height="75" viewBox="0 0 75 75">
            <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="75" height="75" xlink:href="data:img/png;base64,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"/>
        </svg>
    </div>
    <div id="degree">44&deg;</div>
    <div id="locweath">
        <div>Amman
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="11" viewBox="0 0 8 11">
            <image id="ICON" width="8" height="11" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAA0UlEQVQYlU3QvSvFYRQH8M+9bnEyGY0G/gIro4nFIJvBpgw2/4nFFYOXrAxWWZSXXZIySFIkfmeQrp7rUb7T85xzes6np9Xr9WTmBFYwj2FcYgPHncycxjIWMOQ3MxjHQKtpmj3Mlgu2cIMlTOKsDDxiFF2s4xNTOMRgG6/12a+IeImIxFtpIjs4qIa5zHzCwz/PblkxhlWs4RvvGMEtFtsRcY99nFdoaX5gOyKui0FEXFRUUz1X2CyH/kDNEU4rcCcinkuxIP9yV36uGk76FfwAkQM/C4WggQIAAAAASUVORK5CYII="/>
        </svg>
    </div>
    <div>Sunny</div>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">

#chart10 {
    width: 100%;
    height: 100%;
    background: #3bafda;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
}


#locweath {
    display: inline-block;
    margin-left: 30px;
}


#icon-sun {
    display: inline-block;
    margin-left: 25px;
}

#degree {
    display: inline-block;
    font-size: 40pt;
    margin-left: 30px;
    font-weight: 400;
}

</style>