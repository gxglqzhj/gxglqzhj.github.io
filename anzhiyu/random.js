var posts=["2024/04/12/hello-world/","2024/05/30/每日计划/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };