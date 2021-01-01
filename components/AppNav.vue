<template>
  <header>
    <h1>Shopaholic</h1>
    <nav class=main>
      <ul class="nav">
        <li class="nav__link" >
          <nuxt-link exact to="/">Home</nuxt-link>
        </li>
        <li class="nav__link">
          <nuxt-link to="/all">All Products</nuxt-link>
        </li>
        <li class="nav__link">
          <nuxt-link to="/women">About Us</nuxt-link>
        </li>
        <li class="nav__link">
          <nuxt-link to="/men">Contact</nuxt-link>
        </li>
       
      </ul>

      <ul class="nav_icons">
         <li class="icons">
          <nuxt-link exact to="/cart"><search-icon/></nuxt-link>
        </li>
        <li class="icons">
        
          <nuxt-link exact to="/cart"><cart-icon/></nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SearchIcon from '@/components/SearchIcon.vue';
import CartIcon from '@/components/CartIcon.vue';
import { mapGetters } from "vuex";


export default {
  components:{
    SearchIcon,
    CartIcon
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
  
};
</script>

<style lang="scss" scoped>
header {
  display: flex;

  flex-direction: row;
  align-items: center;

  width:100vw;
 
  

  font-weight: bold;
 
  padding: 20px 40px 20px 40px;

 
}
.main{
     display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width:100vw;
  }
.nav_icons{
  display: flex;
  list-style: none;
}
.icons{
  padding-left: 20px;
}
.nav{
list-style:none;
  padding-left: 5px;
   margin-left: 20px;
   border-bottom: white 2px solid;


   
   display: flex;
   justify-content: space-between ;

   &__link{
padding: 20px;

       }
 

     &__link:link,
    &__link:visited{
font-size: 1.7rem;

text-decoration: none;

text-transform: uppercase;
text-align: center;
padding: 20px;

transition: all .2s;


    }
   &__link:hover,
   &__link:active{
    background-color: rgba($color: #fccb90, $alpha: 0.07);
    
    transform: translateY(-3px);
   }
   &__link--active{
    background-color: rgba($color:#fccb90, $alpha: 0.05);
    transform: translateY(-3px);
   }
   
   

  }

.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}


</style>