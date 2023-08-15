import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import Index from "./pages/dashboard/Index";
import Topbar from "./pages/global/Topbar";
import Emp from "./pages/employee/Emp";
import Invoices from "./pages/invoices/Invoices";
import Contact from "./pages/contact/Contact";
import Support from "./pages/support/Support";
import Market from "./pages/market/Market";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className='app'>
            <Sidebar />
            <main className="content">
              <Topbar />
              
              <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/team" element={<Emp />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Support />} />
              <Route path="/pie" element={<Market />} />
              </Routes>
            </main>
          </div>
       </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App