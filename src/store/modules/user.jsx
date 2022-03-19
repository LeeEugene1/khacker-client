// 디스패치 함수를 통해서 액션을 불러온다
// 액션은 리듀서를 호출한다
// 리듀서는 최종적으로 스토어를 변경시킨다

// 액션타입(문자열)
export const HOST = 'http://localhost:3000'
export const USER_LOGIN = 'user/LOGIN'
export const USER_LOGOUT = 'user/LOGOUT'
export const USER_SIGNUP = 'user/create'

let isLogined = null
if (typeof window !== 'undefined') {
  isLogined = sessionStorage.getItem('isLogined')
}

// 액션생성함수
export function LOGIN({ isLogin }) {
  return {
    type: USER_LOGIN,
    payload: {
      isLogined: sessionStorage.setItem('isLogined', isLogin),
    },
  }
}
export function LOGOUT() {
  if (localStorage.getItem('userInfo')) localStorage.removeItem('userInfo')
  return {
    type: USER_LOGOUT,
  }
}

// 초기상태
const initialState = {
  // email:null,
  // password:null,
  //   user: isLogined ? true : null,
  user: isLogined,
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
        user: sessionStorage.removeItem('isLogined'),
      }
    default:
      return state
  }
}
