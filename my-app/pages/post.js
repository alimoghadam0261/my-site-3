import React from 'react';
import axios from 'axios'

const MyComponent = ({posts}) => {

    return (
        <div>
            <ul>
                {posts.map(post=>{
                    return(
                        <li key={post.id}>{post.title}</li>
                    )
                })}

            </ul>
        </div>
    );
};
export async function getStaticProps(){
const response = await axios.get('http://localhost:3001/posts')
    return{
    props:{
        posts:response.data,
    }
    }
}
export default MyComponent;
