var posts=["cn/NUdRGTH2/","cn/7x6c2/","cn/7xbit/","cn/j1s9j/","cn/ceshi/","cn/7xbi2/","cn/xh01w/","cn/8dj0c/","cn/sxgs0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };