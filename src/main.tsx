import React from 'react';
import './assets/css/index.css';
import Home from './pages/Home';
import store from './common/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Settings from './pages/Settings';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import AddBookmark from '@comp/ui/AddBookmark';
import EditBookmark from '@comp/ui/EditBookmark';
import { Routes, Route, HashRouter } from 'react-router-dom';

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
