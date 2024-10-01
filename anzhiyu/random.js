var posts=["cn/7x6c2/","cn/NUdRGTH2/","cn/xh01w/","cn/7xbit/","cn/ceshi/","cn/8dj0c/","cn/7xbi2/","cn/sxgs0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };