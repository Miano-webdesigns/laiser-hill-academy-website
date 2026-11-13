'use client'

import { Printer } from 'lucide-react'

export function PrintFeesButton() {
  return (
    <button className="fees-print-button" onClick={() => window.print()} type="button">
      <Printer aria-hidden="true" />
      Print fee structure
    </button>
  )
}
