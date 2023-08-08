navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "user" } } })
  .then(function(stream) {
    var video = document.createElement('video');
    video.srcObject = stream;
    video.autoplay = true;
    video.playsinline = true;
    document.body.appendChild(video);

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    function draw() {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    
    // отправить видео поток на другие устройства
    const peer = new SimplePeer({
      initiator: location.hash === '#init',
      trickle: false,
      stream: stream
    })
    
    peer.on('signal', data => {
      // создать элемент input для получения данных передатчика
      const yourData = document.createElement('textarea')
      yourData.value = JSON.stringify(data)
      document.body.appendChild(yourData)
    })
    
    document.querySelector('form').addEventListener('submit', event => {
      event.preventDefault()
      const otherData = JSON.parse(document.querySelector('#otherData').value)
      peer.signal(otherData)
    })
    
    peer.on('stream', stream => {
      const video = document.createElement('video')
      document.body.appendChild(video)
      video.srcObject = stream
      video.play()
    })
    
  })
  .catch(function(err) {
    console.log('Ошибка при получении видео потока: ' + err);
  });
