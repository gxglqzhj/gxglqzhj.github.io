var posts=["2024/04/12/hello-world/","2024/05/30/every-plan/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };