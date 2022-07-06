import React from 'react';
import './style.css';
import { ConfigProvider } from 'antd';

export default function App() {
  return (
    <ConfigProvider direction="ltr" componentSize="small">
      <h1>Salam</h1>
    </ConfigProvider>
  );
}
