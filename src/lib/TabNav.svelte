<script>
  export let tabs;
  export let setTab;
</script>

<ul
  class="flex text-center border-b-2 border-black border-dashed max-w-screen-xl mx-auto"
>
  <li class="flex-1">
    <button
      class={`${
        tabs.record
          ? "relative block w-full p-4 text-lg font-medium bg-white border-t-2 border-l-2 border-r-2 border-black border-dashed"
          : "block w-full p-4 text-lg font-medium text-gray-500"
      }`}
      on:click={() => setTab("record")}
    >
      {#if tabs.record}
        <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px" />
      {/if}

      Record
    </button>
  </li>

  <li class="flex-1">
    <button
      class={`${
        tabs.history
          ? "relative block w-full p-4 text-lg font-medium bg-white border-t-2 border-l-2 border-r-2 border-black border-dashed"
          : "block w-full p-4 text-lg font-medium text-gray-500"
      }`}
      on:click={() => setTab("history")}
    >
      {#if tabs.history}
        <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px" />
      {/if}

      History
    </button>
  </li>

  <li class="flex-1">
    <button
      class={`${
        tabs.settings
          ? "relative block w-full p-4 text-lg font-medium bg-white border-t-2 border-l-2 border-r-2 border-black border-dashed"
          : "block w-full p-4 text-lg font-medium text-gray-500"
      }`}
      on:click={() => setTab("settings")}
    >
      {#if tabs.settings}
        <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px" />
      {/if}

      Settings
    </button>
  </li>
</ul>
