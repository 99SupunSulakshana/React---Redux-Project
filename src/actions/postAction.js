import {FETCH_BUTTON_CLICKED,SELECT_POST} from './type'
import axios from 'axios';

// export const fetchPosts=()=>{
//     return{
//         type:'FETCH_BUTTON_CLICKED',
//         payload:[ 
//             {
//             userId:1,
//             id:1,
//             title:'React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two ...',
//             body:'What is Redux? Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it'
//             },
//             {
//                 userId:1,
//                 id:1,
//                 title:'React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two ...',
//                 body:'What is Redux? Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it'
//             }
//        ]
//     }

// }

export const fetchPosts=()=>dispatch=>{
   
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res=>{
            dispatch({
                type:FETCH_BUTTON_CLICKED,
                payload:res.data
            })
        })
    }


export const selectPost=(post)=>{
    return{
        type:SELECT_POST,
        payload:post
    }
};

