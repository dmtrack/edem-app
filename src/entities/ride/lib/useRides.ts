import { useEffect, useState } from 'react';
import { useGetPostsOnPageQuery } from '../api/ridesApi';
import { RideListType } from '../types/types';

export const useRides = (pageNum: number) => {
    let limit = 30;
    if (pageNum >= 2) limit = 10;
    const { data, isError, isLoading, error } = useGetPostsOnPageQuery({
        pageNum: pageNum,
        limit: limit,
    });
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
