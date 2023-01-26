<script>
  import { workoutIds, workoutIdNameRef, workoutIdInfo } from "../stores";

  export let workoutId;

  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(workoutId);
    // remove workout from workoutIds
    workoutIds.update((ids) => {
      return ids.filter((id) => id !== workoutId);
    });
    // remove workout from workoutIdNameRef
    workoutIdNameRef.update((ref) => {
      delete ref[workoutId];
      return ref;
    });
    // remove workout from workoutIdInfo
    workoutIdInfo.update((info) => {
      delete info[workoutId];
      return info;
    });
    location.replace("/");
    toggleModal();
  }
</script>

<main>
  <button
    class="flex items-center justify-center w-full my-5 px-8 py-4 font-bold transition bg-red-500 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-blue-50"
    on:click={toggleModal}
  >
    Delete Workout
  </button>
  {#if showModal}
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative my-6 mx-3 w-full md:w-3/5 lg:w-5/12">
        <!-- content -->
        <div class="relative block mx-5 md:mx-2">
          <span class="absolute inset-0 border-2 border-black border-dashed" />

          <div
            class="relative flex items-end h-full bg-white border-2 border-black -translate-x-2 -translate-y-2"
          >
            <div class="p-8 transition-opacity opacity-100 relative w-full">
              <h2 class="mt-4 text-3xl text-red-600 font-medium">
                Delete Workout
              </h2>
              <p class="mt-2 text-sm text-gray-500">
                Are you sure you want to delete this workout?
              </p>
              <p class="mt-2 text-sm text-gray-500">All data will be lost.</p>

              <div
                class="flex flex-row flex-wrap justify-evenly space-x-3 mt-4"
              >
                <button
                  class="relative inline-block text-sm font-medium text-amber-500 group focus:outline-none focus:ring mb-1"
                  on:click={toggleModal}
                >
                  <span
                    class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-amber-500 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                  />

                  <span
                    class="relative block px-8 py-3 bg-white border border-current"
                  >
                    CANCEL
                  </span>
                </button>
                <button
                  class="relative inline-block group focus:outline-none focus:ring mb-1"
                  on:click={handleSubmit}
                >
                  <span
                    class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-red-500 group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                  />

                  <span
                    class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest border-2 border-current"
                  >
                    CONFIRM
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black" />
  {/if}
</main>
