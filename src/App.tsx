// import { AuthProvider } from "./components/auth/AuthProvider";
// import { LoginPage } from "./components/auth/LoginPage";
// import { Header } from "./components/layout/Header";
// import { Navigation } from "./components/layout/Navigation";
// import { Dashboard } from "./components/dashboard/Dashboard";
// import { DocumentsPage } from "./components/documents/DocumentsPage";
// import { useAuth } from "./hooks/useAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { DocumentsPage } from "./components/documents/DocumentsPage";
import Layout from "./components/layout/Layout";
import UploadDocuments from "./pages/UploadDocuments";

function App() {
  return (
    // <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="upload" element={<UploadDocuments />} />
            {/* <Route index element={<Dashboard />} /> */}
            {/* <Route path="documents" element={<Documents />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="study-tools" element={<StudyTools />} />
        <Route path="progress" element={<Progress />} />
        <Route path="hints" element={<Hints />} /> */}
          </Route>
        </Routes>
      </Router>
    // </AuthProvider>
  );
}

export default App;
