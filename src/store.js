import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from './features/theme/themeSlice';
import { controlsReducer } from './features/controls/controlsSlice';
import { countryReducer } from './features/countries/countriesSlice';
import { detailsReducer } from './features/details/detailsSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
        details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
})