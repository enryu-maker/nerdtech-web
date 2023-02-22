import React, { Suspense } from 'react';
import Header from './Header';
import Loading from './Loading';
import Footer from './Footer';
import { COLORS } from './Theme/Theme';
export default function App() {
  const [Name, setName] = React.useState("Home")
  const [Comp, setComp] = React.useState(React.lazy(() => import("./Home")))
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: COLORS.layout
    }}>
      <Header Name={Name} setName={setName} setComp={setComp}/>
      <Suspense fallback={<Loading />}>
        <Comp/>
      </Suspense>

    </div>
  )
}
