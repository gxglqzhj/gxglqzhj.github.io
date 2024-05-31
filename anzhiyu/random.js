var posts=["undefined/clwus28v90001rsumdyo0660k/","undefined/clwus28ve0003rsum1cwg0xls/","undefined/clwus28vh0005rsum6lz41n6z/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };