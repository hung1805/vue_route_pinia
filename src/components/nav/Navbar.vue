<template>
  <nav
    class="w-full min-h-[60px] px-5 lg:px-20 py-3 z-[4] flex flex-row justify-between items-center bg-gray-200 border-gray-200 border-b-[2px]"
  >
    <!-- Logo -->
    <div class="font-bold text-3xl uppercase text-black">Cart</div>
    <div class="flex flex-row gap-4 items-center">
      <!-- Cart -->
      <div class="text-[23px] text-black relative mr-5">
        <div class="cursor-pointer" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <i class="fa-solid fa-cart-shopping"></i>
          <div class="absolute text-xs -bottom-1 -right-3 bg-green-300 rounded-full px-2 py-1">2</div>
        </div>
        <div
          class="absolute top-[130%] left-0 w-[200px] h-[200px] rounded-md text-black border-1 border-gray-200 shadow-lg bg-white z-10 transition-all ease-linear duration-500"
          :class="!showDropdown && 'hidden'"
        >
          dropdown
        </div>
      </div>
      <!-- Sign In and Sign up Btn -->
      <div class="flex items-center gap-5">
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign In
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
        <button
          class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign Up
          <i class="fa-solid fa-user-plus"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
</script>
