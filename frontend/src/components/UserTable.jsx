import React from 'react';

export default function MyTable({ users }) {
    return (
        <table className="table-auto">
            <thead>
            <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}