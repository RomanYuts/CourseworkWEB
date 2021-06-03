/* eslint-disable no-unused-vars */

function SideBar() {
    var bar = document.getElementById('sidebar-nav');
    var cont = document.getElementById('content');
    var buttons = document.getElementsByClassName('menu-button');
    var menuItemName = document.getElementsByClassName('menu-item-name');
    var collbutton = document.getElementById('menu-collapse-button');
    if(bar.style.width!='50px')
    {
        document.getElementById('starter-page-button').focus();
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.paddingLeft="10px";
            menuItemName[i].style.color = "#232730";
        }
        bar.style.width='50px';
        cont.style.marginLeft='50px';
        cont.style.width='calc(100% - 50px)';
        collbutton.style.transform = 'rotate(0.5turn)';
    }
    else
    {
        document.getElementById('starter-page-button').focus();
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.paddingLeft="30px";
            menuItemName[i].style.color = "#a3aab4";
        }
        bar.style.width='320px';
        cont.style.marginLeft='320px';
        cont.style.width='calc(100% - 320px)'
        collbutton.style.transform = 'rotate(-0.5turn)';
    }
}

