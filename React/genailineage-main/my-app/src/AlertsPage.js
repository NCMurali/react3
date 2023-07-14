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
    <div >
      <h2  class="text-center">Data Alerts</h2>
      
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

const ApplicationsPage = () => {
  const applications = [
    { id: 1, name: 'Application 1', notifications: ['Notification 1', 'Notification 2'] },
    { id: 2, name: 'Application 2', notifications: ['Notification 3'] },
    { id: 3, name: 'Application 3', notifications: ['Notification 4', 'Notification 5', 'Notification 6'] },
    { id: 4, name: 'Application 4', notifications: [] },
    { id: 5, name: 'Application 5', notifications: ['Notification 7'] },
  ];

  const [selectedApplicationId, setSelectedApplicationId] = useState(null);

  const handleApplicationClick = (applicationId) => {
    setSelectedApplicationId(applicationId);
  };

  const handleNotificationClick = (notification) => {
    // Logic for handling notification click
    console.log(`Notification clicked: ${notification}`);
  };

  const getApplicationNotifications = () => {
    const selectedApplication = applications.find(app => app.id === selectedApplicationId);
    return selectedApplication ? selectedApplication.notifications : [];
  };

  return (
    <div>
      <h2 className="text-center">Data Alerts</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr
              key={application.id}
              onClick={() => handleApplicationClick(application.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>
                {selectedApplicationId === application.id && (
                  <ul>
                    {application.notifications.map((notification, index) => (
                      <li
                        key={index}
                        onClick={() => handleNotificationClick(notification)}
                        style={{ cursor: 'pointer' }}
                      >
                        {notification}
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsPage;
