import { ridesApi } from '@/entities/ride/api/ridesApi';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    [ridesApi.reducerPath]: ridesApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat(ridesApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type GetState = () => RootState;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
