import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Portfolio render failed:', error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        <main style={{minHeight:'100vh',display:'grid',placeContent:'center',padding:'24px',background:'#080b14',color:'#fff',fontFamily:'system-ui',textAlign:'center'}}>
          <h1 style={{fontSize:'24px',fontWeight:700}}>The portfolio could not load</h1>
          <p style={{color:'#a1a1aa',maxWidth:'440px',lineHeight:1.6}}>A page component encountered an error. Please reload the page. If this continues, contact me through GitHub.</p>
          <button onClick={() => window.location.reload()} style={{margin:'20px auto 0',padding:'12px 22px',borderRadius:'999px',background:'#22c55e',color:'#052e16',fontWeight:700}}>Reload portfolio</button>
        </main>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
