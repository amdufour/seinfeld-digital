<script>
  import video_mp4 from '../../videos/prologue-intro-bg.mp4'
  import video_webm from '../../videos/prologue-intro-bg.webm'
  import cover_img from '../../images/S5E9_The-masseuse.jpg'
</script>

<div class="h-screen relative flex items-center">
  <video playsinline autoplay muted loop poster={cover_img}>
    <source src={video_webm} type="video/webm">
    <source src={video_mp4} type="video/mp4">
  </video>
  <div class="h-screen absolute z-10 readable-layer"></div>
  <div class="container grid grid-cols-1 lg:grid-cols-2 relative z-20">
    <div class="col-span-1 px-4">As my obsession with the show increased, so too did my interest in how it had become so successful and influential. What creative alchemy caused its success? After all, such accomplishments do not just happen through happy accidents or good fortune, certainly not when they are repeated and sustained over a period of nine years.</div>
  </div>
</div>

<style>
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .readable-layer {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(18,2,10,0) 0%, rgba(18,2,10,0.3) 50%, rgba(18,2,10,0) 100%);
  }
</style>