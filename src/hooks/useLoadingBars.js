import { useEffect, useState } from 'react';

export default function useLoadingBars() {
  const [loading, setLoading] = useState(true);
  const [barOrder, setBarOrder] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const indices = [...Array(7).keys()];
    const shuffled = indices.sort(() => Math.random() - 0.5);
    setBarOrder(shuffled);
  }, []);

  return { loading, barOrder };
}
