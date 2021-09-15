import  React, {createContext,useReducer} from 'react'

import  appReducer  from './appReducer'

//creating initialState
    const initialState={
        transactions:[
            {id:1,detail:'salary received',amount:200},
            {id:2,detail:'Bill paid',amount:-150},
            {id:3,detail:'income from project',amount:250},
            {id:4,detail:'travelling',amount:-50},
        ]

    }
    

   //creating the Global Context
  export const GlobalData=createContext(initialState)
  //creating provider for the GlobalContext
  export const GlobalProvider=({children})=>{
      const [state, dispatch] = useReducer(appReducer, initialState)
      const updateTransaction=(transaction)=>{
          dispatch({type:'ADD',payload:transaction})
      }
      return(
        <GlobalData.Provider value={{transactions:state.transactions,updateTransaction}}>
            {children}
            </GlobalData.Provider>
            )
      
      }
      
  