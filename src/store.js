import { createStore } from 'redux';

const initialState = {
  view: window.location.hash.slice(1),
  users: [],
  things: []
};

const store = createStore((state = initialState, action)=> { 
  if(action.type === 'SET_THINGS'){
    return {...state, things: action.things };
  }
  if(action.type === 'SET_USERS'){
    return {...state, users: action.users }; 
  }
  if(action.type === 'SET_VIEW'){
    return {...state, view: action.view }; 
  }
  if(action.type === 'CREATE_THING'){
    return {...state, things: [...state.things, action.thing ]}; 
  }
  if(action.type === 'CREATE_USER'){
    return {...state, users: [...state.users, action.user ]}; 
  }
  if(action.type === 'DELETE_USER'){
    return {...state, users: state.users.filter(_user => action.id !== _user.id)}; 
  }
  if(action.type === 'DELETE_THING'){
    return {...state, things: state.things.filter(thing => action.id !== thing.id)}; 
  }
  if(action.type === 'INCREMENT'){
    const thing = state.things.filter(thing => action.thingPlus.id === thing.id)[0];
    const thingId = thing.id
    if (!thing) return; 
    thing.ranking = action.thingPlus.ranking
    return {...state, things: [ ...state.things.filter(_thing => thingId !== _thing.id), thing]}; 
  }
  if(action.type === 'DECREMENT'){
    const thing = state.things.filter(thing => action.thingMinus.id === thing.id)[0];
    const thingId = thing.id
    if (!thing) return; 
    thing.ranking = action.thingMinus.ranking
    return {...state, things: [ ...state.things.filter(_thing => thingId !== _thing.id), thing]}; 
  }
  return state;
});

export default store;

