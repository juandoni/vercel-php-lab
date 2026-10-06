module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (req.query.debug === 'true') {
        res.status(200).send(`
            <h1>Panel de Administración - Modo Depuración</h1>
            <p>PHP Version Emulated: 8.2.10</p>
            <p>Server Software: Vercel Edge / Node.js 18</p>
            <p>Document Root: /var/task</p>
            <p>Current User: nexus_admin</p>
            <p>Session Token: sess_8f7d6e5c4b3a2</p>
        `);
    } else {
        res.status(403).send('<h1>403 Forbidden</h1><p>Acceso restringido. Se requieren credenciales de administrador.</p>');
    }
};
