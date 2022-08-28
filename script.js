let btn__notification = document.querySelector('.btn__notificaiton');
let logo = './iamge/helloWorldLogo.png'

function notifyMe() {
    var notificaion = new Notification('Notification is working))', {
        tag: 'ache-mail',
        body: 'It was awesome))',
        icon: logo
    })
}

function setNotification() {
    if(!("Notification" in window))
        alert("Your browser does not support notifications.");
    else if (Notification.permission === 'granted')
        setTimeout(notifyMe, 2000);
    else if(Notification.permission !== 'denied')
        Notification.requestPermission ( function (permission) {
            if(!('permission' in Notification))
                Notification.permission = permission
            if(permission === 'granted')
            setTimeout(notifyMe, 2000);
        })
}


btn__notification.addEventListener('click', setNotification)