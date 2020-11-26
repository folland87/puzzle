import React, { useState, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { margin } from 'styled-system';
import Input from '../InputText';
import Button from '../Button';
import Spinner from '../Spinner';
import { getColor, getRadius, getFontSize, filterProps } from '../../theme/getters';


const InputWrapper = styled((props) => <form role="search" {...filterProps(props)}/>)`
  ${margin}
  position: relative;
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
`;

const AutocompleteList = styled((props) => <ul {...filterProps(props)}/>)`
  position: absolute;
  list-style: none;
  left: 0;
  right: 0;
  top: 100%;
  margin: 0;
  padding: 0;
  z-index: 1000;
  background-color: ${getColor('lightest')};
  border-top: 1px solid ${getColor('medium')};
  border-top-right-raduis: 0;
  border-bottom-right-raduis: ${getRadius};
  border-top-left-raduis: 0;
  border-bottom-left-raduis: ${getRadius};
  box-shadow: 0 4px 4px 0 rgba(65,65,65,.25), 0 0 0 1px rgba(65,65,65,.1);
  width: inherit;
`;

const AutocompleteInput = styled(Input)`
  flex-grow: 1;
  ${({suggestions}) => (suggestions.length) && (
    `> div {
      &:focus-within {
        border-top-right-radius: ${getRadius};
        border-bottom-right-radius: 0;
        border-top-left-radius: ${getRadius};
        border-bottom-left-radius: 0;
      };
    }`
  )}
`;

const Suggestion = styled((props) => <li {...filterProps(props)}/>)`
  cursor: pointer;
  font-size: ${({scale}) => getFontSize(scale)};
  padding: .5em 1rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${getColor('primaryLight')}
  }
`;
const ActiveSuggestion = styled(Suggestion)`
  background-color: ${getColor('primaryLight')}
`;

const usePrevious = (value) => {
    const ref = useRef()

    useEffect(() => {
      ref.current = value
    }, [value])

    return ref.current
}

const InputSearch = ({onChange, onSubmit, suggestions, ...props}) => {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const previousQuery = usePrevious(query);
  const [isOpen, setIsOpen] = useState(false);
  const [scope, setScope] = useState(props.scope);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);
  const [suggestionList, setSuggestionList] = useState(suggestions);
  const actualQuery = useMemo(() => {
    if (previousQuery === query && suggestionList[activeSuggestionIndex]) {
      return suggestionList[activeSuggestionIndex]
    } else if (previousQuery !== query && suggestionList[activeSuggestionIndex]) {
      setActiveSuggestionIndex(null);
      return query;
    }
    return query
  }, [previousQuery, query, suggestionList, activeSuggestionIndex]);

  useEffect(() => {
    setSuggestionList(suggestions);
    setActiveSuggestionIndex(null);
  }, [suggestions]);

  useEffect(() => {
    onChange(query)
    // Adding onChange here makes an infinite loop.
    // eslint-disable-next-line
  }, [query]);


  const onKeyDown = e => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      if (actualQuery) {
        onSubmit(actualQuery);
      }
    }
    if (e.keyCode === 8) {
      if (!actualQuery) {
        setScope({});
      }
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      e.preventDefault();
      setActiveSuggestionIndex((activeSuggestionIndex !== null && activeSuggestionIndex !== 0) ? activeSuggestionIndex - 1 : null)
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex !== null && activeSuggestionIndex < 5) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1)
      } else if (activeSuggestionIndex === null) {
        setActiveSuggestionIndex(0)
      }
    }
  }

  let suggestionsListComponent = null;
  if (isOpen && suggestionList.length) {
    suggestionsListComponent = (
      <AutocompleteList
        onMouseLeave={() => setActiveSuggestionIndex(null)}
      >
        {suggestionList.slice(0, 6).map((suggestion, index) => {
          if (activeSuggestionIndex === index) {
            return (
              <ActiveSuggestion
                scale={props.scale}
                key={index}
                onMouseEnter={() => setActiveSuggestionIndex(index)}
                onMouseDown={() => onSubmit(suggestion)}
              >
                {suggestion}
              </ActiveSuggestion>
            )
          }
          return (
            <Suggestion
              scale={props.scale}
              key={index}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
              onMouseDown={() => onSubmit(suggestion)}
            >
              {suggestion}
            </Suggestion>
          );
        })}
      </AutocompleteList>
    );
  }

  let iconRight = <FaSearch onMouseDown= {() => onSubmit(query)} />
  if (isOpen && query){
    iconRight = <FaTimes onMouseDown= {() => setQuery('')} />
  }
  if (props.isLoading){
    iconRight = <Spinner size={24} color='primary' />
  }

  return (
    <InputWrapper
      onFocus={() => setIsOpen(true)}
      onBlur={() => {
        setIsOpen(false)
        setScope(props.scope)
      }}
    >
      <AutocompleteInput
        {...props}
        suggestions={suggestionList}
        ref={inputRef}
        disabled={(props.isLoading)}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        value={actualQuery}
        iconRight={iconRight}
        iconLeft={scope.value ? <Button as='span' scale='small' radius='regular' color='primary'>{scope.text}</Button> : null}
      />
      {suggestionsListComponent}
    </InputWrapper>
  );
}

InputSearch.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  scope: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

InputSearch.defaultProps = {
  /**
  * A list of search suggestion
  */
  suggestions: [],
  /**
  * An object that contains a scope text and a scope value
  */
  scope: {},
  /**
  * An function that handles search submit
  */
  onSubmit: () => {},
  /**
  * Returns the current query value on change
  */
  onChange: () => {},
  /**
  * Set the loading state on search bar
  */
  isLoading:  false,
};

export default InputSearch;
