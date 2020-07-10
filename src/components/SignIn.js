import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

const SignIn = () => {

  const [state, setState] = useState({email: '', password: '', warning: ''})
  // const warning = useSelector(state => state.warning)
  
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = e => {
    setState({...state, [e.target.name] : e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    // VALIDATE ALL FIELDS
    if(!state.email || !state.password) {
      // SHOW WARNING
      setState({...state, warning : 'All fields required *'})
      // dispatch(actions.showWarning('All fields required *'))
      return
    }
    if(!validateEmail(state.email)) {
      // SHOW WARNING
      setState({...state, warning : 'Please enter a valid email *'})
      // dispatch(actions.showWarning('Please enter a valid email *'))
      return
    }

    setState({...state, warning : ''})
    // dispatch(actions.clearWarning())

    // DISPATCH GOT USER
    // dispatch(actions.getUser(state))
    //   .then(() => {
    //     history.push('/home')
    //   })
  }

  const validateEmail = email => {
    // eslint-disable-next-line
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    // sourced from: https://flaviocopes.com/how-to-validate-email-address-javascript/
    return expression.test(String(email).toLowerCase())
  }
  return(
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='modal-title'>Sign In</div>
        <div className='form-item'>
          <div id='sign-in-email'>
            <div>Email:</div>
            <input type='text' name='email' value={state.email} onChange={handleChange}/>
          </div>
          <div id='sign-in-password'>
            <div>Password:</div>
            <input type='password' name='password' value={state.password} onChange={handleChange}/>
          </div>
          <div className='btn-container'>
            <div className='btn-item'>
              <div className='btn' type='submit' onClick={handleSubmit}>Submit</div>
            </div>
            {state.warning ? 
            <div className='warning'>{state.warning}</div>
            : null
            }
          </div>
          <div className='reminder'>
            <div>Don't have an account?</div>
            <Link to='/create-user' className='create-account-link'>Create an account</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn