import axios from 'axios';

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const instance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/',
    })

const postAPI = {
    getPosts() {
        return instance.get(`posts`).then(res => console.log(res.data))
    },
    getPostById(id: number) {
        return instance.get(`posts/${id}`).then(res => console.log(res.data))
    },
    createPost(body: {  title: string, body: string, userId: number}) {
        return instance.post(`posts`, {...body}).then(res => console.log(res.data))
    },
    updatePostById(postId: number, body: {  title: string, body: string, userId: number}) {
        return instance.put(`posts/${postId}`, {...body}).then(res => console.log(res.data))
    },
    deletePostById(postId: number) {
        return instance.delete(`posts/${postId}`).then(res => console.log(res.data))
    }
}

// just a plug
export default ()=>{};