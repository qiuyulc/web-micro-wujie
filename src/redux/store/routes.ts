import { createSlice } from '@reduxjs/toolkit';

interface IMeta {
  title?: string;
}
interface IRoute {
  id: number | string;
  parent_id: number | string;
  label: string;
  path: string;
  key: string;
  icon?: string;
  layout?: string;
  meta: IMeta;
}

const initRoutes: IRoute[] = [];

const initialState: {
  routes: IRoute[];
} = {
  routes: [...initRoutes],
};

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
    deleteRoute: (state, action) => {
      state.routes = state.routes.filter(
        (route) => route.id !== action.payload,
      );
    },
  },
});

export default routesSlice.reducer;
