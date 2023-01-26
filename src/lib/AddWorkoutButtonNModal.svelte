<script>
  import { workoutIds, workoutIdNameRef, workoutIdInfo } from "../stores";

  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }

  let workoutName = "";

  function nameToId(name) {
    return name.replace(/\s/g, "").toLowerCase();
  }

  function initWorkoutInfo(id) {
    $workoutIdInfo[id] = {
      max: {
        date: "",
        weight: 0,
        reps: 0,
      },
      history: [],
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const workoutId = nameToId(workoutName);
    if ($workoutIds.includes(workoutId)) {
      alert("Workout already exists");
      return;
    }
    // check if workout name is empty
    if (workoutName === "") {
      alert("Workout name cannot be empty");
      return;
    }
    $workoutIds = [...$workoutIds, workoutId];
    $workoutIdNameRef[workoutId] = workoutName;
    initWorkoutInfo(workoutId);

    workoutName = "";
    toggleModal();
  }
</script>

<main>
  <button
    class="flex items-center justify-center w-full px-8 py-4 font-bold transition bg-blue-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-blue-50"
    on:click={toggleModal}
  >
    Add Workout
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
              <h2 class="mt-4 text-3xl font-medium">Add Workout</h2>

              <div class="relative mt-4">
                <label
                  class="block text-xs font-medium text-gray-500"
                  for="text"
                >
                  Workout Name
                </label>

                <input
                  class="relative w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
                  autocomplete="off"
                  id="name"
                  type="text"
                  bind:value={workoutName}
                />
              </div>

              <div
                class="flex flex-row flex-wrap justify-evenly space-x-3 mt-4"
              >
                <button
                  class="relative inline-block text-sm font-medium text-red-600 group active:text-red-500 focus:outline-none focus:ring mb-1"
                  on:click={toggleModal}
                >
                  <span
                    class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-red-600 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
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
                    class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                  />

                  <span
                    class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest border-2 border-current"
                  >
                    ADD
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
