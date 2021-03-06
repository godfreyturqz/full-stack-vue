import axios from "axios";

const url = 'http://localhost:5000/api/posts/'

class PostService {
    //get posts
    // static getPosts(){
    //     return new Promise( (resolve, reject)=> {
    //         try {
    //             const res = axios.get(url)
    //             const data = res.data 
    //             resolve(
    //                 data.map(post=> ({
    //                     ...post,
    //                     createdAt: new Date(post.createdAt)
    //                 }))
    //             )
    //         } catch(err) {
    //             reject(err)
    //         }
    //     })
    // }
    static getPosts(){
        return (
            axios.get(url)
            .then(res =>
                res.data.map(post=> (
                    {
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }
                ))
            )
            .catch(err => console.log(err))
        )
    }

    //create posts
    static insertPost(text){
        return axios.post(url, {
            text: text
        })
    }

    //delete posts
    static deletePost(id){
        return axios.delete(`${url}${id}`)
    }

}

export default PostService