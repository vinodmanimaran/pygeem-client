import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:4040/agent/getallagent');
        console.log(response.data); // Log response data to inspect its structure
        setAgents(response.data.agents); // Accessing the 'agents' array from response data
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div>
      <h1>Agent List</h1>
      {agents.map(agent => (
        <div key={agent._id}>
          <h2>Agent Name: {agent.name}</h2>
          <p>Email: {agent.email}</p>
          <p>Contact Number: {agent.contactNumber}</p>
          <p>Location: {agent.location}</p>
          <img src={agent.qrCode} alt={`QR Code for ${agent.name}`} />
        </div>
      ))}
    </div>
  );
};

export default AgentList;
