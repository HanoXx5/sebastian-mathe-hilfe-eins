import { Calculator, Users, Award, Phone, Mail, MapPin, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MathAnimation from "@/components/MathAnimation";
import StarRating from "@/components/StarRating";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";

AOS.init();

const Index = () => {
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const previewFaqs = [
    {
      question: "Wie lange dauert eine Nachhilfestunde?",
      answer: "Eine Nachhilfestunde dauert in der Regel 60 min. Bei akutem Bedarf können die Zeiten auch individuell abgestimmt werden."
    },
    {
      question: "Wo findet der Unterricht statt?",
      answer: "Der Unterricht findet bei mir zu Hause in Egelsbach statt. Dort habe ich einen ruhigen Arbeitsplatz mit allen notwendigen Materialien eingerichtet."
    },
    {
      question: "Welche Fächer werden unterrichtet?",
      answer: "Grundsätzlich liegt der Schwerpunkt auf Mathe. Nach Absprache können aber auch andere Fächer, besonders die Naturwissenschaften, unterstützt werden."
      }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sebastian's Mathenachhilfe</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Über mich</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Angebot</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Erfolge</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Kontakt</a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </header>

      {/* Hero Section with Math Animation Background */}
      <section className="relative py-8 md:py-16 px-4 overflow-hidden">
        {/* Background Math Animation - Large and Centered */}
        <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-end justify-center">
          <div className="text-6xl md:text-8xl lg:text-9xl text-blue-500/75 font-mono mb-5">
            <MathAnimation />
          </div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate__animated animate__fadeInDown grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-12">
            <div className="flex justify-center order-1 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/heropic.png"
                  alt="Sebastian - Mathe Nachhilfelehrer"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="animate__animated animate__bounceInUp animate__delay-1s text-center md:text-left order-2 md:order-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Professionelle <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Mathenachhilfe</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Hi, ich bin Sebastian! Ich helfe Schülern und Studenten dabei, ihre mathematischen Fähigkeiten zu verbessern. 
                Mit individueller Betreuung und bewährten Methoden zum Erfolg!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <Button
                  size="lg"
                  className="animate__animated animate__tada animate__delay-2s animate__slow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg px-6 md:px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Kostenlose Stunde vereinbaren
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:text-purple-600 hover:border-purple-600 text-base md:text-lg px-6 md:px-8 py-3 transform hover:scale-105 transition-all duration-300"                  onClick={() => {
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-6">Über mich</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Ich bin Sebastian, 20 Jahre alt, und ich helfe dir, Mathe endlich zu verstehen, egal ob du gerade am Anfang stehst oder dich auf dein Abitur vorbereitest.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Mit 15 Punkten im Mathe-Leistungskurs und einem Abiturdurchschnitt von 1,2 bringe ich nicht nur das nötige Fachwissen mit, sondern auch die Erfahrung: Ich habe bereits über 10 Schüler*innen aller Klassenstufen erfolgreich begleitet – von der 1. Klasse bis zum Abitur. Auch Studierende mit Mathematik im Nebenfach unterstütze ich gerne und effektiv.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200">Algebra</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors duration-200">Geometrie</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors duration-200">Analysis</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-colors duration-200">Statistik</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-6 md:p-8 text-white transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2">10+</div>
                    <div className="text-blue-100 text-sm">Erfolgreiche Schüler</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2">kostenlos!</div>
                    <div className="text-blue-100 text-sm">1. Stunde</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2">2+</div>
                    <div className="text-blue-100 text-sm">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2">2-13</div>
                    <div className="text-blue-100 text-sm">Klassenstufen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Services Section */}
<section id="services" className="py-12 md:py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      {/* Überschrift bleibt so, da sie auf dem dunklen Hintergrund gut sichtbar ist */}
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 pb-1">Mein Angebot</h3>
      {/* Beschreibungstext bleibt so, da er auf dem dunklen Hintergrund gut lesbar ist */}
      <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
        Individuell angepasste Nachhilfe für verschiedene Bildungsstufen und mathematische Bereiche
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {/* Card 1: Schülernachhilfe - HELLERER HINTERGRUND */}
      <Card data-aos="fade-right" data-aos-offset="100" className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-100 border border-blue-300"> {/* Heller Gradient, passender Border */}
        <CardContent className="p-6">
          <div className="bg-blue-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4"> {/* Hellerer Icon-Hintergrund */}
            <Calculator className="h-6 w-6 text-blue-600" /> {/* Blaue Icons passend zum Hintergrund */}
          </div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">Schülernachhilfe</h4> {/* Dunklerer Titel */}
          <p className="text-gray-700 mb-4 text-sm md:text-base"> {/* Dunklerer Text für gute Lesbarkeit auf hellem Grund */}
            Unterstützung für Schüler aller Klassenstufen - von Grundlagen bis zum Abitur
          </p>
          <ul className="space-y-2 text-sm text-gray-600"> {/* Dunklere Listenpunkte */}
            <li>• Grundrechenarten</li>
            <li>• Algebra & Geometrie</li>
            <li>• Funktionen & Analysis</li>
            <li>• Prüfungsvorbereitung</li>
          </ul>
        </CardContent>
      </Card>

      {/* Card 2: Studentennachhilfe - HELLERER HINTERGRUND */}
      <Card data-aos="fade-right" data-aos-offset="250" className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-green-100 border border-green-300"> {/* Heller Gradient, passender Border */}
        <CardContent className="p-6">
          <div className="bg-green-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4"> {/* Hellerer Icon-Hintergrund */}
            <Users className="h-6 w-6 text-green-600" /> {/* Grüne Icons */}
          </div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">Studentennachhilfe</h4> {/* Dunklerer Titel */}
          <p className="text-gray-700 mb-4 text-sm md:text-base"> {/* Dunklerer Text */}
            Unterstützung für Studierende in mathematischen Grundlagenfächern
          </p>
          <ul className="space-y-2 text-sm text-gray-600"> {/* Dunklere Listenpunkte */}
            <li>• Lineare Algebra</li>
            <li>• Analysis I & II</li>
            <li>• Klausurvorbereitung</li>
          </ul>
        </CardContent>
      </Card>

      {/* Card 3: Intensivkurse - HELLERER HINTERGRUND */}
      <Card data-aos="fade-right" data-aos-offset="400" className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white to-purple-100 border border-purple-300"> {/* Heller Gradient, passender Border */}
        <CardContent className="p-6">
          <div className="bg-purple-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4"> {/* Hellerer Icon-Hintergrund */}
            <Award className="h-6 w-6 text-purple-600" /> {/* Lila Icons */}
          </div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">Intensivkurse</h4> {/* Dunklerer Titel */}
          <p className="text-gray-700 mb-4 text-sm md:text-base"> {/* Dunklerer Text */}
            Gezielte Vorbereitung auf wichtige Prüfungen und Klausuren
          </p>
          <ul className="space-y-2 text-sm text-gray-600"> {/* Dunklere Listenpunkte */}
            <li>• Abitur-Vorbereitung</li>
            <li>• Nachprüfungen</li>
            <li>• Crashkurse</li>
          </ul>
        </CardContent>
      </Card>
    </div>
         <div className="mt-8 col-span-full">
            <div className="p-4 bg-gradient-to-r from-blue-700/30 to-purple-700/30 rounded-lg border border-blue-600/50 shadow-md">
              <p className="text-base md:text-lg text-white font-medium text-center">
                💡Hinweis: Die Stunden finden bei mir zu Hause in Egelsbach statt.
              </p>
            </div>
          </div>
  </div>


</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-16 px-4 bg-gradient-to-r from-white via-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 pb-1">Erfolgsgeschichten</h3>
            <p className="text-gray-600 text-sm md:text-base">Was meine Schüler über den Unterricht sagen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">L</div>
                  <div className="ml-3">
                    <div className="font-semibold text-sm md:text-base">Maxi, 9. Klasse</div>
                    <div className="text-xs md:text-sm text-gray-600">Gymnasium</div>
                  </div>
                </div>
                <div className="mb-3">
                  <StarRating rating={5} />
                  <p className="text-xs text-gray-500 mt-1">Google Bewertung</p>
                </div>
                <p className="text-gray-700 italic text-sm md:text-base">
                  "Hat mir der weitergeholfen vor allem wenn es knapp wurde in Mathe"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
                  <div className="ml-3">
                    <div className="font-semibold text-sm md:text-base">Sarah, 2. und 5. Klasse</div>
                    <div className="text-xs md:text-sm text-gray-600">Grundschule</div>
                  </div>
                </div>
                <div className="mb-3">
                  <StarRating rating={5} />
                  <p className="text-xs text-gray-500 mt-1">Google Bewertung</p>
                </div>
                <p className="text-gray-700 italic text-sm md:text-base">
                  "Meine beiden Söhne gehen sehr gerne zu Sebastian und üben zusammen mit ihm die aktuellen Matheaufgaben."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">E</div>
                  <div className="ml-3">
                    <div className="font-semibold text-sm md:text-base">Emily, 12. Klasse</div>
                    <div className="text-xs md:text-sm text-gray-600">Fach-Abitur</div>
                  </div>
                </div>
                <div className="mb-3">
                  <StarRating rating={5} />
                  <p className="text-xs text-gray-500 mt-1">Google Bewertung</p>
                </div>
                <p className="text-gray-700 italic text-sm md:text-base">
                  "Sebastian [...] hat mir unglaublich gut geholfen und durch ihn hab ich mich in Mathe auch nicht so verzweifelt gefühlt. [...] Ich kann Sebastian als Nachhilfelehrer nur wärmstens weiterempfehlen."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 pb-1">Kontakt</h3>
            <p className="text-gray-300 text-sm md:text-base">Vereinbaren Sie Ihre kostenlose Probestunde. Rufen Sie mich gerne an oder schreiben sie mir per WhatsApp oder E-Mail.</p>
          </div>

          {/* Der prominente "Jetzt anrufen" Button */}
          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              className="animate__animated animate__tada animate__delay-2s animate__slow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg px-6 md:px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-[300px]"
              onClick={() => window.location.href = 'tel:+491621992865'}
            >
              <Phone className="h-4 w-4 mr-2" />
              Jetzt anrufen
            </Button>
          </div>

          {/* Haupt-Raster für die Kontakt-Details und den FAQ-Bereich */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Linke Spalte: Kontakt-Details (Telefon, E-Mail, Standort) */}
            <div className="space-y-6">
              {/* Telefon Card */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Telefon</h4>
                      <p className="text-gray-300">+49 162 1992865</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* E-Mail Card */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">E-Mail</h4>
                      <p className="text-gray-300">s.zscherneck@web.de</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Standort Card */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-600 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Standort</h4>
                      <p className="text-gray-300">Egelsbach, Deutschland</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rechte Spalte: FAQ-Preview */}
            <div className="bg-white/10 border-white/20 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h4 className="text-white text-xl md:text-2xl font-semibold mb-6 text-center">Häufige Fragen</h4>
              
              <div className="space-y-4 mb-6">
                {previewFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/20 last:border-b-0">
                    <button
                      onClick={() => toggleFaqItem(index)}
                      className="w-full flex items-center justify-between py-3 text-left hover:text-blue-300 transition-colors"
                    >
                      <h5 className="text-white font-medium text-sm">{faq.question}</h5>
                      {openFaqItems.includes(index) ? (
                        <ChevronUp className="h-4 w-4 text-gray-300 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-300 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqItems.includes(index) && (
                      <div className="pb-3">
                        <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/60 text-purple-600 hover:bg-white/20 hover:text-white px-8 py-4 text-base font-medium rounded-full smooth-transition hover-lift shadow-lg backdrop-blur-sm"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/faq';
                    link.click();
                  }}
                >
                  Alle FAQs ansehen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-gray-300 py-6 md:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
            <span className="text-lg md:text-xl font-bold">Sebastian's Mathenachhilfe</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm mb-4">
            <Link to="/impressum" className="hover:text-blue-400 transition-colors">
              Impressum
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/datenschutz" className="hover:text-blue-400 transition-colors">
              Datenschutz
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </Link>
          </div>
          <p className="text-xs md:text-sm text-center">
            © 2024 Sebastian's Mathenachhilfe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
