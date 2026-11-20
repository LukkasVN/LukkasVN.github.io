import { useMemo, useState } from 'react';

export function usePagination(items, pageSize) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const pageItems = useMemo(() => {
    const start = page * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  function onPrev() {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }

  function onNext() {
    setPage((p) => (p + 1) % totalPages);
  }

  return { page, totalPages, pageItems, onPrev, onNext };
}
