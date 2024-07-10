export const ListHeaders = () => {
  // Insert types here
  return;
  <div className="list-header">
    <h1 className="list-header-title">ALL LISTS</h1>
    <div className="list-header-nav">
      <div className="search__container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="filter-button">
        <button className="button"> All Lists </button>
      </div>
      <div className="add-button">
        <button className="button">+ New Item</button>
      </div>
    </div>
  </div>;
};

export default ListHeaders;
