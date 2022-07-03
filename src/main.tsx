import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import './assets/css/index.css';
import EditBookmark from '@comp/ui/EditBookmark';
import AddBookmark from '@comp/ui/AddBookmark';
import { Provider } from 'react-redux';
import store from './common/store';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Settings from './pages/Settings';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/edit" element={<EditBookmark />} />
          <Route path="/add" element={<AddBookmark />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
