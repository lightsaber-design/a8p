

  var masonry = new Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    useOwnImageLoader: false,
    debug: true,
    mobileFirst: true,
    columns: 1,
    margin: {
        y: 16,
        x: '2%',
    },
    breakAt: {
        1200: 4,
        940: 3,
        520: 2,
        400: 1
    },
  });
  