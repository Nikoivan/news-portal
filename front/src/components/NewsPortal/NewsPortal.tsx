import { useCallback, useEffect } from 'react';
import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/store';
import Preloader from '../Preloader/Preloader';
import RequestFailure from '../RequestFailure/RequestFailure';
import { newsActions } from '../../redux/slices/newsSlice';
import NewsPortalList from './List/NewsPortal-List';
import './NewsPortal.css';

export default function NewsPortal() {
  const { news, loading, error, overflow } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    const lastSeenId = news[news.length - 1].id;
    dispatch(newsActions.requestToAddNews(lastSeenId));
  };

  const tryToLoad = useCallback(() => {
    dispatch(newsActions.requestNews());
  }, []);

  useEffect(() => {
    if (!news.length) {
      tryToLoad();
    }
  }, []);

  return (
    <div className='NewsPortal'>
      {!!news.length && !loading && (
        <>
          <NewsPortalList news={news} />
          {!overflow && (
            <Button className='NewsPortal-Button' onClick={handlerClick}>
              К предыдущим записям
            </Button>
          )}
        </>
      )}
      {loading && <Preloader />}
      {error && <RequestFailure errorText={error} clickHandler={tryToLoad} />}
    </div>
  );
}
