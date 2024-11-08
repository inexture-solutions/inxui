import { toast } from "@inexture/toast";
import { QueryKey, useMutation, UseMutationOptions, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { useApiToken } from "./useApiTokenStore";

// Custom hook for API calls
const api = 'https://api.dev.portal.inexture.com/api/v1';
const useApiCall = <T>(endpoint: string, options: RequestInit = {}) => {
    const token = useApiToken();

    return async (data?: any): Promise<T> => {  // Accept data as an optional parameter
        if (!token) {
            toast.error('User is not authenticated. Please log in.');
            throw new Error('User is not authenticated');
        }

        const defaultHeaders = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',  // Set Content-Type for JSON payloads
            ...(options.headers || {}),
        };

        // Determine if the request method allows a body
        const method = options.method?.toUpperCase() || 'GET';
        const isBodyAllowed = ['POST', 'PUT', 'DELETE'].includes(method);

        try {
            const response = await fetch(`${api}${endpoint}`, {
                ...options,
                headers: defaultHeaders,
                body: isBodyAllowed && data ? JSON.stringify(data) : undefined,  // Attach data only for allowed methods
            });

            if (!response.ok) {
                if (response.status === 401) {
                    toast.error('Your session has expired. Please log in again.');
                } else {
                    toast.error(`API call failed with status: ${response.status}`);
                }
                throw new Error(`API call failed with status: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            toast.error('An unexpected error occurred');
            throw error;
        }
    };
};


// Generic function to get query hooks with dynamic options
export const getQuery = <T>(
    queryKey: QueryKey,
    endpoint: string
) => {
    return (options: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'> = {}) => {
        const apiCall = useApiCall<T>(endpoint);
        const token = useApiToken();
        const queryClient = useQueryClient();

        return {
            ...useQuery<T, Error>({
                queryKey,
                queryFn: apiCall,
                enabled: !!token && options.enabled !== false,
                ...options,
            }),
            invalidate: () => queryClient.invalidateQueries(queryKey as any),
        };
    };
};

export type HttpMethod = 'POST' | 'PUT' | 'DELETE';
type EndpointParam<TVariables> = string | ((variables: TVariables) => string);

export const mutation = <TData = unknown, TError = unknown, TVariables = unknown, TContext = unknown>(
    endpoint: EndpointParam<TVariables>,
    method: HttpMethod,
    options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
) => {
    const apiCall = useApiCall<TData>(typeof endpoint === 'string' ? endpoint : '', { method });

    return useMutation<TData, TError, TVariables, TContext>({
        mutationFn: async (variables: TVariables) => {
            const response = await apiCall(variables);
            return response as TData;
        },
        ...options,
    });
};

