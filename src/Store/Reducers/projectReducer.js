const initState = {
 projects: [
  {id: '1', title: "title un", content: "one"},
  {id: '2', title: "title deux", content: "two"},
  {id: '3', title: "title trois", content: "three"},
 ]
}

export default function projectReducer (state = initState, action) {
 return state;
}