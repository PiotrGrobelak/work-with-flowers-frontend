import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from 'helpers/useWindowSize';
import { theme } from 'theme/Theme';
import { toggleMobileView } from 'redux/actions/uiActions';

export const useMobileView = () => {
  const windowWidth = useWindowSize();
  const dispatch = useDispatch();
  useEffect(() => {
    if (windowWidth.width < theme.responsive.md.slice(0, 3)) {
      dispatch(toggleMobileView(true));
    } else {
      dispatch(toggleMobileView(false));
    }
  }, [windowWidth.width, dispatch]);
};
