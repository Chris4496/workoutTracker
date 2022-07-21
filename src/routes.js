// Components
import Home from "./routes/Home.svelte";
import Workout from "./routes/Workout.svelte";
import NotFound from "./routes/NotFound.svelte";

// Export the route definition object
export default {
  // Exact path
  "/": Home,

  // Using named parameters, with last being optional
  "/workout/:id": Workout,

  // Catch-all, must be last
  "*": NotFound,
};
