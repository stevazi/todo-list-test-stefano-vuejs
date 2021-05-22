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
                'user_id': '0'
            },
            {
                'id': 1,
                'title': 'buonasera',
                'user_id': '1'
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
        todosFiltered(state) {
            if (state.filter == 'all') {
                return state.todos
            } else if (state.filter == 'active') {
                return state.todos.filter(todo => !todo.completed)
            } else if (state.filter == 'completed') {
                return state.todos.filter(todo => todo.completed)
            }

            return state.todos
        },
    }
})