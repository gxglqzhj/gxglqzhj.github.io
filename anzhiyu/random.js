var posts=["cn/NUdRGTH2/","cn/7xbit/","cn/xh01w/","cn/7xbi2/","cn/7x6c2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };