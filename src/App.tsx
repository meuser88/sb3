import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateForm from './pages/CreateForm';
import FormSummary from './pages/FormSummary';
import AttemptForm from './pages/AttemptForm';
import Thanks from './pages/Thanks';
import Dashboard from './pages/Dashboard';
import FormAnalytics from './pages/FormAnalytics';
import ExportTools from './pages/ExportTools';
import UserDetail from './pages/UserDetail';
import AdminUsers from './pages/AdminUsers';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/attempt/:formId" element={<AttemptForm />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateForm />} />
              <Route path="/forms/:formId/summary" element={<FormSummary />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:formId" element={<FormAnalytics />} />
              <Route path="/dashboard/:formId/exports" element={<ExportTools />} />
              <Route path="/dashboard/:formId/user/:userId" element={<UserDetail />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;