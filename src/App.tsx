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
        {/* Public routes without layout */}
        <Route path="/attempt/:formId" element={<AttemptForm />} />
        <Route path="/thanks" element={<Thanks />} />
        
        {/* Admin routes with layout */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/create" element={
          <Layout>
            <CreateForm />
          </Layout>
        } />
        <Route path="/form/:formId/summary" element={
          <Layout>
            <FormSummary />
          </Layout>
        } />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/dashboard/:formId" element={
          <Layout>
            <FormAnalytics />
          </Layout>
        } />
        <Route path="/dashboard/:formId/exports" element={
          <Layout>
            <ExportTools />
          </Layout>
        } />
        <Route path="/dashboard/:formId/user/:userId" element={
          <Layout>
            <UserDetail />
          </Layout>
        } />
        <Route path="/admin/users" element={
          <Layout>
            <AdminUsers />
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <Settings />
          </Layout>
        } />
        
        {/* Catch all route */}
        <Route path="*" element={
          <Layout>
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
              <p className="text-gray-600">The page you're looking for doesn't exist.</p>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;