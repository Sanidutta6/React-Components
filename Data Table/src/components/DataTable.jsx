import { useEffect, useState } from 'react';
import { Search, Bird, ChevronLeft, ChevronRight, ArrowDownUp } from 'lucide-react';

const Pagination = ({ currentPage, totalPage, onNext }) => {
    const [paginationBtns, setPaginationBtns] = useState([]);

    useEffect(() => {
        if (totalPage > 3 && currentPage < 3) {
            setPaginationBtns([1, 2, 3, 4, "...", totalPage]);
        } else if (totalPage > 3 && currentPage >= totalPage - 2) {
            // Near the end
            setPaginationBtns([1, "...", totalPage - 3, totalPage - 2, totalPage - 1, totalPage]);
        } else if (totalPage > 3) {
            // Somewhere in the middle
            setPaginationBtns([1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPage]);
        } else {
            setPaginationBtns([Array(totalPage).fill().map((arr, idx) => idx + 1)]);
        }
    }, [currentPage, totalPage]);

    return (
        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            {/* Previous Button */}
            <button
                onClick={() => {
                    if (currentPage > 1) onNext(currentPage - 1);
                }}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
            >
                <span className="sr-only">Previous</span>
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* Page Numbers */}
            {paginationBtns.map((page, idx) => (
                <button
                    key={idx}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0 ${page === currentPage ? "bg-indigo-600" : ""
                        } ${page === "..." ? "cursor-default" : ""}`}
                    onClick={() => {
                        if (page !== "...") onNext(page);
                    }}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => {
                    if (currentPage < totalPage) onNext(currentPage + 1);
                }}
                disabled={currentPage === totalPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
            >
                <span className="sr-only">Next</span>
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
        </nav>
    )
}

const DataTable = ({ header, data }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(Math.floor(data.length / rowsPerPage));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setTotalPages(Math.floor(filteredData.length / rowsPerPage));
        setCurrentPage(1);
    }, [rowsPerPage, filteredData]);

    const handleSearch = (e) => {
        const searchKey = e.target.value.toLowerCase();
        const temp = data.filter((datum) => datum.title.toLowerCase().includes(searchKey));
        setFilteredData(temp);
    }

    const handleRowsPerPage = (e) => {
        if (e.target.value === "5") {
            setRowsPerPage(5);

        } else if (e.target.value === "10") {
            setRowsPerPage(10);
        } else if (e.target.value === "15") {
            setRowsPerPage(15);
        } else if (e.target.value === "20") {
            setRowsPerPage(20);
        } else if (e.target.value === "25") {
            setRowsPerPage(25);
        }
    }

    const handlePagination = (pageNo) => {
        if (pageNo > 0 && pageNo <= totalPages) {
            setCurrentPage(pageNo);
        }
    }

    const sortDataColumnWise = (column, sortType) => {}

    return (
        <div className="relative overflow-x-auto shadow-md">
            <div className="flex items-center px-2 py-3">
                <form className="w-full flex items-center justify-between">
                    <div>
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search />
                            </div>
                            <input type="text" id="search" onChange={handleSearch} className="block w-full p-2 pl-10 text-sm border outline-none rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Search" required="" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <select name="rowsPerPage" id="rowsPerPage" className="border outline-none text-sm rounded-lg block p-2 bg-gray-700" onChange={handleRowsPerPage}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                        <label htmlFor="rowsPerPage">Rows Per Page</label>
                    </div>
                </form>
            </div>
            <table className="w-full text-sm border">
                <thead className="text-xs uppercase border-b">
                    <tr>
                        {
                            header.map((text, idx) => (
                                <th key={idx} scope="col" className="px-6 py-3 cursor-pointer hover:bg-slate-800" onClick={() => {sortDataColumnWise(text, "asc")}}>
                                    <div className="gap-2 flex">
                                        {text}
                                        <ArrowDownUp className="h-4 w-4" />
                                    </div>
                                </th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.length > 0 ? (filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((product, index) => (
                            <tr key={index} className="border-b">
                                {
                                    Object.keys(product).map((key, idx) => (
                                        <td key={idx} className="px-6 py-4">
                                            {product[key]}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))) : (<tr>
                            <td colSpan={header.length} className="py-2 px-5 h-60 text-center">
                                <Bird className="w-32 h-32 mx-auto" />
                                <p>No data is there.</p>
                            </td>
                        </tr>)
                    }
                </tbody>
                {totalPages > 0 && (<tfoot className="border-t">
                    <tr>
                        <td colSpan={header.length} className="py-2 px-5 text-xl text-right">
                            <Pagination currentPage={currentPage} totalPage={totalPages} onNext={handlePagination} />
                        </td>
                    </tr>
                </tfoot>)}
            </table>
        </div>

    )
}

export default DataTable