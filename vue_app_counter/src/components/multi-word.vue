<template>
    <h1 :style="{color:red, fontSize:'50px'}" >{{ msg2 }}</h1>
    <button @click="msg2++"><h1>{{ double }}</h1></button>
    
    <hr>
    <button @click="awesome = !awesome"  >Toggle</button>
    <h1 v-if="msg2 %2 === 0 || awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <select v-model="state"  >
                    <option value="Asam">Asam</option>
                    <option value="Delhi" >Delhi</option>
                    <option value="Rajisthan">Rajisthan</option>
                    <option value="Hariyana">Hariyana</option>
                    <option value="Up">Uttar Pradesh</option>
    </select>
    <h1>{{ state }}</h1>
</template>

<script setup >
// import { computed } from "@vue/reactivity";
import { ref , computed} from "vue";
const red = ref("blue")
const msg2 = ref(0)
const double = computed(()=> msg2.value * 2)
// console.log(isRef(double))
const awesome = ref(true)

const state = ref("Delhi")
console.log(state)
// const vue ;
</script>

<style >
*{
  text-align: center;
  padding: 0px;
}
button{
    padding: 0px 20px;
    border-radius: 10px;
    filter: drop-shadow();
    /* -webkit-box-reflect: below -5px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.2)); */
}
</style>