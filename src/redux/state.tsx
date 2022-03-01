export type MessagesType = {
    id: number
    message: string
}
export type DialoguesType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type RootStateType = {
    posts: PostsType[]
    dialogues: DialoguesType[]
    messages: MessagesType[]
}

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 34},
        {id: 2, message: "Need more time!!", likesCount: 135},
        {id: 3, message: "Great app", likesCount: 78},
        {id: 4, message: "It's my first post", likesCount: 14}
    ],
    dialogues: [
        {id: 1, name: 'Chris'},
        {id: 2, name: 'Kristen'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Mary'},
        {id: 5, name: 'Zac'},
        {id: 6, name: 'Carey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it goin?'},
        {id: 3, message: 'Awesome!'}
    ]
}

export let addPost = (postMessage: string) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.posts.push(newPost)
}
export default state;