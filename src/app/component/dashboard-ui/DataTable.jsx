import React from "react";

export function DataTable({ 
  columns, 
  data, 
  isLoading, 
  emptyMessage = "No data available",
  keyField = "id"
}) {
  return (
    <div className="p-4 sm:p-6 card">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600 whitespace-nowrap">
          <thead>
            <tr className="text-xs text-navy-500 font-medium uppercase border-b border-navy-100 hidden md:table-row">
              {columns.map((col, index) => (
                <th key={index} className="py-3 px-2">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center">
                  <div className="inline-block animate-spin w-6 h-6 border-2 border-accent border-t-transparent rounded-full" />
                </td>
              </tr>
            ) : data && data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-navy-500">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row[keyField] || rowIndex}
                  className="border-b border-navy-100 hover:bg-navy-50 transition md:table-row flex flex-col md:flex-row mb-4 md:mb-0"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="py-3 px-2">
                      {/* For responsive layout on mobile where we show label */}
                      <div className="md:hidden text-xs text-navy-500 font-medium uppercase mb-1">{col.label}</div>
                      {col.render ? col.render(row, rowIndex) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
