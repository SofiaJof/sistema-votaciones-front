import React from 'react';
import Sistema from '../components/Sistema';
import AdminSistema from '../components/Admin';

const Admin = () => {

    return (
      <div className="admin">  
          <Sistema/>
          <AdminSistema/>
      </div>
  );
};

export default Admin;