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

export default ApplicationsPage;*/
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const PipelinePage = () => {

  const [Pipelines, setPipelines] = useState([
    {
      id: 1,
      name: 'Pipeline 1',
      source: 'Source A',
      destination: 'Destination X',
      username: 'api_user',
      password: '*********',
    },
    {
      id: 2,
      name: 'Pipeline 2',
      source: 'Source B',
      destination: 'Destination Y',
      username: 'api_user',
      password: '*********',
    },
    {
      id: 3,
      name: 'Pipeline 3',
      source: 'Source C',
      destination: 'Destination Z',
      username: 'api_user',
      password: '*********',
    },
    // Add more pipelines as needed
  ]);

  const [editPipelineData, setEditPipelineData] = useState({
    id: null,
    name: '',
    source: '',
    destination: '',
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
            <th>Source</th>
            <th>Destination</th>
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
              <td>{pipeline.source}</td>
              <td>{pipeline.destination}</td>
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
