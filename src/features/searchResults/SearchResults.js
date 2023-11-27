import { useSelector } from 'react-redux';
import { Card, List, Spinner, Typography } from '@material-tailwind/react';
import SearchingResult from '~/components/SearchingResult';
import {
    isLoadingCollections,
    isLoadingAccounts,
    selectSearchedAccounts,
    selectSearchedCollections,
} from './searchResultsSlice';

function SearchingResults() {
    const searchedAccounts = useSelector(selectSearchedAccounts);
    const searchedCollections = useSelector(selectSearchedCollections);
    const isCollectionsLoading = useSelector(isLoadingCollections);
    const isAccountsLoading = useSelector(isLoadingAccounts);

    if (isCollectionsLoading && isAccountsLoading) {
        console.log('Spinning...');
        return (
            <Card className="bg-semi-secondary p-2 flex overflow-hidden">
                <Spinner className="w-full" />
            </Card>
        );
    }

    if (searchedAccounts.length === 0 && searchedCollections.length === 0) {
        return null;
    }
    return (
        <Card className="bg-semi-secondary p-2">
            {searchedCollections.length > 0 && (
                <List className="pb-0">
                    <Typography variant="h5" className="uppercase text-text-secondary px-4 py-2">
                        collections
                    </Typography>
                    {searchedCollections.map((collection) => {
                        return <SearchingResult result={collection} />;
                    })}
                </List>
            )}
            {searchedAccounts.length > 0 && (
                <List className="pt-0">
                    <Typography variant="h5" className="uppercase text-text-secondary px-4 py-2">
                        accounts
                    </Typography>
                    {searchedAccounts.map((account) => {
                        return <SearchingResult data={account} />;
                    })}
                </List>
            )}
        </Card>
    );
}

export default SearchingResults;
