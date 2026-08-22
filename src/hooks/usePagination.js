import { useMemo, useState } from 'react';

export function usePagination(items, pageSize) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const pageItems = useMemo(() => {
    const start = page * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  function onPrev() {
    setPage((p) => Math.max(0, p - 1));
  }

  function onNext() {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  }

  return { page, totalPages, pageItems, onPrev, onNext };
}
