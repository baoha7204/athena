import { useEffect, useRef } from 'react';
import { Input } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { clearSearchTerm, selectSearchTerm, setSearchTerm } from './searchSlice';
import SearchingResults from '../searchResults/SearchResults';
import { clearAccounts, clearCollections, loadAccounts, loadCollections } from '../searchResults/searchResultsSlice';

function Search() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchChangeHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const onSearchClearHandler = () => {
        console.log(1);
        dispatch(clearSearchTerm());
    };

    const debouncedSearch = useRef(
        debounce((search) => {
            console.log('Dispatching...');
            dispatch(loadCollections(search));
            dispatch(loadAccounts(search));
        }, 1000),
    ).current;

    useEffect(() => {
        if (searchTerm.length > 0) {
            debouncedSearch(searchTerm);
        }
    }, [onSearchChangeHandler]);

    useEffect(() => {
        dispatch(clearCollections());
        dispatch(clearAccounts());
    }, [onSearchClearHandler]);

    return (
        <div className="hidden items-center h-16 gap-x-2 lg:flex">
            <div className="relative flex w-full h-full gap-2 md:w-max items-center">
                <Input
                    type="search"
                    placeholder="Search"
                    containerProps={{
                        className: 'min-w-[400px] w-full h-full bg-semi-primary rounded-xl',
                    }}
                    className="pl-12 w-full h-full outline-none placeholder:text-text-secondary hover:bg-secondary border-transparent border-t-transparent placeholder-shown:border-transparent placeholder-shown:border-t-transparent focus:border-transparent !text-2xl text-text-primary"
                    labelProps={{
                        className: 'before:content-none after:content-none',
                    }}
                    spellCheck="false"
                    value={searchTerm}
                    onChange={onSearchChangeHandler}
                    icon={searchTerm.length > 0 && <i onClick={onSearchClearHandler} className="fa-light fa-x" />}
                />
                <div className="!absolute left-3">
                    <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                            fill="none"
                        />
                        <path
                            d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                            stroke="#fff"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="!absolute top-24 w-full z-[9999] max-h-[400px] overflow-auto rounded-xl">
                    <SearchingResults />
                </div>
            </div>
        </div>
    );
}

export default Search;
