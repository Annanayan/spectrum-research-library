import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from '@/shared/Layout'
import Landing from '@/routes/Landing'
import Challenges from '@/routes/Challenges'
import Supports from '@/routes/Supports'
import Books from '@/routes/Books'
import NotFound from '@/routes/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/challenges" element={<Navigate to="/challenges/coming-out-anxiety" replace />} />
        <Route path="/challenges/:slug" element={<Challenges />} />
        <Route path="/supports" element={<Supports />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
