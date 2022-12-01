import { FC } from "react";
import { useForm } from "react-hook-form";
import { User } from "../../shared/interfaces";
import { signup } from "../../services/user.service";

export const SignupComponent: FC<{func: () => void}> = (props) => {
  const {register, handleSubmit, formState: {errors}} = useForm<User>({mode: "all"});
  const submitData = (data: User) => {
    signup(data)
    props.func();
  }

  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return(
      <form onSubmit={handleSubmit(submitData)}>
        <div className="form-control">
          <label htmlFor="username">Login</label>
          <input {...register('username', {required: true, minLength: 2})} type="text"/>
        </div>
        {errors.username?.type === 'required' && <div className="error">Login is required</div>}
        {errors.username?.type === "minLength" && <div className="error">Login too short</div>}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input {...register('email', {required: true, pattern: emailPattern})} type="email" name="email" id="email"/>
        </div>
        {errors.email?.type === 'required' && <div className="error">Email is required</div>}
        {errors.email?.type === 'pattern' && <div className="error">Email is not valid</div>}
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input {...register('password', {required: true, minLength: 6})} type="password" name="password"
                 id="password"/>
        </div>
        {errors.password?.type === 'required' && <div className="error">Password is required</div>}
        {errors.password?.type === 'minLength' && <div className="error">Password must be longer than 6 symbols</div>}
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
  );
}