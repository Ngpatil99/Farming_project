import React from "react";
import {
  useAsyncDebounce,
  useGlobalFilter,
  useTable,
  useSortBy,
  usePagination,
} from "react-table";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="d-flex align-items-center">
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="form-control form-control-sm ms-2"
      />
    </span>
  );
}
export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="dataTables_length py-3">
            <span>Show</span>
            <select
              value={state.pageSize}
              className="form-select form-select-sm w-auto d-inline-block ms-2"
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span> entries</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <div className="dataTables_filter py-3">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>
      </div>
      <table
        {...getTableProps()}
        className="datatables-basic table border-top dataTable no-footer dtr-column"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className="pagination mt-3 justify-content-end">
        <li
          className={
            "paginate_button page-item" + (!canPreviousPage ? " disabled" : "")
          }
        >
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="page-link"
          >
            {"<<"}
          </button>
        </li>
        <li
          className={
            "paginate_button page-item" + (!canPreviousPage ? " disabled" : "")
          }
        >
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="page-link"
          >
            {"<"}
          </button>
        </li>
        <li className="d-flex align-items-center px-3">
          <span>
            Page{" "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </li>
        <li
          className={
            "paginate_button page-item" + (!canNextPage ? " disabled" : "")
          }
        >
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="page-link"
          >
            {">"}
          </button>
        </li>
        <li
          className={
            "paginate_button page-item" + (!canNextPage ? " disabled" : "")
          }
        >
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="page-link"
          >
            {">>"}
          </button>
        </li>
      </ul>
    </>
  );
}
