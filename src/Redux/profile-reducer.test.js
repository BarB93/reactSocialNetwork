import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likes: 6,},
        {id: 2, message: 'учу реакт', likes: 23},
        {id: 3, message: 'вообще сил много', likes: 17},
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost('Some new text')
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
})

test('message of new post should be "Some new text"', () => {
    // 1. test data
    let action = addPost('Some new text')
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts[3].message).toBe('Some new text')
})

test('array of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts.length).toBe(2)
})

test('id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
})