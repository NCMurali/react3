import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ApplicationsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'ERP_System',
      type: 'SAP',
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

  const [editApplicationData, setEditApplicationData] = useState({
    id: null,
    name: '',
    type: '',
    uri: '',
    username: '',
    password: '',
  });

  const handleShowModal = () => {
    setShowModal(true);
    setEditMode(false);
    setEditApplicationData({
      id: null,
      name: '',
      type: '',
      uri: '',
      username: '',
      password: '',
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setEditApplicationData({
      id: null,
      name: '',
      type: '',
      uri: '',
      username: '',
      password: '',
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newApplication = {
      id: editApplicationData.id || applications.length + 1,
      name: formData.get('appName'),
      type: formData.get('appType'),
      uri: formData.get('appUri'),
      username: formData.get('appUsername'),
      password: formData.get('appPassword'),
    };
    if (editMode) {
      const updatedApplications = applications.map((app) =>
        app.id === editApplicationData.id ? newApplication : app
      );
      setApplications(updatedApplications);
    } else {
      setApplications([...applications, newApplication]);
    }
    handleCloseModal();
  };

  const handleEditApplication = (application) => {
    setEditMode(true);
    setEditApplicationData(application);
    setShowModal(true);
  };

  const handleDeleteConfirmation = (itemId) => {
    setDeleteConfirmation(true);
    setDeleteItemId(itemId);
  };

  const handleDeleteApplication = () => {
    const updatedApplications = applications.filter(
      (application) => application.id !== deleteItemId
    );
    setApplications(updatedApplications);
    setDeleteConfirmation(false);
    setDeleteItemId(null);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
    setDeleteItemId(null);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mb-0">&nbsp;</h2>
        <br/>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mb-0">Applications</h2>
        <Button class="btn btn-outline-primary"  size="sm" onClick={handleShowModal}>
          Add New Application
        </Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Application Name</th>
            <th>Application Type</th>
            <th>Application URI</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>{application.type}</td>
              <td>{application.uri}</td>
              <td>{application.username}</td>
              <td>{application.password}</td>
              <td>
                <Button
                  variant="primary" size="sm"
                  onClick={() => handleEditApplication(application)}
                >
                  Edit
                </Button>{' '}
                <Button
                  variant="danger" size="sm"
                  onClick={() => handleDeleteConfirmation(application.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? 'Edit Application' : 'Add New Application'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="appName">
              <Form.Label>Application Name</Form.Label>
              <Form.Control
                type="text"
                name="appName"
                required
                defaultValue={editApplicationData.name}
              />
            </Form.Group>
            <Form.Group controlId="appType">
              <Form.Label>Application Type</Form.Label>
              <Form.Control
                type="text"
                name="appType"
                required
                defaultValue={editApplicationData.type}
              />
            </Form.Group>
            <Form.Group controlId="appUri">
              <Form.Label>Application URI</Form.Label>
              <Form.Control
                type="text"
                name="appUri"
                required
                defaultValue={editApplicationData.uri}
              />
            </Form.Group>
            <Form.Group controlId="appUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="appUsername"
                required
                defaultValue={editApplicationData.username}
              />
            </Form.Group>
            <Form.Group controlId="appPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="appPassword"
                required
                defaultValue={editApplicationData.password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMode ? 'Update Application' : 'Add Application'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={deleteConfirmation} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this application?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteApplication}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ApplicationsPage;
