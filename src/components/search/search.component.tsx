import {FC} from 'react';
import './search.component.scss';

type SearchComponentPropsType = {func: (value: string) => void;}

export const SearchComponent: FC<SearchComponentPropsType> = (props) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.func(e.target.value)
  }

  return (
      <form className="search">
        <input
            type="search"
            name="search"
            id="search"
            onChange={searchHandler}
        />
      </form>
  );
}