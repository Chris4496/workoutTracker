<script>
  import GridItem from "../lib/GridItem.svelte";
  import AddWorkoutButtonNModal from "../lib/AddWorkoutButtonNModal.svelte";

  import { workoutIds, workoutIdNameRef, workoutIdInfo } from "../stores";
</script>

<main>
  <section class="text-black bg-white h-screen">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto text-center ">
        <h2 class="text-3xl font-bold sm:text-4xl">Track Your Workout</h2>

        <p class="mt-4 text-black">
          ¨Most people fail, not because of lack of desire, but, because of lack
          of commitment.¨ - Vince Lombardi
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {#each $workoutIds as id}
          <GridItem
            {id}
            title={$workoutIdNameRef[id]}
            date={$workoutIdInfo[id].max.date}
            weight={$workoutIdInfo[id].max.weight}
            maxreps={$workoutIdInfo[id].max.reps}
          />
        {/each}
      </div>
    </div>

    <!-- Empty state -->
    {#if $workoutIds.length === 0}
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold sm:text-7xl my-4">Nothing's here🤷‍♂️</h1>
        <h1 class="text-4xl font-bold sm:text-7xl my-4">
          Add something &#8595
        </h1>
      </div>
    {/if}

    <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <AddWorkoutButtonNModal />
    </div>
  </section>
</main>
