
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Datenschutz = () => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Allgemeine Hinweise</h3>
              <p className="text-gray-600 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p className="text-gray-600 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <h3 className="text-lg font-medium text-gray-700 mb-2">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-gray-600 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder wenn Sie uns per E-Mail kontaktieren.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Kontaktaufnahme</h2>
              <p className="text-gray-600 mb-4">
                Bei der Kontaktaufnahme mit uns (z. B. per E-Mail oder Telefon) werden die von Ihnen mitgeteilten Daten von uns gespeichert, um Ihre Fragen zu bearbeiten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Ihre Rechte</h2>
              <p className="text-gray-600">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Kontakt</h2>
              <p className="text-gray-600">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                Sebastian Zscherneck<br />
                E-Mail: s.zscherneck@web.de<br />
                Telefon: +49 162 1992865
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
