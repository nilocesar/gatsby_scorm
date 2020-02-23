const initialState = {
  scormType: "", 
  indiceNav: 1
};

const TYPE_EVENT = 'SCORM_EVENT';

export const scormMode = ( eventNav , scormType = "" ) => ({ type: TYPE_EVENT, eventNav , scormType });

export default (state = initialState, action) => {
switch (action.type) {
  case TYPE_EVENT:
      {
        
        if( action.eventNav === "Scorm" ){

          alert('Scorm')

        }
        
        return { ...state, eventNav: action.eventNav , scormType: state.scormType }
      
      }
  default:
      return state;
  }
};

