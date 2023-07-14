import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const DatasetsPage = () => {

  const [Datasets, setDatasets] = useState([
    {
      id: 1,
      name: 'ERP_System',
      type: 'SAP',
      source: '',
      uri: 'https://mysap.intranet.com/',
      username: 'api_user',
      password: '*********',
    },
    {
      id: 2,
      name: 'CRM_salesforce',
      type: 'Salesforce',
      uri: 'https://wwaresalesforce.com',
      username: 'api_user',
      password: '*********',
    },
    {
      id: 3,
      name: 'MKT_App',
      type: 'Merkato',
      uri: 'https://merkato.adobe.com/app3',
      username: 'api_user',
      password: '*********',
    },
    {
      id: 4,
      name: 'WW_Lakehouse',
      type: 'AWS_S3',
      uri: 'https://example.com/app4',
      username: 'api_user',
      password: '*********',
    },
    {
      id: 5,
      name: 'BloombergFeed',
      type: 'WebAPI',
      uri: 'https://www.bloomberg.com/app5',
      username: 'api_user',
      password: '*********',
    },
  ]);

  const [editDatasetData, setEditDatasetData] = useState({
    id: null,
    name: '',
    type: '',
    uri: '',
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
        <h2 className="mb-0">Datasets</h2>
        <Button class="btn btn-outline-primary"  size="sm" >
          Refresh Datasets
        </Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Dataset Name</th>
            <th>Dataset Type</th>
            <th>Dataset URI</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Datasets.map((Dataset) => (
            <tr key={Dataset.id}>
              <td>{Dataset.id}</td>
              <td>{Dataset.name}</td>
              <td>{Dataset.type}</td>
              <td>{Dataset.uri}</td>
              <td>{Dataset.username}</td>
              <td>{Dataset.password}</td>
              <td>
                <Button
                  variant="primary" size="sm"
                >
                  Edit
                </Button>{' '}
                <Button
                  variant="danger" size="sm"
                >
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

export default DatasetsPage;
