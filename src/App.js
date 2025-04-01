import { ConfigProvider } from 'antd';
import Main from './Pages/main/index'

function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            controlItemBgActive: '#f1f1f1',
            colorPrimaryBorderHover: '#000',
            hoverBorderColor: '#000',
            colorPrimary: '#000',
          },
        }}
      >
        <Main />
      </ConfigProvider>
    </div>
  );
}

export default App;
