const imageData = [
    {
      src: 'https://wallpapers.com/images/hd/left-4-dead-dark-carnival-poster-060e506spmsts614.jpg',
      
    },
    {
      src: 'https://i.ytimg.com/vi/YXGOHyR5fpQ/maxresdefault.jpg',
    
      
    },
    {
      src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174581/ss_2af3c51be3f7a1df2d69acc9d9ffdaa1b4234790.1920x1080.jpg?t=1657116508',
      
      
    },
    {
        src: 'https://i.ytimg.com/vi/8i8TTurTNM0/maxresdefault.jpg',
        
        
      },
      {
        src: 'https://cdn.vox-cdn.com/thumbor/J8kxNMjHQC8JS9u_tJCCjmqLNCs=/0x0:1568x1200/1400x788/filters:focal(784x600:785x601)/cdn.vox-cdn.com/uploads/chorus_asset/file/21907835/laststand_embed.jpg',
        
        
      },
      {
        src: 'https://static.toiimg.com/thumb/msid-83779337,width-1280,height-720,resizemode-4/.jpg',
        
        
      }
  ];
  
  
  let currentImageIndex = 0;
  const images = [
  'https://wallpapers.com/images/hd/left-4-dead-dark-carnival-poster-060e506spmsts614.jpg',
  'https://i.ytimg.com/vi/YXGOHyR5fpQ/maxresdefault.jpg',
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1174581/ss_2af3c51be3f7a1df2d69acc9d9ffdaa1b4234790.1920x1080.jpg?t=1657116508',
  'https://i.ytimg.com/vi/8i8TTurTNM0/maxresdefault.jpg',
  'https://cdn.vox-cdn.com/thumbor/J8kxNMjHQC8JS9u_tJCCjmqLNCs=/0x0:1568x1200/1400x788/filters:focal(784x600:785x601)/cdn.vox-cdn.com/uploads/chorus_asset/file/21907835/laststand_embed.jpg',
  'https://static.toiimg.com/thumb/msid-83779337,width-1280,height-720,resizemode-4/.jpg'
  ];
  
  document.querySelector('.button').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= imageData.length) {
      currentImageIndex = 0;
    }
    
    const currentImage = imageData[currentImageIndex];
    document.querySelector('#image').src = currentImage.src;
    document.querySelector('.image-title').textContent = currentImage.title;
  });
  document.querySelector('.button2').addEventListener('click', function() {
    currentImageIndex--;
    const currentImage = imageData[currentImageIndex];
    document.querySelector('#image').src = currentImage.src;
    document.querySelector('.image-title').textContent = currentImage.title;
  });



  const imageList = ['https://wallpaperaccess.com/full/1536515.jpg', 'https://preview.redd.it/8oa5m002ycc41.png?auto=webp&s=cd92c4f29b5bb323b488b9b41e8ef78dd67064e9', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1fe4bf6-77cc-4c2d-ba42-442eb8781700/d2zvjfu-d668d2cd-9110-40f0-bff2-9dcfa94c9fcb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxZmU0YmY2LTc3Y2MtNGMyZC1iYTQyLTQ0MmViODc4MTcwMFwvZDJ6dmpmdS1kNjY4ZDJjZC05MTEwLTQwZjAtYmZmMi05ZGNmYTk0YzlmY2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.z3vwUkUyCqQPhCM_165rsOG4FOmNbrjIV5xZrp1TGDw'];
  let currentIndex = 0;
  
  const backgroundElement = document.querySelector('.background1');
  
  function updateBackground() {
    backgroundElement.style.backgroundImage = `url(${imageList[currentIndex]})`;
    currentIndex = (currentIndex + 1) % imageList.length;
  }
  
  setInterval(updateBackground, 5000);
  
  