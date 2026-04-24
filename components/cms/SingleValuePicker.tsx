'use client'

import { useState } from 'react'

type SingleValuePickerProps = {
  label: string
  description?: string
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder?: string
}

export default function SingleValuePicker({
  label,
  description,
  value,
  onChange,
  options,
  placeholder = 'Add a new option',
}: SingleValuePickerProps) {
  const [draft, setDraft] = useState('')

  function applyDraft() {
    const nextValue = draft.trim()
    if (!nextValue) {
      return
    }

    onChange(nextValue)
    setDraft('')
  }

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-[#30505b]">{label}</h3>
        {description && <p className="mt-1 text-sm text-[#6e7d84]">{description}</p>}
      </div>

      {options.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {options.map((option) => {
            const active = option === value
            return (
              <button
                key={option}
                type="button"
                onClick={() => onChange(option)}
                className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? 'border-[#30505b] bg-[#30505b] text-white'
                    : 'border-gray-200 bg-white text-[#30505b] hover:border-[#30505b] hover:bg-[#f4f8fa]'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      )}

      <div className="rounded-3xl border border-gray-200 bg-white p-3">
        {value && (
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef6fb] px-3 py-2 text-sm font-semibold text-[#30505b]">
              {value}
              <button
                type="button"
                onClick={() => onChange('')}
                className="text-[#6e7d84] transition hover:text-red-600"
                aria-label={`Clear ${value}`}
              >
                ×
              </button>
            </span>
          </div>
        )}

        <div className="flex flex-col gap-3 md:flex-row">
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                applyDraft()
              }
            }}
            className="field"
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={applyDraft}
            className="rounded-2xl bg-[#30505b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#243d46]"
          >
            Add classification
          </button>
        </div>
      </div>
    </div>
  )
}
