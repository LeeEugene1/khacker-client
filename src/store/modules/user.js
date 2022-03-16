// 디스패치 함수를 통해서 액션을 불러온다
// 액션은 리듀서를 호출한다
// 리듀서는 최종적으로 스토어를 변경시킨다

// 액션타입(문자열)
export const HOST = 'http://localhost:3000'
export const USER_LOGIN = 'user/LOGIN'
export const USER_LOGOUT = 'user/LOGOUT'
export const USER_SIGNUP = 'user/create'

// const is_logined = sessionStorage.getItem('is_logined')
const is_logined = null

// 액션생성함수
export function LOGIN({ is_logined }) {
  return {
    type: USER_LOGIN,
    payload: {
      is_logined: sessionStorage.setItem('is_logined', is_logined),
    },
  }
}
export function LOGOUT() {
  return {
    type: USER_LOGOUT,
  }
}

// 초기상태
const initialState = {
  // email:null,
  // password:null,
  user: is_logined ? true : null,
}

// 리듀서
export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      }
    case USER_LOGOUT:
      return {
        user: sessionStorage.removeItem('is_logined'),
      }
    default:
      return state
  }
}
