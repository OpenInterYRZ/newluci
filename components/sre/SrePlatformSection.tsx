'use client'

export function SrePlatformSection() {
  const platforms = [
    { name: 'Salesforce', label: 'Salesforce' },
    { name: 'ServiceNow', label: 'ServiceNow' },
    { name: 'Oracle', label: 'Oracle' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Text */}
          <div className="md:w-1/3">
            <p className="text-lg font-medium text-gray-700">
              For Enterprise Teams Building On
            </p>
          </div>

          {/* Logos */}
          <div className="md:w-2/3 flex flex-wrap items-center gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-3">
                {/* Logo Placeholder */}
                <div className="w-24 h-24 border border-gray-300 rounded-xl flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-gray-400">{platform.name.substring(0, 2)}</span>
                </div>
                {/* Label */}
                <div className="text-sm font-medium text-gray-600">
                  {platform.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
