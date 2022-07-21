import { writable } from "svelte/store";

// workout ids two-way binding
export const workoutIds = writable(
  JSON.parse(localStorage.getItem("workoutIds") || "[]")
);

workoutIds.subscribe(
  (value) => (localStorage.workoutIds = JSON.stringify(value))
);

// workout id name reference two-way binding
export const workoutIdNameRef = writable(
  JSON.parse(localStorage.getItem("workoutIdNameRef") || "{}")
);

workoutIdNameRef.subscribe(
  (value) => (localStorage.workoutIdNameRef = JSON.stringify(value))
);

// workout id info two-way binding

// example of workout id info:
// {
//  pushup: {
//     max: {
//         date: "2020-01-04",
//         weight: 100,
//         reps: 10
//     },
//     history: [
//         {
//             date: "2020-01-04",
//             sets: [
//                 {
//                     weight: 100,
//                     reps: 10
//                 },
//                 {
//                     weight: 100,
//                     reps: 10
//                 },
//                 {
//                     weight: 50,
//                     reps: 10
//                 }
//             ]
//         },
//         {
//             date: "2020-01-03",
//             sets: [
//                 {
//                     weight: 100,
//                     reps: 10
//                 },
//                 {
//                     weight: 100,
//                     reps: 10
//                 },
//                 {
//                     weight: 50,
//                     reps: 10
//                 }
//             ]
//         }
//     ]
//  }
//  squats: {...}
// }
export const workoutIdInfo = writable(
  JSON.parse(localStorage.getItem("workoutIdInfo") || "{}")
);
workoutIdInfo.subscribe(
  (value) => (localStorage.workoutIdInfo = JSON.stringify(value))
);
