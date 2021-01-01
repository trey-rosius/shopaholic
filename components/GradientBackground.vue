<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 -4 15 5"
    class="svg_bg"
    :aria-labelledby="iconName"
    role="presentation"
  >
     <defs>
             <linearGradient id="gradient">
          <stop class="main-stop" offset="0%" />
               <stop class="middle-stop" offset="50%" />
          <stop class="alt-stop" offset="100%" />
        </linearGradient>
          </defs>
            <path class="bg" d="M 0 0 C 2 0 6 -2 8 0 C 10 2 12 -2 14 0 V -5 L -1 -5 V -1 A 1 1 0 0 0 0 0" />
      
  </svg>
</template>
<script>
export default {
    props:{
        iconname:{
            type:String,
            default:'gradient-header'
            }
        }
}
</script>


<style lang="scss">
.svg_bg{
width:100vw;
  }
.main-stop {
      stop-color: #fccb90;
    }
    .middle-stop{
      stop-color:#d57eeb;
    }
    .alt-stop {
      stop-color: #a6c0fe;
    }
    .bg{
      fill:url(#gradient);
      background-repeat: no-repeat;
    }

</style>