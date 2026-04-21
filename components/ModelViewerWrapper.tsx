// components/ModelViewerWrapper.tsx
'use client'

import dynamic from 'next/dynamic'

// ✅ SSR disabled HERE (allowed because this is a Client Component)
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
})

export default function ModelViewerWrapper() {
  return <ModelViewer />
}