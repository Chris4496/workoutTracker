<script>
  import TabNav from "../lib/TabNav.svelte";
  import NumberInput from "../lib/NumberInput.svelte";
  import DeleteWorkoutButtonNModal from "../lib/DeleteWorkoutButtonNModal.svelte";
  import DeleteRecordsButtonNModal from "../lib/DeleteRecordsButtonNModal.svelte";
  

  import { workoutIds, workoutIdNameRef, workoutIdInfo } from "../stores";

  export let params = {};

  const id = params.id;

  let tabs = {
    record: true,
    history: false,
    settings: false,
  };

  // code of record tab ------------------------------------------------------
  let reps = 0;
  let weight = 0;

  let maxReps = 0;
  let maxWeight = 0;

  let completedSets = [];
  // [
  // {
  //   weight: 6,
  //   reps: 10,
  // },
  // {
  //   weight: 5,
  //   reps: 10,
  // }
  // ]
  function addSet() {
    completedSets = [...completedSets, { weight, reps }];
    if (weight >= maxWeight && reps >= maxReps) {
      maxWeight = weight;
      maxReps = reps;
    }
  }

  function recordWorkout() {
    if (
      maxWeight >= $workoutIdInfo[id].max.weight &&
      maxReps >= $workoutIdInfo[id].max.reps
    ) {
      $workoutIdInfo[id].max.weight = maxWeight;
      $workoutIdInfo[id].max.reps = maxReps;
      $workoutIdInfo[id].max.date = new Date();
    }

    $workoutIdInfo[id].history = [
      { date: new Date(), sets: completedSets },
      ...$workoutIdInfo[id].history,
    ];

    // reset values
    reps = 0;
    weight = 0;
    completedSets = [];
    maxReps = 0;
    maxWeight = 0;

    // redirect to history tab
    tabs = {
      record: false,
      history: true,
      settings: false,
    };
  }
  // end of code of record tab ------------------------------------------------

  // code of history tab ------------------------------------------------------
  $: history = $workoutIdInfo[id].history;
  // end of code of history tab ------------------------------------------------

  // code of settings tab ------------------------------------------------------

  // end of code of settings tab ------------------------------------------------

  function setTab(tab) {
    Object.keys(tabs).forEach((key) => {
      tabs[key] = key === tab;
    });
  }
</script>

<main>
  <section class="text-black bg-white h-screen">
    <div class="absolute top-0 left-0 w-5 h-5">
      <a class="text-6xl md:text-8xl ml-5 md:ml-11" href="#/">&#8249;</a>
    </div>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto text-center ">
        <h1 class="text-5xl font-bold sm:text-6xl ">{$workoutIdNameRef[id]}</h1>
      </div>
    </div>
    <TabNav {tabs} {setTab} />
    {#if tabs.record}
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col items-center mb-8">
          <h3 class="text-2xl font-bold sm:text-3xl my-4">Reps:</h3>
          <NumberInput bind:number={reps} />
          <h3 class="text-2xl font-bold sm:text-3xl my-4">Weight (kg):</h3>
          <NumberInput bind:number={weight} />
          <button
            class="flex items-center justify-center px-8 py-4 my-6 font-bold transition bg-blue-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-blue-50"
            on:click={addSet}
          >
            Add Set
          </button>
        </div>
        <h2 class="text-3xl font-bold sm:text-5xl">Completed Sets</h2>
        <hr class="border-t-2 border-black border-dashed" />
        <div class="m-5">
          <ol class="list-decimal list-inside">
            {#each completedSets as set}
              <li class="text-md font-bold sm:text-lg my-1">
                {set.reps} reps @ {set.weight} kg
              </li>
            {/each}
          </ol>
        </div>
        <button
          class="flex items-center justify-center w-full px-8 py-4 font-bold transition bg-blue-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-blue-50"
          on:click={recordWorkout}
        >
          Record Workout
        </button>
      </div>
    {/if}
    {#if tabs.history}
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col">
          <h2 class="text-3xl font-bold sm:text-5xl">History</h2>
          {#each history as workout}
            <strong
              class="text-black border border-current border-dashed lowercase px-3 py-1.5 my-4 rounded text-lg font-medium"
            >
              {new Date(workout.date).toLocaleDateString()}
            </strong>

            <ol class="list-decimal list-inside">
              {#each workout.sets as set}
                <li class="text-lg font-bold sm:text-xl my-1">
                  {set.reps} reps @ {set.weight} kg
                </li>
              {/each}
            </ol>
          {/each}
        </div>
      </div>
    {/if}
    {#if tabs.settings}
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col">
          <h2 class="text-3xl font-bold sm:text-5xl">Settings</h2>
          <DeleteRecordsButtonNModal workoutId={id} />
          <DeleteWorkoutButtonNModal workoutId={id} />
        </div>
      </div>
    {/if}
  </section>
</main>
