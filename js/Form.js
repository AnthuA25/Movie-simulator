function FormComponent() {
    return (
        <div>
            <label htmlFor="name">Nombres y Apellidos</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Roberto Sanchez"
                required
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Ej: roberto90@gmail.com"
                required
            />

            <label htmlFor="phone">Celular</label>
            <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Ej: 989876789"
                required
            />

            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message"></textarea>

            <button className="btn-contact">Enviar</button>
        </div>
    )
}