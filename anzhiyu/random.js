var posts=["cn/7xbit/","cn/NUdRGTH2/","cn/xh01w/","cn/7xbi2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };