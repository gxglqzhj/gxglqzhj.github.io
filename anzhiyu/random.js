var posts=["cn/NUdRGTH2/","cn/7xbit/","cn/7x6c2/","cn/j1s9j/","cn/xh01w/","cn/7xbi2/","cn/8dj0c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };