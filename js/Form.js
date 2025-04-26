function FormComponent() {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setError('');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Verificar que todos los campos estén llenos
      const { name, email, phone, message } = formData;
      if (!name || !email || !phone || !message) {
        setError('Por favor, completa todos los campos.');
        setSubmitted(false);
        return;
      }
  
      // Aquí podrías enviar la info a un backend o hacer algo con los datos
  
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombres y Apellidos</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ej: Roberto Sanchez"
          value={formData.name}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ej: roberto90@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="phone">Celular</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Ej: 989876789"
          value={formData.phone}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="message">Mensaje</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
  
        <button className="btn-contact" type="submit">Enviar</button>
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {submitted && <p style={{ color: 'green' }}>Mensaje enviado con éxito ✅</p>}
      </form>
    );
  }
  