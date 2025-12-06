import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarFallback,
  Progress,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator,
} from '@creativoma/ui-kit'

export default function FitnessAppLanding() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-0">
                🏆 #1 Fitness App 2025
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Body,
                <br />
                <span className="text-emerald-200">Transform Your Life</span>
              </h1>
              <p className="text-xl text-emerald-50 mb-8">
                Personalized workouts, nutrition plans, and progress tracking. Your AI-powered fitness companion that adapts to you.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8">
                  Download Free
                </Button>
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex -space-x-2">
                  {['A', 'B', 'C', 'D'].map((letter, i) => (
                    <Avatar key={i} className="border-2 border-emerald-500 w-8 h-8">
                      <AvatarFallback className="bg-emerald-700 text-white text-xs">{letter}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-emerald-100">
                  <strong className="text-white">2M+</strong> active users
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl">
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-slate-400 text-sm">Today's Progress</p>
                      <p className="text-2xl font-bold">75%</p>
                    </div>
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">
                      🔥
                    </div>
                  </div>
                  <Progress value={75} className="h-3 mb-6" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-800 rounded-xl p-3">
                      <p className="text-2xl font-bold text-emerald-400">2,450</p>
                      <p className="text-xs text-slate-400">Calories</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-3">
                      <p className="text-2xl font-bold text-cyan-400">45</p>
                      <p className="text-xs text-slate-400">Minutes</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-3">
                      <p className="text-2xl font-bold text-purple-400">8,234</p>
                      <p className="text-xs text-slate-400">Steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-slate-600">Workout Plans</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
              <div className="text-slate-600">Healthy Recipes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-slate-600">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.9★</div>
              <div className="text-slate-600">App Store Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-500 text-emerald-600">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to get fit
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From beginner to pro, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏋️', title: 'Custom Workouts', desc: 'AI-generated workout plans tailored to your goals, fitness level, and available equipment.' },
              { icon: '🥗', title: 'Meal Planning', desc: 'Personalized nutrition plans with delicious recipes and automatic grocery lists.' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Detailed analytics and insights to track your transformation journey.' },
              { icon: '🎯', title: 'Goal Setting', desc: 'Set achievable milestones and celebrate every victory along the way.' },
              { icon: '👥', title: 'Community', desc: 'Connect with millions of fitness enthusiasts for motivation and support.' },
              { icon: '⌚', title: 'Wearable Sync', desc: 'Seamless integration with Apple Watch, Fitbit, and other fitness devices.' },
            ].map((feature, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-500 text-emerald-600">Workouts</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Find your perfect workout
            </h2>
          </div>

          <Tabs defaultValue="strength" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
              <TabsTrigger value="yoga">Yoga</TabsTrigger>
              <TabsTrigger value="hiit">HIIT</TabsTrigger>
            </TabsList>

            <TabsContent value="strength">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Full Body Power', duration: '45 min', level: 'Intermediate', calories: 350 },
                  { name: 'Upper Body Blast', duration: '30 min', level: 'Beginner', calories: 250 },
                  { name: 'Leg Day Challenge', duration: '50 min', level: 'Advanced', calories: 400 },
                ].map((workout, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <span className="text-6xl">💪</span>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{workout.name}</CardTitle>
                        <Badge variant="secondary">{workout.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>⏱️ {workout.duration}</span>
                        <span>🔥 {workout.calories} cal</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cardio">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Morning Run', duration: '30 min', level: 'Beginner', calories: 300 },
                  { name: 'Dance Cardio', duration: '40 min', level: 'Intermediate', calories: 380 },
                  { name: 'Sprint Intervals', duration: '25 min', level: 'Advanced', calories: 350 },
                ].map((workout, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <span className="text-6xl">🏃</span>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{workout.name}</CardTitle>
                        <Badge variant="secondary">{workout.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>⏱️ {workout.duration}</span>
                        <span>🔥 {workout.calories} cal</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="yoga">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Morning Flow', duration: '20 min', level: 'Beginner', calories: 100 },
                  { name: 'Power Yoga', duration: '45 min', level: 'Intermediate', calories: 200 },
                  { name: 'Deep Stretch', duration: '30 min', level: 'All Levels', calories: 80 },
                ].map((workout, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                      <span className="text-6xl">🧘</span>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{workout.name}</CardTitle>
                        <Badge variant="secondary">{workout.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>⏱️ {workout.duration}</span>
                        <span>🔥 {workout.calories} cal</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hiit">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Tabata Burn', duration: '20 min', level: 'Intermediate', calories: 280 },
                  { name: 'AMRAP Challenge', duration: '30 min', level: 'Advanced', calories: 400 },
                  { name: 'EMOM Workout', duration: '25 min', level: 'Intermediate', calories: 320 },
                ].map((workout, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                      <span className="text-6xl">⚡</span>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{workout.name}</CardTitle>
                        <Badge variant="secondary">{workout.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>⏱️ {workout.duration}</span>
                        <span>🔥 {workout.calories} cal</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Transformations */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-0">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results, Real People
            </h2>
            <p className="text-xl text-slate-400">
              Join thousands who have transformed their lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Mike R.', achievement: 'Lost 30 lbs in 3 months', quote: "FitLife made fitness fun again. The personalized workouts kept me motivated!" },
              { name: 'Sarah L.', achievement: 'Completed first marathon', quote: "From couch to marathon runner. This app believed in me when I didn't." },
              { name: 'James K.', achievement: 'Built lean muscle', quote: "The meal plans and workout tracking helped me achieve my dream physique." },
            ].map((story, i) => (
              <Card key={i} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-emerald-600 text-white">{story.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{story.name}</p>
                      <p className="text-emerald-400 text-sm">{story.achievement}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Download now and get your first month of Premium free!
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-black text-white hover:bg-slate-800 font-semibold px-8 gap-2">
              <span>🍎</span> App Store
            </Button>
            <Button size="lg" className="bg-black text-white hover:bg-slate-800 font-semibold px-8 gap-2">
              <span>▶️</span> Google Play
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-sm text-emerald-100">
            <span>✓ Free Download</span>
            <span>✓ No Ads</span>
            <span>✓ Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">💪</span> FitLife
              </h3>
              <p className="text-sm">Your journey to a healthier, happier you starts here.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">App</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Workouts</a></li>
                <li><a href="#" className="hover:text-white">Nutrition</a></li>
                <li><a href="#" className="hover:text-white">Progress</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-800 my-8" />
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
            <p>© 2025 FitLife. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">TikTok</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
