import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  selectWorkType as selectWorkTypeAction,
  toggleSearchBar as toggleSearchBarAction,
} from 'redux/actions/uiActions';
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
  isMobileView,
  toggleSearchBar,
  isOpenSearchBar,
}) => {
  const history = useHistory();

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
  toggleSearchBar: () => dispatch(toggleSearchBarAction),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SearchContainer);
