import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Avatar,
  AvatarFallback,
} from '@creativoma/ui-kit'

export default function MedievalGameLanding() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700">New Expansion Available</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
            Realm of Legends
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Embark on an epic journey through medieval kingdoms. Forge alliances, conquer territories, and write your legend in this immersive multiplayer strategy game.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Play Now - Free
            </Button>
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Epic Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚔️</span>
                </div>
                <CardTitle>Strategic Combat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Master tactical warfare with a deep combat system. Command armies, deploy siege weapons, and outmaneuver your enemies on the battlefield.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏰</span>
                </div>
                <CardTitle>Kingdom Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Build and expand your medieval empire. Construct castles, develop cities, and manage resources to grow your influence across the realm.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle>Multiplayer Alliances</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Join forces with players worldwide. Form powerful alliances, coordinate strategies, and compete for dominance in massive online battles.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Choose Your Path</h2>
          <Tabs defaultValue="campaign" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger value="campaign">Campaign</TabsTrigger>
              <TabsTrigger value="multiplayer">Multiplayer</TabsTrigger>
              <TabsTrigger value="conquest">Conquest</TabsTrigger>
            </TabsList>
            <TabsContent value="campaign" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Epic Single-Player Campaign</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    Experience a rich narrative spanning 40+ hours of gameplay. Follow the story of a rising lord as they navigate political intrigue, defend their lands from invaders, and ultimately unite the fractured kingdoms.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Story-Driven</Badge>
                    <Badge variant="outline">40+ Hours</Badge>
                    <Badge variant="outline">Multiple Endings</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="multiplayer" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Competitive Multiplayer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    Test your skills against players from around the world. Climb the ranked ladder, participate in seasonal tournaments, and earn exclusive rewards. Form alliances or go solo in intense PvP battles.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Ranked Matches</Badge>
                    <Badge variant="outline">Tournaments</Badge>
                    <Badge variant="outline">Seasonal Rewards</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="conquest" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">World Conquest Mode</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    Join massive server-wide conflicts where hundreds of players compete for territorial control. Coordinate with your alliance to conquer regions, control trade routes, and become the dominant force in the realm.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Massive Scale</Badge>
                    <Badge variant="outline">Territory Control</Badge>
                    <Badge variant="outline">Alliance Wars</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Join Millions of Players</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">2M+</div>
              <div className="text-slate-400">Active Players</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">50K+</div>
              <div className="text-slate-400">Daily Battles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-slate-400">Active Alliances</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">4.8★</div>
              <div className="text-slate-400">Player Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">What Players Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-amber-600 text-white">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">John the Conqueror</div>
                    <div className="text-sm text-slate-500">Level 45 Player</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  "Best medieval strategy game I've ever played! The depth of strategy and the alliance system keeps me coming back every day."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-amber-600 text-white">SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Sir Arthur</div>
                    <div className="text-sm text-slate-500">Alliance Leader</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  "The multiplayer experience is incredible. Leading my alliance to victory in the conquest mode is so satisfying!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-amber-600 text-white">LB</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Lady Beatrice</div>
                    <div className="text-sm text-slate-500">Campaign Master</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  "The story campaign is beautifully crafted with meaningful choices. Each decision really affects the outcome of your kingdom."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Begin Your Legend Today</h2>
          <p className="text-xl text-slate-300 mb-8">
            Download now and receive exclusive starter rewards including 1000 gold, rare items, and a legendary hero unit!
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Download for PC
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Download for Mobile
            </Button>
          </div>
          <div className="flex gap-6 justify-center text-sm text-slate-400">
            <span>✓ Free to Play</span>
            <span>✓ Cross-Platform</span>
            <span>✓ Regular Updates</span>
          </div>
        </div>
      </section>
    </div>
  )
}
