var posts=["undefined/cluwmq1df0001jkumdabjaxwe/","undefined/clwtbr1z40000qcumhhg4gcnf/","undefined/clwuqklqq0000mwumbg66bmk0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };