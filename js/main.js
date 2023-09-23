function isMobile(){
    const userAgent = navigator.userAgent.toLowerCase()
    const mobilekey = ['iphone','ipod','android','windows phone','blackberry','tablet','mobile']
    return mobilekey.some(keyword => userAgent.includes(keyword))
}
if (document.referrer != "sdfhdjsf.github.io" || document.referrer != "tiwo.eu.org"){
    alert("404");
} else if(isMobile){
    alert('禁止访问，请使用电脑访问');
}
