// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzgygov");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-white text-center">Nachricht senden</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Dein Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Deine E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Betreff"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Deine Nachricht..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <Send className="h-4 w-4 mr-2" />
            Nachricht senden
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
