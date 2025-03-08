import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AllTypeIntarface } from '../type';

interface ComponentSortProps {
  pages: AllTypeIntarface[];
  onSort: React.Dispatch<React.SetStateAction<AllTypeIntarface[]>>;
}

export const ComponentSort: React.FC<ComponentSortProps> = ({
  pages,
  onSort,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByField: keyof AllTypeIntarface =
    (searchParams.get('sort') as keyof AllTypeIntarface) || 'id';
  const order = searchParams.get('order') || 'asc';

  const toggleOrder = () => {
    setSearchParams({
      sort: sortByField,
      order: order === 'asc' ? 'desc' : 'asc',
    });
  };

  const handleSortCange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortByField = e.target.value as keyof AllTypeIntarface;
    setSearchParams({ sort: newSortByField, order });
  };

  const sortedFields = useMemo(() => {
    return [...pages].sort((a, b) => {
      const valueA = a[sortByField] as string | number;
      const valueB = b[sortByField] as string | number;

      if (valueA > valueB) return order === 'asc' ? 1 : -1;
      if (valueA < valueB) return order === 'asc' ? -1 : 1;
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
};
