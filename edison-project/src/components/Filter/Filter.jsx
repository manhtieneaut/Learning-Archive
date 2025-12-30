
import "./filter.scss";
const SortFilter = ({ onFilter }) => {

    const sortOption = ["home-decoration", "smartphones", "laptops", "fragrances", "skincare", "groceries"];

    const handleFilter = (value) => {
        onFilter(value);
    };

    return (
        <div className='filter-section'>
            <h1>Filter by Category</h1>
            <div className='filter-block'>
                <select className="filter-box" onChange={(e) => handleFilter(e.target.value)}>
                    <option>Filter Product</option>
                    {sortOption.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}
export default SortFilter;