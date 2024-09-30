var posts=["cn/NUdRGTH2/","cn/xh01w/","cn/j1s9j/","cn/8dj0c/","cn/7x6c2/","cn/7xbi2/","cn/ceshi/","cn/7xbit/","cn/sxgs0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };