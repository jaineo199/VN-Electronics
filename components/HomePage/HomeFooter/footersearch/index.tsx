import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  }
  const flatProps = {
    options: top100Films.map((option) => option.title),
  }
  const [value, setValue] = React.useState<FilmOptionType | null>(null)

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="shop and learn"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="Shop and Learn" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Services" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="Account" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Apple Store" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="For Business" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event: any, newValue: FilmOptionType | null) => {
          setValue(newValue)
        }}
        renderInput={(params) => (
          <TextField {...params} label="For Education" variant="standard" />
        )}
      />
    </Stack>
  )
}

interface FilmOptionType {
  title: string
  year: number
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]
