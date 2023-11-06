import { useEffect, useState } from 'react';
import { useGetPostsOnPageQuery } from '../api/ridesApi';
import { RideListType } from '../types/types';

export const useRides = (pageNum: number = 1) => {
    const { data, isError, isLoading, error } = useGetPostsOnPageQuery(
        `${pageNum}`
    );
    const [results, setResults] = useState<RideListType>([]);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        if (data) {
            setResults((prev) => [...prev, ...data]);
            setHasNextPage(Boolean(data.length));
        }
        const controller = new AbortController();

        return () => {
            return controller.abort();
        };
    }, [data]);

    return { isLoading, isError, results, hasNextPage, error };
};
