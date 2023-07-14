import React from 'react';

const ApplicationsPage = () => {
  const applications = [
    { id: 1, name: 'Application 1' },
    { id: 2, name: 'Application 2' },
    { id: 3, name: 'Application 3' },
    { id: 4, name: 'Application 4' },
    { id: 5, name: 'Application 5' },
  ];

  return (
    <div>
      <h2  class="text-center">Data Pipelines</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsPage;
