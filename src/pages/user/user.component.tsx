import './user.component.scss';
import {FC, useContext, useEffect, useState} from 'react';
import {User} from '../../shared/interfaces';
import {getUserInfo, updateUser} from '../../services/user.service';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {authContext} from '../../context/state';

export const UserComponent: FC = () => {
  const {dispatch} = useContext(authContext);
  const [userInfo, setUserInfo] = useState<User>({
    username: '',
    email: ''
  })
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm<User>({mode: 'all'})

  useEffect(() => {
    getUserInfo(1)
        .then(response => setUserInfo(response.data))
  }, [userInfo])

  const editModeToggle = (mode: boolean) => {
    setEditMode(mode);
  }

  const saveData = (data: User) => {
    updateUser(1, data)
    setEditMode(false)
  }

  const deleteUser = () => {
    dispatch({type: 'auth', payload: false});
    dispatch({type: 'token', payload: ''})
    navigate('/auth');
  }

  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
      <>
        <h2>User data</h2>
        <div className="user__data">
          <ul>
            <li>User name: {userInfo.username}</li>
            <li>Email: {userInfo.email}</li>
          </ul>
          <button className="button_edit" onClick={() => editModeToggle(true)}>Change data</button>
          <button className="button_delete" onClick={deleteUser}>Delete user</button>
        </div>
        {editMode &&
            <form onSubmit={handleSubmit(saveData)}>
              <div className="form-control">
                <label htmlFor="username">Login</label>
                <input {...register('username', {required: true, minLength: 2})} type="text" name="username"
                       id="username"/>
              </div>
              {errors.username?.type === 'required' && <div className="error">Login is required</div>}
              {errors.username?.type === 'minLength' && <div className="error">Login too short</div>}
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input {...register('email', {required: true, pattern: emailPattern})} type="email" name="email"
                       id="email"/>
              </div>
              {errors.email?.type === 'required' && <div className="error">Email is required</div>}
              {errors.email?.type === 'pattern' && <div className="error">Email is not valid</div>}
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input {...register('password', {required: true, minLength: 6})} type="password" name="password"
                       id="password"/>
              </div>
              {errors.password?.type === 'required' && <div className="error">Password is required</div>}
              {errors.password?.type === 'minLength' &&
                  <div className="error">Password must be longer than 6 symbols</div>}
              <div className="form-control">
                <button className="button_save" type="submit">Save</button>
                <button className="button_cancel" onClick={() => editModeToggle(false)}>Cancel</button>
              </div>
            </form>
        }
        <div className="disclaimer error">
        <span>
          With FakeStore API doesn't provide ability to real process of creating users.
        </span>
        </div>
      </>
  );
}