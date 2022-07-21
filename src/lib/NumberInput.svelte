<script>
  export let number = 0;

  function incrementReps() {
    number++;
  }

  function decrementReps() {
    if (number <= 0) return;
    number--;
  }
</script>

<main>
  <div
    class="inline-flex items-center justify-center py-1 text-black bg-blue-100 rounded"
  >
    <button
      class="inline-flex items-center justify-center w-10 h-10"
      on:click={decrementReps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <span class="w-px h-4 bg-black/25" />

    <input
      type="number"
      class="w-14 p-0 text-sm font-medium text-center bg-transparent border-none rounded no-spinners"
      bind:value={number}
    />

    <span class="w-px h-4 bg-black/25" />

    <button
      class="inline-flex items-center justify-center w-10 h-10"
      min="0"
      on:click={incrementReps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</main>

<style>
  .no-spinners {
    -moz-appearance: textfield;
  }

  .no-spinners::-webkit-outer-spin-button,
  .no-spinners::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
</style>
