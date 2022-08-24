<template>
  <div class="flex flex-col items-center">
    <div
      class="bg-slate-900 text-slate-300 w-3/4 my-4 p-4 rounded-xl shadow-xl"
      v-for="blog in blogs"
      :key="blog.id"
    >
      <h3 class="text-lg font-semibold">{{ blog.title }}</h3>
      <p class="font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        aspernatur consectetur doloremque sunt ducimus enim iure animi fugit
        nulla et! Perferendis autem deleniti quo eum corrupti reiciendis
        voluptatem ab ducimus?
      </p>
      <div class="flex">
        <div class="flex-1"></div>
        <span
          class="p-1 mt-1 transition-all duration-200 hover:translate-y-1 hover:scale-105 hover:rotate-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M7.493 19.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 16.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3.75A.75.75 0 0115 3a2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 11.727a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507C2.28 20.482 3.105 21 3.994 21H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"
            />
          </svg>
        </span>
        <span
          class="p-1 mt-1 transition-all duration-200 hover:translate-y-1 hover:scale-105 hover:-rotate-12"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M15.73 4.5h1.035A7.465 7.465 0 0118 8.625a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 00-.322 1.672v.633A.75.75 0 019 21a2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 011.5 11.25c0-2.848.992-5.464 2.649-7.521C4.537 3.247 5.136 3 5.754 3H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const blogs = ref([
      { title: "Why Coffee is Better than Tea", id: 1 },
      { title: "...Then I Took an Arrow in the Knee", id: 2 },
      { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);

    return {
      blogs,
    };
  },
});
</script>
