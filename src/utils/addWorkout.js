export function addWorkout(workout) {
  // remove spaces and convert to lowercase
  const workoutId = workout.replace(/\s/g, "").toLowerCase();

  // Add workout to a list of workouts from local storage
  const workoutIds = JSON.parse(localStorage.getItem("workoutIds") || "[]");
  workoutIds.push(workoutId);
  localStorage.setItem("workoutIds", JSON.stringify(workoutIds));

  // Add reference to workout name to workout id in local storage
  const workoutIdNameRef = JSON.parse(
    localStorage.getItem("workoutIdNameRef") || "{}"
  );
  workoutIdNameRef[workoutId] = workout;
  localStorage.setItem("workoutIdNameRef", JSON.stringify(workoutIdNameRef));
}
