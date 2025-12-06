import { useState } from 'react'
import {
  ScrollArea,
  Button,
  Separator,
  cn,
} from '@creativoma/ui-kit'
import { componentCategories } from './components-config'
import { ComponentDemo } from './component-demos'
import MedievalGameLanding from './pages/MedievalGameLanding'
import SaasProductLanding from './pages/SaasProductLanding'
import FitnessAppLanding from './pages/FitnessAppLanding'

const landingPages: Record<string, React.ComponentType> = {
  'Medieval Game Landing': MedievalGameLanding,
  'SaaS Product Landing': SaasProductLanding,
  'Fitness App Landing': FitnessAppLanding,
}

function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>('Medieval Game Landing')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const isLanding = selectedComponent in landingPages
  const LandingComponent = landingPages[selectedComponent]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          'h-screen border-r bg-background transition-all duration-300 flex-shrink-0',
          sidebarOpen ? 'w-72' : 'w-0 overflow-hidden'
        )}
      >
        <div className="flex h-16 items-center border-b px-6 w-72">
          <h1 className="text-xl font-bold whitespace-nowrap">UI Kit</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] w-72">
          <div className="p-4 space-y-6">
            {componentCategories.map((category) => (
              <div key={category.name}>
                <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.name}
                </h2>
                <div className="space-y-1">
                  {category.components.map((component) => (
                    <button
                      key={component}
                      onClick={() => {
                        setSelectedComponent(component)
                      }}
                      className={cn(
                        'w-full rounded-md px-3 py-2 text-left text-sm transition-colors whitespace-nowrap',
                        selectedComponent === component
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-foreground'
                      )}
                    >
                      {component}
                    </button>
                  ))}
                </div>
                <Separator className="mt-4" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Header with toggle */}
        <header className="h-16 border-b flex items-center px-4 gap-4 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {sidebarOpen ? (
                <>
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                  <path d="m14 9-3 3 3 3" />
                </>
              ) : (
                <>
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                  <path d="m16 15-3-3 3-3" />
                </>
              )}
            </svg>
          </Button>
          <div className="flex-1">
            <h2 className="font-semibold">{selectedComponent}</h2>
          </div>
        </header>

        {/* Content */}
        <ScrollArea className="flex-1">
          {isLanding && LandingComponent ? (
            <LandingComponent />
          ) : (
            <div className="p-6 md:p-10">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{selectedComponent}</h1>
                <p className="text-muted-foreground">
                  Interactive demo and usage examples for the {selectedComponent} component.
                </p>
              </div>
              <ComponentDemo name={selectedComponent} />
            </div>
          )}
        </ScrollArea>
      </main>
    </div>
  )
}

export default App
