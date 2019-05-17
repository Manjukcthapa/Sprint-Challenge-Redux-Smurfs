import{FETCHING_SMURFS,SMURFS_FETCH_SUCCESS,SMURFS_FETCH_FAILURE,ADD_SMURFS_START,ADD_SMURFS_SUCCESS,  ADD_SMURFS_FAILURE} from "../actions"

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this

*/

const initialState = {
  smurfs: [],
  fetchingSmurf:false,
  error:null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state = initialState, action) => {

  switch(action.type) {

    case FETCHING_SMURFS:
    return {...state, fetchingSmurf: true};

  case SMURFS_FETCH_SUCCESS:
    return {...state,
            fetchingSmurf: false,
            smurfs: [...state.smurfs, ...action.payload]
    };

  case SMURFS_FETCH_FAILURE:
    return {
      ...state, fetchingSmurf: false, error: action.payload
  
    };
    case ADD_SMURFS_START:    
     return { ...state,     
       addingSmurf: true } 
       case ADD_SMURFS_SUCCESS:     
       return { ...state, addingSmurf: false,  smurfs: action.payload     }
          case ADD_SMURFS_FAILURE:     
          return {...state,  addingSmurf: false, error: action.payload     } 
   

    default: 
    return {...state}; 
}

}

export default rootReducer;



