import { useEffect, useState } from 'react';

export function useLabels(data) {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setLabels(
        data.map((item) => ({
          value: item.id,
          label: item.name
        }))
      );
    }
  }, [data]);

  return labels;
}
