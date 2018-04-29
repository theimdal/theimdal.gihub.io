const r = new Router(
    {
      about: new Layout(new Page('menu.html'), new Page('about.html')),
      home: new Layout(new Page('menu.html'), new Page('home.html')),
      links: new Layout(new Page('menu.html'), new Page('links.html')),
      '#default': new Layout(new Page('menu.html'), new Page('home.html')),
    },
    document.querySelector('main')
  );
  