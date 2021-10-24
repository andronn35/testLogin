import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classes from './LoginForm.module.css'
import { loginActionCreators } from './../../redux/reducers/login/action-creators';

const LoginForm = () => {

  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const {users, isAuth} = useSelector(state => state.loginPage)
  const dispatch = useDispatch()

  const checkedUser = users.find(user => user.userName === loginValue && user.password === passwordValue)

  useEffect(() => {
    if (checkedUser) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }  
  }, [checkedUser])

  const onButtonClick = () => {
    dispatch(loginActionCreators.setIsAuth(!isAuth))
  }

  return (
    <div className={classes.loginForm}>
      <form>
        <div className={classes.loginForm__Input}>
          login 
          <input 
            type='text'
            value={loginValue}
            onChange={e => setLoginValue(e.target.value)}
          />
        </div>
        <div className={classes.loginForm__Input}>
          password 
          <input
            type='password'
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
          />
        </div>
        <div className={classes.loginForm__Button}>
          <button 
            onClick={onButtonClick}
            disabled={buttonDisabled}>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
