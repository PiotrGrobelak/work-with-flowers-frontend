import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'helpers/useWindowSize';
import { connect } from 'react-redux';
import {
  selectWorkType as selectWorkTypeAction,
  toggleMobileView as toggleMobileViewAction,
  toggleSearchBar as toggleSearchBarAction,
} from 'redux/actions/uiActions';
import { theme as view } from 'theme/Theme';
import CloseIcon from 'assets/icons/close.svg';
import SearchButtons from 'components/molecules/SearchButtons';
import {
  StyledWrapper,
  StyledDesktopList,
  StyledButton,
  StyledSearchWrapper,
  StyledMobileList,
  StyledMenuButton,
} from './index.styled';

const SearchContainer = ({
  selectWorkType,
  toggleMobileView,
  isMobileView,
  toggleSearchBar,
  isOpenSearchBar,
}) => {
  const history = useHistory();
  const windowWidth = useWindowSize();

  useEffect(() => {
    if (windowWidth.width < view.responsive.md.slice(0, 3)) {
      toggleMobileView(true);
    } else {
      toggleMobileView(false);
    }
  }, [windowWidth.width, toggleMobileView]);

  const renderSearchButtons = (
    <SearchButtons
      history={history}
      selectWorkType={selectWorkType}
      toggleSearchBar={toggleSearchBar}
      isMobileView={isMobileView}
    />
  );

  function renderSearchList() {
    if (isMobileView) {
      return (
        <>
          <StyledButton
            aria-label="Otwórz kategorie"
            type="button"
            onClick={() => toggleSearchBar()}
          >
            Kategorie
          </StyledButton>
          <StyledSearchWrapper isOpenSearchBar={isOpenSearchBar}>
            <StyledMenuButton
              icon={CloseIcon}
              onClick={() => toggleSearchBar()}
            />
            <StyledMobileList data-header="Kategorie">
              {renderSearchButtons}
            </StyledMobileList>
          </StyledSearchWrapper>
        </>
      );
    }
    return <StyledDesktopList>{renderSearchButtons}</StyledDesktopList>;
  }

  return (
    <StyledWrapper>
      <StyledButton>Miasto</StyledButton>
      {renderSearchList()}
    </StyledWrapper>
  );
};

SearchContainer.propTypes = {
  selectWorkType: PropTypes.func.isRequired,
  toggleMobileView: PropTypes.func.isRequired,
  toggleSearchBar: PropTypes.func.isRequired,
  isMobileView: PropTypes.bool.isRequired,
  isOpenSearchBar: PropTypes.bool.isRequired,
};

const mapStatetoProps = (state) => {
  const { isMobileView, isOpenSearchBar } = state.uiReducer;
  return {
    isMobileView,
    isOpenSearchBar,
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectWorkType: (type) => dispatch(selectWorkTypeAction(type)),
  toggleMobileView: (isMobileView) =>
    dispatch(toggleMobileViewAction(isMobileView)),
  toggleSearchBar: () => dispatch(toggleSearchBarAction),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SearchContainer);
