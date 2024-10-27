import { useState } from 'react';
import styles from '../styles/SidebarFilter.module.css';

export default function SidebarFilter({ onFilterChange }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleCheckboxChange = (option) => {
    let updatedCategories;

    if (selectedCategories.includes(option)) {
      
      updatedCategories = selectedCategories.filter(item => item !== option);
    } else {
      
      updatedCategories = [...selectedCategories, option];
    }

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories); 
  };

  const filterOptions = {
    Category: ['Men', 'Women', 'Jewelery', 'Electronics'],
  };

  return (
    <div className={styles.sidebar}>

      <h3>Filter</h3>
      {Object.entries(filterOptions).map(([category, options]) => (
        <div key={category} className={styles.filterGroup}>
          <div className={styles.dropdown} onClick={() => handleToggle(category)}>
            <h4>{category}</h4>
          </div>
          {openCategory === category && (
            <div className={styles.checkboxContainer}>
              {options.map((option) => (
                <label key={option} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
