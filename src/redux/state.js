let store = {

    _state: {
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
                {id: 1, message: 'Hi...'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'YoYo'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('State cheng');
    },

    getState() {
        return this._state;
    },
    subscribe (observer)  {
        this._callSubscriber = observer; //наблюдатель observer

    },

    addMessage (messageText)  {
        // debugger;
        let newMessage = {
            id :9,
            message: messageText
        };
        this._state.dialogsPage.messages.push(newMessage);
    },

    dispatch(action) { // {  type : 'ADD-POST'}

        if (action.type === 'ADD-POST') {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount : 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export default store;
window.state = store;

// store -OOP