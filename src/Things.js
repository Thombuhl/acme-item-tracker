import React from 'react';
import ThingForm from './ThingForm';
import { connect } from 'react-redux';
import axios from 'axios';

const Things = ({ things, users, DELETETHING, Increment, Decrement})=> {
  return (
    <div>
      <h1>Things</h1>
      <ul>
        {
          things.map( thing => {
            const user = users.filter(user => user.thingId === thing.id)
            
            return (
              <li key={ thing.id }>
               Thing: { thing.name }  Ranking:{thing.ranking} Owner: {user.name}
                <button onClick={() => DELETETHING(thing.id)}>X</button>
                <button onClick={()=> Increment(thing.id)}>+</button>
                <button onClick={()=> Decrement(thing.id)}>-</button>
              </li>
            );
          })
        }
      </ul>
      <ThingForm />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    things: state.things,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DELETETHING: async(id)=> {
      await axios.delete(`/api/things/${id}`)
      dispatch({type: 'DELETE_THING', id})
    },
    Increment: async(id)=> {
      const response = await axios.put(`/api/things/IncrementRANK/${id}`)
      const thingPlus = response.data
      dispatch({type: 'INCREMENT', thingPlus})
    },
    Decrement: async(id)=> {
      const response = await axios.put(`/api/things/DecrementRANK/${id}`)
      const thingMinus = response.data
      dispatch({type: 'DECREMENT', thingMinus})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Things);
