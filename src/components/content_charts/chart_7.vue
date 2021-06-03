<template>
<div>
    <div id="tb-7" class="top-chart-bar">ToDo List
        <a href="#" id="tp-7-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="#fff" d="M30 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </a>
    </div>
    <div class="todos">
        <p>⋮⋮   Do your ToDo List today at 6 AM GMT<a href="#" id="yes">&#x2714;</a><a href="#" id="no">&#x2716;</a></p>
    </div>
    <div class="todos">
        <p>⋮⋮   Do your ToDo List today at 6 AM GMT<a href="#" id="yes">&#x2714;</a><a href="#" id="no">&#x2716;</a></p>
    </div>
    <div class="todos">
        <p>⋮⋮   Do your ToDo List today at 6 AM GMT<a href="#" id="yes">&#x2714;</a><a href="#" id="no">&#x2716;</a></p>
    </div>
    <div class="todos">
        <p>⋮⋮   Do your ToDo List today at 6 AM GMT<a href="#" id="yes">&#x2714;</a><a href="#" id="no">&#x2716;</a></p>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">

#tb-7 {
    
    border-radius: 5px 5px 0 0;
    font-size: 16pt;
    padding-left: 15px;
    line-height: 60px;
    font-weight: 400;
    color: white;
    background: #1fb5ac;
}

#tp-7-icon {
    float: right;
    margin-right: 25px;
    line-height: 60px;
}

#tp-7-icon svg {
    vertical-align: middle;
}

.todos {
    height: 70px;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.todos a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    border: 0;
    background: none;
    font-size: 14pt;
    display: inline-block;
    padding: 10px;
    padding-right: 10px;
    position: absolute;
}

#yes {
    right: 60px;
}

#no {
    right: 20px;
}

.todos p {
    display: inline-block;
    margin: 0;
    height: 40px;
    width: 100%;
    padding-left: 15px;
    border-radius: 5px;
    font-weight: 600;
    background: #f6f6f6;
    display: flex;
    align-items: center;
}


</style>