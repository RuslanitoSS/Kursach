import  searchIcon  from './iconsearch.svg'

const SearchBar = () => {
    return (
        <div className='header__search-bar'>
            <input placeholder="Поиск" className="header__search-bar-input"/>
            <img src={searchIcon} />
        </div>
    )
}

export default SearchBar