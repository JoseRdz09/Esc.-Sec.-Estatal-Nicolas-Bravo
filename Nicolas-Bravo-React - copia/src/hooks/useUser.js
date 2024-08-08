import useSWR from 'swr';
import api from './api';

const fetcher = url => api.get(url).then(res => res.data);

const useUser = () => {
    const { data, error } = useSWR('/user', fetcher);
    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useUser;
