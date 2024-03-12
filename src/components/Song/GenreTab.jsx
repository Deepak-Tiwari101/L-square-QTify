import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const tabStyles = {
    color: 'var(--color-white)',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '24px',
}

export default function GenreTab({ value, handleGenreChange }) {

    return (
        <Tabs
            value={value}
            onChange={handleGenreChange}
            label="Song genres tabs"
            style={{ paddingBottom: '21px' }}
            sx={{
                '& .MuiTabs-indicator': {
                    backgroundColor: 'var(--color-primary)', // Custom indicator color
                },
                '& .MuiTab-root': {
                    color: 'var(--color-white)', // Custom tab text color
                },
                '& .Mui-selected': {
                    color: 'var(--color-white)', // Custom selected tab text color
                },
            }}
        >
            <Tab style={tabStyles} value={0} label="All" />
            <Tab style={tabStyles} value={1} label="Rock" />
            <Tab style={tabStyles} value={2} label="Pop" />
            <Tab style={tabStyles} value={3} label="Jazz" />
            <Tab style={tabStyles} value={4} label="Blues" />
        </Tabs>

    )
}
