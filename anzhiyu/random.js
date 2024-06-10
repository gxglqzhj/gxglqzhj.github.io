var posts=["cn/NUdRGTH2/","cn/7xbit/","cn/7xbi2/","cn/xh01w/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };