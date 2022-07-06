import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';


const Users = ({ users, DELETEUSER })=> {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.name }
                <button onClick={() => DELETEUSER(user.id)}>X</button>
              </li> 
            );
          })
        }
      </ul>
      <UserForm />
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {  
    DELETEUSER: async(id) => {
       await axios.delete(`/api/users/${id}`)
      dispatch({ type: 'DELETE_USER', id });

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
