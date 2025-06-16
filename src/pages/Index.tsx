

import { Calculator, Users, Award, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Sebastian's Mathenachhilfe</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Über mich</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Angebot</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Erfolge</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div className="flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/d25fb8b4-469e-4c23-9b95-3e2864813d69.png" 
                alt="Sebastian - Mathe Nachhilfelehrer" 
                className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-white"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Professionelle <span className="text-blue-600">Mathenachhilfe</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Hi, ich bin Sebastian! Ich helfe Schülern und Studenten dabei, ihre mathematischen Fähigkeiten zu verbessern. 
                Mit individueller Betreuung und bewährten Methoden zum Erfolg!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                  onClick={() => window.location.href = 'tel:+491621992865'}
                >
                  Jetzt Termin vereinbaren
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
                  onClick={() => {
                    const section = document.getElementById("about");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600" />
              <span>10+ erfolgreiche Schüler</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span>Erfahrener Nachhilfelehrer</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span>Individuelle Betreuung</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Über mich</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hallo! Ich bin Sebastian, ein leidenschaftlicher Mathematik-Nachhilfelehrer mit umfangreicher Erfahrung 
                in der individuellen Förderung von Schülern und Studenten.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bereits über 10 Schülern konnte ich erfolgreich dabei helfen, ihre mathematischen Fähigkeiten zu verbessern 
                und ihre Ziele zu erreichen. Mein Ansatz ist es, komplexe mathematische Konzepte verständlich zu erklären 
                und eine positive Lernatmosphäre zu schaffen.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Algebra</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Geometrie</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Analysis</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Statistik</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <div className="text-blue-100">Erfolgreiche Schüler</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">kostenlos!</div>
                    <div className="text-blue-100">1. Stunde</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2+</div>
                    <div className="text-blue-100">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2-13</div>
                    <div className="text-blue-100">Klassenstufen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mein Angebot</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Individuell angepasste Nachhilfe für verschiedene Bildungsstufen und mathematische Bereiche
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Schülernachhilfe</h4>
                <p className="text-gray-600 mb-4">
                  Unterstützung für Schüler aller Klassenstufen - von Grundlagen bis zum Abitur
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Grundrechenarten</li>
                  <li>• Algebra & Geometrie</li>
                  <li>• Funktionen & Analysis</li>
                  <li>• Prüfungsvorbereitung</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Studentennachhilfe</h4>
                <p className="text-gray-600 mb-4">
                  Unterstützung für Studierende in mathematischen Grundlagenfächern
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lineare Algebra</li>
                  <li>• Analysis I & II</li>
                  <li>• Klausurvorbereitung</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Intensivkurse</h4>
                <p className="text-gray-600 mb-4">
                  Gezielte Vorbereitung auf wichtige Prüfungen und Klausuren
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Abitur-Vorbereitung</li>
                  <li>• Nachprüfungen</li>
                  <li>• Crashkurse</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Erfolgsgeschichten</h3>
            <p className="text-gray-600">Was meine Schüler über den Unterricht sagen</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">L</div>
                  <div className="ml-3">
                    <div className="font-semibold">Lilian, 12. Klasse</div>
                    <div className="text-sm text-gray-600">Gymnasium</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Sebastian hat mir geholfen, von 4 auf 9 Punkte zu kommen, innerhalb von ein paar Monaten!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
                  <div className="ml-3">
                    <div className="font-semibold">Lasse, 2. Klasse</div>
                    <div className="text-sm text-gray-600">Grundschule</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Ich freue mich immer zu Sebastian zu kommen. Mathe macht dort einfach Spaß!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-3">
                    <div className="font-semibold">Hanna, 12. Klasse</div>
                    <div className="text-sm text-gray-600">Fach-Abitur</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Perfekte Fach-Abiturvorbereitung!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Kontakt aufnehmen</h3>
            <p className="text-gray-300">Bereit für bessere Noten? Lass uns sprechen!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Kontaktinformationen</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+49 162 1992865</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>s.zscherneck[at]web.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Verfügbar für Präsenzunterricht in Egelsbach</span>
                </div>
              </div>
              
              
            </div>
            
            <form
              action="https://formsubmit.co/deine@email.de"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Neue Nachricht über Kontaktformular" />

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">E-Mail</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Nachricht</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                  placeholder="Beschreibe kurz, wobei du Hilfe benötigst..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Nachricht senden
              </Button>
            </form>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Sebastian's Mathenachhilfe</span>
          </div>
          <p className="text-sm">
            © 2024 Sebastian's Mathenachhilfe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

