import { useEffect, useState } from 'react';
import { APIMealResponseData, Meal } from '../types/APIMealsResponseData';
import axios from 'axios';

const useGetChickenMeals = (keyword: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<Meal[]>([]);

  useEffect(() => {
    axios
      .get<APIMealResponseData>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
      )
      .then(response => response.data)
      .then(data => {
        setLoading(false);
        if (data.meals !== undefined) {
          setItems(data.meals);
        }
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });

    return () => {};
  }, [keyword]);

  return [loading, error, items] as const;
};

export default useGetChickenMeals;
