import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { User } from "../../shared/interfaces";
import { signin, user } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { SpinnerComponent } from "../spinner/spinner.component";

export const SigninComponent: FC = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<User>({mode: "all"})
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitData = (data: User) => {
    setLoading(true);
    signin({username: 'mor_2314', password: '83r5^_'})
        .then(response => {
          const {status, data} = response;
          if (status === 200) {
            user.authenticated = true;
            user.token = data.token;
            navigate('/store')
          }
          setLoading(false);
        })
  }
  return (
      <>
        {loading && <SpinnerComponent />}
        <form onSubmit={handleSubmit(submitData)}>
          <div className="form-control">
            <label htmlFor="username">Login</label>
            <input {...register("username", {required: true})} type="text"/>
          </div>
          {errors.username && <div className="error">Name is required</div>}
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input {...register('password', {required: true})} type="password"/>
          </div>
          {errors.password && <div className="error">Password is required</div>}
          <div className="form-control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
  );
}