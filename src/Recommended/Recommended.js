import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const handleSortChange = (event) => {
    handleClick(event);
  };

  return (
    <div className="recommended-container">
       
      <h2 className="recommended-title">Sort By</h2>
      <div className="recommended-flex">
        <select className="sort-dropdown" onChange={handleSortChange}>
          <option value="">All Products</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Vans">Vans</option>
        </select>
      </div>
    </div>
  );
};

export default Recommended;
