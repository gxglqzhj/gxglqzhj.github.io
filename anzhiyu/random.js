var posts=["cn/NUdRGTH2/","cn/7x6c2/","cn/7xbit/","cn/7xbi2/","cn/xh01w/","cn/sxgs0/","cn/ceshi/","cn/8dj0c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };