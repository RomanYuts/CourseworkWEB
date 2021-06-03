<template>
<div id="chart12">
    <div id="tb-12" class="top-chart-bar">Notifications
        <a href="#" id="tp-12-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                <image id="Gear_icon" class="cls-1" width="30" height="30" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACCklEQVQ4jY3US4hPcRQH8M+MeeQRFsrSW8PEZKEsvEoeRWIhCykba0tJkqI8NpQsLKgROwmFFSmKFWqUx4LJo1FCFl7zoKNzp59r/sO3bv97v//z+95zvufc03S+u9s/sBW70ILjuDBacEvteQyaMFBwCzEz7ztr8a0YwmBFNBd/TsQhnMKs5Dowv4jpTK560Tkcw+R6hpHZHmzLt0bAmxTrKAQX4QReYjq6MrvBPD9QCUbaH/Azn5cnV1YQaE+RroLrx7uq7OpACJ3FFfwYwY5G+I5LOFMlUx56j48NhL7lVUdY9Tmr+8ND6deSGhflXMa1zGAdNqOtOL8Sq9GDviC2p9i8WgMCF3EUb/P5Ab5iRxEzF/uzUT0huBtTRignsrteiAX6cANbMD65mNvZea1oTg8aoXUErm0ETvr4KDI8nOqLsbQQid9NeIrnycXAbyyyk80Kj++ityVHJTADp7GgCN6Asbiac7kea2qZPcPBypqyoy9wL5tT8qvyaoTXpc/lzEVjJpUf+n8iPsFllVWVYAzozvSsPbmhUUT6c3zkyB3J5TJcWghPzRGI4FvZtSh/DsYVQq9wOwVjyCdk435XVglG4AF8SfGT6c007M3OBp5gX3odZ+/kSoul+6kUDMR3HMGBysde3MfatOJxigViCd/Maqot9dciqHZbiZjBh5lBjEgdw2LwCxwsdoGvqXXKAAAAAElFTkSuQmCC"/>
            </svg>
        </a>
    </div>
    <div class="notif">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50">
            <image id="Ellipse_6_copy" data-name="Ellipse 6 copy" width="50" height="50" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAGXUlEQVRogd2be4gVVRzHP243tYdODzUjy0yt7WVZUWklZWVTJEYRQmT91Y4LPsKUrMAe/0SkiUXpYCEkRPSAMMixEtoyC0xL7aG5llEbqb1Ga32m8bv87nKdvY8558ys2ReW3bt3zu98v/eeOef3+54z3ZqW/klOOBe4ErgIOAc4E+gDnAAUgP2AdP4rsAXYCKwFPgW+yYNQIeN4I4AJwFhgQIq+++hPI+CXvfcT8DawGPgkK3INGcQ4BpgMbAJWAs0phNbDAI2zUuNK/GNdibqI7Q48oEPwWWCIK5kqGKLxv9f+utsGshU7Wu+v2UA/284N0U/7k36vtwlgKrYH8BywXO+zwwHp933l0cOkoYnYs/QemmTOLxdM0slrcNoGacVeDHwMXGLPLRcMB1Yov7pII3YU0AL0d+eWC/orv1H1LqwnVhKCJUDv7Ljlgt7Ks+Y3XEusTPnvAV723HKB8Hy31hJYTaws4G8CffPjlgv6Ku+KCUg1sXOBYfnyyg3Ce26lNyqJHQM05c8pVwj/m5L/TIrtCczvOk65Yr7q6UBS7GRNHv4PGJRMgMrFSvUyves5FbEGmKVJi0wyA4GJmhYerHC9FAU7U8SdrrqKKK9nmwyT+n2aVV0DHGXQLonHgHmh7yVdhDCI4heB8cAzWvdKERACezU3rodTVNc8eVHuVGwyLNPk070ceAS436BdCeJUzAx9b069C4Molhn2RM3NDwAfAFen7Ed0nU3ZMB5hUY9+FPqeWCoP6qdtiiVUWSKSCH1vXeh7LSr4Da18VqTsZ6jq6xA7wYJsmxLZG/reRL0/2lO2/UcK8tD3Dhj2Kd/QO8BlwFaDdkV9JbFjDTsVdCt/ocPxdmB1irZrdUgaIfS9FaHvLQQeAu4waFrU16DOn41n1GmJCn1vGXAdMEPdwmpYH/rePtMOgyg+NYji1+RPw6air1HEXmXaqeJa6Tz5z9D3doa+N1utk2ZdPnYlLuuZbJcS44A7LduObNAyzgb9VExFhL7XFvreArVIL1SSc7SSaguiuFu1tjXgssQNK+gwtoFMMjOCKP4WeDX0vf2VLgp9T67brD8yk8pw7B76XqVkoR6Os+QqaCyoU2+DBerc3wp8CXyRtqHM4JZ9pvabKmCgDOOTLRsfCH3veeAuXbi7AkMd2vYuODgRfhDFvWRCAv52IJEKQRRLjnuGQ4he8s0ebdlYPuW7HTo3hWySne7QvijWeL0rw6wgiq9waG+C0S5bH1IlidjYIYDYmK8HUdzJFcgSQRTLrXaLY5ii2N8cg8jQejmI4kVBFNsuY/VwYwYG/Y6C7sK5kNwBTNHfexwJVcOUDGL8UNAc1mUYikE9PPS9mRkQ6oQgiu8xqF1rYUODViCumBpE8fgM4hyCIIolgX88WWFZYl2DTalVAZLYvxREcXMQxbZL2SGQlFKtF9sML4mVMow3aCF+mmMwyVtfAG4Lovgt4DMt5XZbxntUYjlyKqGtNIxRiyQrjFHRzaabxSUEUSxWz8MZcirqK7mLi2uVawbYr2aYeFJLTBP+IIqlhHtCjLgMuJRD9HWIlbNHrQam2x/AdvVkpTD/UUXK8YNV1cq9WgiieLDWu+NM29ZBa+l4UUnsQf02nk4ZoF1LvKXALxU839TQ7OheYJqa41mjw/ks942l0++Ak1IG2aXf5Cuy8x363s8mDIIobtT7+z7gApO2BvhdvbJiSpw8zif3ypMWQVu1gJdlbJUO67/K1seDWjcPVM/rUrWDOnlYGUP0PFV6kRQr6+XXuil0pEN2LM4DOpa+5C7e7oxm5f8CmsuFUmUzepmuk0cy5quOQ1DtmIHMjJ/nzykXCO9pld6oJnaP+rzb8+WVObYr74opaq2jQZvV4HZxMroSwvNm5V0R9Q59rdGMJs0u9+HETuVZc1MtzXG+Ft2sMtki7EpsVX4t9S5Me1BztSYD6925ZYr1yivNNqnREdzN6t0utOeWKRbqjnrVezQJ08PV7Xog44Y6+695YqO6jU2mOxG2x+aX67E52XTeZhnDFNu0v2G652sMlwci9uqZ/UFqdbY6xKoFGaZTtZ/Z2q8VsnjUpV2NMdn7Gal17hbHmFs0zsiypz/SHk6piqwfYhJHoPTQkdSRcrr7fDXhhbTUzMer1yymupSBkgzIqJB78SvgQ62rswXwL7fTdDadv1i5AAAAAElFTkSuQmCC"/>
        </svg>
        <div class="arrow" style="background: #8ac6f0"></div>
        <p style="background: #8ac6f0">There are 5 new twitter messages are waiting you for reply them !</p>
    </div>
    <div class="notif">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50">
            <image id="email-icon" width="50" height="50" xlink:href="data:img/png;base64,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"/>
        </svg>
        <div class="arrow" style="background: #f2ca79"></div>
        <p style="background: #f2ca79">There are 5 new twitter messages are waiting you for reply them !</p>
    </div>
    <div class="notif">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50">
            <image id="_" data-name="$" width="50" height="50" xlink:href="data:img/png;base64,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"/>
        </svg>
        <div class="arrow" style="background: #b5d07e"></div>
        <p style="background: #b5d07e">There are 5 new twitter messages are waiting you for reply them !</p>
    </div>
</div>
</template>

<script>

</script>

<style lang="less">
#chart12 {
    height: 100%;
}

#tb-12 {
    
    border-radius: 5px 5px 0 0;
    font-size: 16pt;
    padding-left: 15px;
    line-height: 60px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    background: #fafafa;
}

#tp-12-icon {
    float: right;
    margin-right: 25px;
    line-height: 60px;
}

#tp-12-icon svg {
    vertical-align: middle;
}

.notif {
    height: 80px;
    color: white;
    display: flex;
    align-items: center;
}

.notif p {
    display: inline-block;
    margin: 0;
    line-height: 50px;
    width: 80%;
    padding-left: 25px;
    border-radius: 13px;
    font-weight: 600;
    margin-left: 35px;
}

.notif svg {
    margin-left: 20px;
}

.arrow {
    position: absolute;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    left: 99px;
}

</style>