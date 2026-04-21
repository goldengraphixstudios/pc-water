interface TrustItem {
  icon: React.ReactNode
  label: string
}

interface TrustStripProps {
  items: TrustItem[]
  variant?: 'dark' | 'light'
}

export default function TrustStrip({ items, variant = 'dark' }: TrustStripProps) {
  const bg = variant === 'dark' ? 'bg-white/10' : 'bg-white'
  const text = variant === 'dark' ? 'text-white' : 'text-[#30505b]'
  const border = variant === 'dark' ? 'border-white/20' : 'border-gray-200'

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-3 ${bg} ${text} border ${border} px-5 py-3 rounded-full text-sm font-medium backdrop-blur-sm`}
        >
          <span className="text-[#3e91ce] flex-shrink-0">{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  )
}
