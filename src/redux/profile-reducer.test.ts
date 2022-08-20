import profileReducer, {addPostAC, deletePostAC} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 34},
        {id: 2, message: "Need more time!!", likesCount: 135},
        {id: 3, message: "Great app", likesCount: 78},
        {id: 4, message: "It's my first post", likesCount: 14}
    ],
    profile: null,
    status: '',
    photos: {small: null, large: null}
}

test('new post should be added', () => {
    // 1. test data
    let action = addPostAC('hello')

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].message).toBe('hello')
});

test('post should be deleted', () => {
    // 1. test data
    let action = deletePostAC(1)

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});