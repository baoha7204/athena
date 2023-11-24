import { useSelector } from 'react-redux';
import { Card, List, Typography } from '@material-tailwind/react';
import SearchingResult from '~/components/SearchingResult';
import { selectSearchedAccounts, selectSearchedCollections } from './searchResultsSlice';

function SearchingResults() {
    const searchedAccounts = useSelector(selectSearchedAccounts);
    const searchedCollections = useSelector(selectSearchedCollections);

    if (searchedAccounts.length === 0 && searchedCollections.length === 0) {
        return (
            <Card className="bg-semi-secondary p-2">
                <Typography variant="h5" className="uppercase text-text-secondary">
                    Not found
                </Typography>
            </Card>
        );
    }
    return (
        <Card className="bg-semi-secondary p-2">
            {searchedAccounts.length > 0 && (
                <List className="pb-0">
                    <Typography variant="h5" className="uppercase text-text-secondary px-4 py-2">
                        collections
                    </Typography>
                    {searchedCollections.map((collection) => {
                        return <SearchingResult result={collection} />;
                    })}
                </List>
            )}
            {searchedCollections.length > 0 && (
                <List className="pt-0">
                    <Typography variant="h5" className="uppercase text-text-secondary px-4 py-2">
                        accounts
                    </Typography>
                    {searchedAccounts.map((account) => {
                        return <SearchingResult result={account} />;
                    })}
                </List>
            )}
        </Card>
    );
}

export default SearchingResults;
