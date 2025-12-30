import '../../assets/sass/base/base.scss';
import '../../assets/sass/product/pagination.scss';

const Pagination = ({ currentPage, totalPages, onChangePage }) => {

    const onPageChange = (page) => {
        if (page < 1 || page > totalPages) {
            return;
        }
        onChangePage(page);
    };

    return (
        <div className="pagination">
            <button
                className="pagination-btn-prev"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <span className='pagination-count'>
                <span>{currentPage}</span> / <span>{totalPages}</span>
            </span>
            <button
                className='pagination-btn-next'
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
