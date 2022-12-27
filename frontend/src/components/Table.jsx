import React from "react";

export default function Table({ users: data }) {
    // Extract the keys from the first object in the array
    const keys = Object.keys(data[0])

    return (
        <table className="table-auto">
            <thead>
            <tr>
                {keys.map(key => (
                    <th key={key} className="px-4 py-2">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map(row => (
                <tr key={row.id}>
                    {keys.map(key => (
                        <td key={key} className="px-4 py-2">
                            {row[key]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}
