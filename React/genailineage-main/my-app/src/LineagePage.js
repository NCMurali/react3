/*import React from 'react';

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
      <h2  class="text-center">Data Lineage</h2>
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

export default ApplicationsPage;*/
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const PipelinePage = () => {

  const [Pipelines, setPipelines] = useState([
    {
      id: 1,
      name: 'Pipeline 1',
      history: [
        { commitId: 'abc123', timestamp: '2023-07-12 10:00', message: 'Initial commit' },
        { commitId: 'def456', timestamp: '2023-07-13 15:30', message: 'Added data transformation' },
        { commitId: 'ghi789', timestamp: '2023-07-14 09:45', message: 'Fixed bug in data loading' },
      ],
      username: 'api_user',
      password: '*********',
    },
    {
      id: 2,
      name: 'Pipeline 2',
      history: [
        { commitId: 'jkl012', timestamp: '2023-07-11 14:20', message: 'Initial commit' },
        { commitId: 'mno345', timestamp: '2023-07-13 09:10', message: 'Added data validation' },
        { commitId: 'pqr678', timestamp: '2023-07-14 11:30', message: 'Optimized data processing' },
      ],
      username: 'api_user',
      password: '*********',
    },
    {
      id: 3,
      name: 'Pipeline 3',
      history: [
        { commitId: 'stu901', timestamp: '2023-07-10 17:45', message: 'Initial commit' },
        { commitId: 'vwx234', timestamp: '2023-07-13 13:15', message: 'Added data aggregation' },
        { commitId: 'yz5678', timestamp: '2023-07-14 08:00', message: 'Refactored data visualization' },
      ],
      username: 'api_user',
      password: '*********',
    },
    // Add more pipelines as needed
  ]);

  const [editPipelineData, setEditPipelineData] = useState({
    id: null,
    name: '',
    history: [],
    username: '',
    password: '',
  });

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mb-0">&nbsp;</h2>
        <br/>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mb-0">Pipelines</h2>
        <Button class="btn btn-outline-primary" size="sm">
          Refresh Pipelines
        </Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Pipeline Name</th>
            <th>History</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Pipelines.map((pipeline) => (
            <tr key={pipeline.id}>
              <td>{pipeline.id}</td>
              <td>{pipeline.name}</td>
              <td>
                <ul>
                  {pipeline.history.slice(0, 3).map((commit) => (
                    <li key={commit.commitId}>
                      <div>{commit.timestamp}</div>
                      <div>{commit.message}</div>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{pipeline.username}</td>
              <td>{pipeline.password}</td>
              <td>
                <Button variant="primary" size="sm">
                  Edit
                </Button>{' '}
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PipelinePage;

