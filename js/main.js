var currentUrl = window.location.href;

if (currentUrl.endsWith("index.html")) {
  // 如果当前页面为 index.html，给予 referver
  var referer = document.referrer;
  
  // 将 referer 发送给服务器或进行其他处理
  // ...
} else {
  // 如果当前页面为其他页面，返回 404 错误
  // 你可以自行定义返回错误的方式，这里只是示例
  location.replace("/404.html");
}

function isMobile(){
    const userAgent = navigator.userAgent.toLowerCase()
    const mobilekey = ['iphone','ipod','android','windows phone','blackberry','tablet','mobile']
    return mobilekey.some(keyword => userAgent.includes(keyword))
}
if(isMobile){
    alert('禁止访问，请使用电脑访问');
}
