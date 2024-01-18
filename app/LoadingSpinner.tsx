export default function LoadingSpinner() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ borderTop: '4px solid #3498db', borderRight: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '4px solid transparent', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}></div>
        </div>
      );
  };