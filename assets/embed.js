var disqus_config = function () {
    this.page.url = '{{ site.url }}{{ site.baseurl }}{{ page.url }}';
    this.page.identifier = '{{ page.url }}';
  };
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://vinicius-lisboa.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();