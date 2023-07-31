import { ADD_TODO, DELETE_ALL, REMOVE_TODO,UPDATE_TODO,UPDATE_CHECKBOX  } from "../actions";
const initialState=[
    {id: 1, todo: 'Read the report', completed: false},
    {id: 2, todo: 'write the report', completed: false},
    {id: 3, todo: 'figurs out what a report is', completed: false},
    {id: 4, todo: 'get someone to publish the report', completed: false},
   
];

export const operationsReducer=(state=initialState, action)=>{
  
    
        switch(action.type){
            case ADD_TODO:
                return [...state, action.payload];
            case DELETE_ALL:
                    return []; 
            case REMOVE_TODO:
                        const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
                        return filteredTodos;          
            case UPDATE_TODO:
                            let data = action.payload;
                            const updatedArray=[];
                            state.map((item)=>{
                                if(item.id===data.id){
                                    item.id = data.id;
                                    item.todo = data.todo;
                                    item.completed = data.completed;
                                }
                                updatedArray.push(item);
                            })
                            return updatedArray;
                            case UPDATE_CHECKBOX:
                                let todoArray=[];
                                state.map((item)=>{
                                    if(item.id===action.payload){
                                        item.completed = !item.completed;
                                    }
                                    todoArray.push(item);
                                })
                                return todoArray;
                                                                 
            default: return state;
        }
    
}