import { useEffect, useRef, useContext } from 'react'
import { FormContext } from 'pages/_app'
import { EMAIL_REGEX, PW_REGEX, ERROR_MSG, NICKNAME_REGEX } from 'src/common'

function FormInput({ id, label, errorMessage, setErrorMessage, ...inputProps }) {
  const { formData, initialFormData } = useContext(FormContext)

  const inputSelected = useRef(null)

  useEffect(() => {
    if (id === 'email') {
      inputSelected.current.focus()
    }
  }, [])

  const checkRegex = (inputId) => {
    const value = formData[inputId]
    let result
    if (value.length === 0) {
      result = 'required'
    } else {
      switch (inputId) {
        case 'email':
          result = EMAIL_REGEX.test(value) ? true : 'invalidEmail'
          break
        case 'password':
          result = PW_REGEX.test(value) ? true : 'invalidPassword'
          checkRegex('confirmPassword')
          break
        case 'confirmPassword':
          result = value === formData.password ? true : 'invalidPasswordCheck'
          break
        case 'nickname':
          result = NICKNAME_REGEX.test(value) ? true : 'invalidNickname'
          break
        default:
          return
      }
    }
    setErrorMessage((prev) => ({
      ...prev,
      [inputId]: result,
    }))
  }

  return (
    <div className="tab__input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputSelected}
        value={formData[id]}
        onChange={(e) => {
          setErrorMessage((prev) => ({ ...prev, [id]: e.target.value }))
        }}
        onBlur={() => checkRegex(id)}
        {...inputProps}
      />
      <div className="tab__input--error">{errorMessage[id] !== true ? ERROR_MSG[errorMessage[id]] : ''}</div>
    </div>
  )
}
export default FormInput
