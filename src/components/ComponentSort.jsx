import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export function ComponentSort({ pages, onSort }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByField = searchParams.get('sort') || 'id';
  const order = searchParams.get('order') || 'asc';

  const toggleOrder = () => {
    setSearchParams({
      sort: sortByField,
      order: order === 'asc' ? 'desc' : 'asc',
    });
  };

  const handleSortCange = (e) => {
    const newSortByField = e.target.value;
    setSearchParams({ sort: newSortByField, order });
  };

  const sortedFields = useMemo(() => {
    return [...pages].sort((a, b) => {
      if (a[sortByField] > b[sortByField]) return order === 'asc' ? 1 : -1;
      if (a[sortByField] < b[sortByField]) return order === 'asc' ? -1 : 1;
      return 0;
    });
  }, [pages, sortByField, order]);

  useEffect(() => {
    onSort(sortedFields);
  }, [sortedFields, onSort]);

  return (
    <div className="sortBlock">
      <div>
        <label>
          <span>сортировать по полю :</span>
          <select value={sortByField} onChange={handleSortCange}>
            {Object.keys(pages[0]).map((el, i) => {
              return (
                <option key={i} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <div>
        <button onClick={toggleOrder}>
          сортировать по {order === 'asc' ? 'убыванию' : 'возрастанию '}
        </button>
      </div>
    </div>
  );
}
