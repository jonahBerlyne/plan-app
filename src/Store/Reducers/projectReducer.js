const initState = {
 projects: [
  {id: '1', title: "title un", content: "one"},
  {id: '2', title: "title deux", content: "two"},
  {id: '3', title: "title trois", content: "three"},
 ]
}

export default function projectReducer (state = initState, action) {
 switch (action.type) {
  case 'CREATE_PROJECT':
   console.log('created project', action.project);
 }
 return state;
}