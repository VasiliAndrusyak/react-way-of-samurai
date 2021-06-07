let rerenderEntireTree = () => {
    console.log('State cheng');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you...............?', likesCount: 12},
            {id: 2, message: 'It\'s my first post............', likesCount: 11},
            {id: 3, message: 'blaBla............', likesCount: 11},
            {id: 4, message: 'Dada...', likesCount: 11},
        ],
        newPostText: 'it-kamasutra.com',

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 5, message: 'wwwwwwwwwwwwwwwwwwwYo'},
            {id: 6, message: 'YoYo'}
        ]
    },
    sidebar: {}
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount : 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = (messageText) => {
   // debugger;
    let newMessage = {
        id :9,
        message: messageText
    };
    state.dialogsPage.messages.push(newMessage);
}


export default state;