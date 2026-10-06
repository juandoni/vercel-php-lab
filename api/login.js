module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (req.method === 'POST') {
        const user = req.body?.username || '';
        const pass = req.body?.password || '';
        
        if (user === 'admin' && pass === 'nexus2026') {
            res.status(200).send('<h1>Bienvenido, Administrador</h1><p>Acceso concedido al panel de control.</p>');
        } else {
            res.status(401).send('<h1>Error de Autenticación</h1><p>Credenciales inválidas. Intente nuevamente.</p>');
        }
    } else {
        res.status(200).send(`
            <h1>Portal de Acceso</h1>
            <form method="POST">
                <input type="text" name="username" placeholder="Usuario">
                <input type="password" name="password" placeholder="Contraseña">
                <button type="submit">Ingresar</button>
            </form>
        `);
    }
};
