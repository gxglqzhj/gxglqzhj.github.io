var posts=["cn/NUdRGTH2/","cn/xh01w/","cn/7xbit/","cn/8dj0c/","cn/7xbi2/","cn/zxgjj/","cn/7x6c2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };