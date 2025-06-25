// src/components/Footer.tsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-6">
        &copy; {new Date().getFullYear()} Bushra Ali Arishi. All rights reserved.
      </div>
    </footer>
  )
}
