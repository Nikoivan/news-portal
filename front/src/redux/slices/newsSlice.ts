import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { NewsPortalItemProps } from '../../components/NewsPortal/Item/NewsPortal-Item';

type DetailsStateType = {
  news: NewsPortalItemProps[];
  lastNewsId: number | null;
  overflow: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: DetailsStateType = {
  news: [],
  lastNewsId: null,
  overflow: false,
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    requestNews: (state) => {
      state.loading = true;
      state.error = null;
      state.news = [];
    },
    requestToAddNews: (state, action: AddNewsRequestAction) => {
      state.loading = true;
      state.error = null;
      state.lastNewsId = action.payload;
    },
    successRequest: (state, action: SuccessRequestAction) => {
      state.loading = false;
      state.news = [...state.news, ...action.payload];
    },
    failureRequest: (state, action: FailureRequestAction) => {
      (state.loading = false), (state.error = action.payload);
    },
    setOverflow: (state) => {
      state.overflow = true;
    },
  },
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
export const targetSelector = (state: RootState) => state.news;

export type SuccessRequestAction = PayloadAction<NewsPortalItemProps[]>;
export type FailureRequestAction = PayloadAction<string>;
export type AddNewsRequestAction = PayloadAction<number>;

export type AllNewsActionsTypes =
  | { type: 'news/requestNews' }
  | { type: 'news/setOverflow' }
  | AddNewsRequestAction
  | SuccessRequestAction
  | FailureRequestAction;
