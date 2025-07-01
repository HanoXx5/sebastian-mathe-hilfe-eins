
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const FAQ = () => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Wie läuft eine Nachhilfestunde ab?",
      answer: "Jede Stunde beginnt mit einer kurzen Wiederholung des letzten Themas. Dann arbeiten wir gemeinsam an aktuellen Aufgaben oder bereiten uns auf Tests vor. Am Ende gibt es eine Zusammenfassung und Hausaufgaben für die nächste Stunde."
    },
    {
      question: "Wo findet der Unterricht statt?",
      answer: "Der Unterricht findet bei mir zu Hause in Egelsbach statt. Dort habe ich einen ruhigen Arbeitsplatz mit allen notwendigen Materialien eingerichtet."
    },
    {
      question: "Wie lange dauert eine Nachhilfestunde?",
      answer: "Eine Standardstunde dauert 60 Minuten. Je nach Bedarf können wir auch 90-Minuten-Einheiten vereinbaren, besonders vor wichtigen Prüfungen."
    },
    {
      question: "Was kostet eine Nachhilfestunde?",
      answer: "Die erste Stunde ist kostenlos! Danach besprechen wir gemeinsam einen fairen Preis, der von der Klassenstufe und dem Umfang abhängt. Kontaktieren Sie mich für ein individuelles Angebot."
    },
    {
      question: "Welche Klassenstufen unterrichten Sie?",
      answer: "Ich unterrichte alle Klassenstufen von der 1. Klasse bis zum Abitur (Klasse 13). Auch Studierende mit Mathematik im Nebenfach unterstütze ich gerne."
    },
    {
      question: "Kann ich auch kurzfristig Termine vereinbaren?",
      answer: "Ja, bei wichtigen Klassenarbeiten oder Prüfungen versuche ich auch kurzfristige Termine zu ermöglichen. Am besten rufen Sie mich direkt an!"
    },
    {
      question: "Bieten Sie auch Online-Unterricht an?",
      answer: "Momentan findet der Unterricht ausschließlich bei mir zu Hause statt. Das ermöglicht eine bessere persönliche Betreuung und direktes Arbeiten an Aufgaben."
    },
    {
      question: "Wie kann ich einen Termin vereinbaren?",
      answer: "Sie können mich telefonisch unter +49 162 1992865 erreichen oder eine E-Mail an s.zscherneck@web.de schreiben. Ich melde mich schnellstmöglich zurück!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Häufig gestellte Fragen</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h3 className="text-left font-semibold text-gray-800">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <Minus className="h-5 w-5 text-gray-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Weitere Fragen?</h3>
            <p className="text-gray-600 mb-4">
              Falls Ihre Frage nicht dabei war, kontaktieren Sie mich gerne direkt!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+491621992865'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Jetzt anrufen
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = 'mailto:s.zscherneck@web.de'}
              >
                E-Mail schreiben
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
