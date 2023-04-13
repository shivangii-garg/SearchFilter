import { useState } from "react";

const SearchFilter = ({ data }) => {
  const [value, setValue] = useState(null);
  const [filteredList, setFilteredList] = useState(data);
  const [isFilterListActive, setIsFilterListActive] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    const query = e.target.value.toLowerCase();
    if (query.length > 1) {
      setIsFilterListActive(true);
      const filteredVal = filteredList.filter((item) => {
        return item.item.toLowerCase().indexOf(query) > -1;
      });
      setFilteredList(filteredVal);
    } else {
      setIsFilterListActive(false);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Fruit"
        value={value}
        onChange={handleChange}
      />
      {isFilterListActive ? (
        <ul>
          {filteredList.map((item) => {
            return (
              <li>
                {item.item}
                {item.quantity}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {data.map((item) => {
            return (
              <li>
                {item.item}
                {item.quantity}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchFilter;
