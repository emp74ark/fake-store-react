import "./items.component.scss";
import React, { FC, useEffect, useState } from "react";
import { Item } from "../../shared/interfaces";
import { ItemComponents } from "../item/item.components";
import { getAll, getCategories } from "../../services/items.service";
import { SpinnerComponent } from "../spinner/spinner.component";

export const ItemsComponent: FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [filters, setFilters] = useState({
    limit: 10,
    sort: 'asc',
    category: ''
  })
  const [catergories, setCategores] = useState<string[]>([])
  const [loading, setLoading] = useState(false);
  const [filterVisibility, setFilterVisibility] = useState(false)

  useEffect(() => {
    getCategories().then(response => setCategores((response.data)));
  }, [])

  useEffect(() => {
    setLoading(true);
    const {category, limit, sort} = filters;
    getAll(category, limit, sort)
        .then(
            response => {
              const {status, data} = response;
              if (status === 200) {
                setLoading(false);
                setItems(data);
              }
            }
        );
  }, [filters])

  const onFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFilters({...filters, [name]: value,})
  }

  const onCategory = (category: string) => {
    setFilters({...filters, category: category})
  }

  const showFilters = () => {
    setFilterVisibility(!filterVisibility)
  }

  return (
      <>
        <h2>Items</h2>
        <div className="catalogue">
          {loading && <SpinnerComponent></SpinnerComponent>}
          <aside>
            <h3>
              <span>Search and filters</span>
              <span className="show" onClick={showFilters}>
                {!filterVisibility && <span>show</span>}
                {filterVisibility && <span>hide</span>}
              </span>
            </h3>
            <div className={filterVisibility ? 'category' : 'category show_active'}
                 onClick={() => onCategory('')}>All
            </div>
            {catergories.map(catergory => (
                <div
                    key={catergory}
                    className={filterVisibility ? 'category' : 'category show_active'}
                    onClick={() => onCategory(catergory)}>
                  {`${catergory[0].toUpperCase()}${catergory.slice(1, catergory.length)}`}
                </div>
            ))}
            <div className={filterVisibility ? 'filters' : 'filters show_active'}>
              <div className="filter">
                <label htmlFor="limit">On page</label>
                <select
                    name="limit"
                    id="limit"
                    defaultValue={filters.limit}
                    onChange={(e) => onFilter(e)}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="filter">
                <label htmlFor="sort">Sort</label>
                <select
                    name="sort"
                    id="sort"
                    defaultValue={filters.sort}
                    onChange={(e) => onFilter(e)}>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </aside>
          <div className="catalogue">
            <div className="items">
              {items.map((item) => (
                  <ItemComponents key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </>
  );
}