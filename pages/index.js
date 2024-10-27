import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import SidebarFilter from '../components/SidebarFilter';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilter, setShowFilter] = useState(true); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter(product => 
        selectedCategories.some(category => 
          product.category.toLowerCase().includes(category.toLowerCase())
        )
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, products]);

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories); 
  };

  const toggleFilterVisibility = () => {
    setShowFilter(prevShowFilter => !prevShowFilter); 
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <p className={styles.filterToggle} onClick={toggleFilterVisibility}>
        {showFilter ? "Hide Filter" : "Show Filter"}
      </p>
      <div className={styles.main}>
        {showFilter && <SidebarFilter onFilterChange={handleFilterChange} />}
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  );
}
