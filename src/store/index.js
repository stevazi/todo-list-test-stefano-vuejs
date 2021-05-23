import { createStore } from 'vuex'

export default createStore({
    state: {
        isUserSet: false,
        currentUser: null,
        lastUserId: 2,
        lastTodoId: 2,
        filter: "all",
        todos: [{
                'id': 0,
                'title': 'ciao',
                'user_id': 0,
                'isEditing': false,
                'isDone': false,
                'completedBy_id': 1
            },
            {
                'id': 1,
                'title': 'buonasera',
                'user_id': 1,
                'isEditing': false,
                'isDone': true,
                'completedBy_id': 0
            }
        ],
        users: [{
            id: 0,
            name: 'stefano'
        }, {
            id: 1,
            name: 'Giulia'
        }]
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        usersLenght(state) {
            console.log(state.users.length())
            return state.users.length()
        },
    }
})