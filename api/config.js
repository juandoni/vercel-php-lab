module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(`<?php
// Configuración de Base de Datos NEXUS
define('DB_HOST', 'db-prod-01.internal');
define('DB_USER', 'nexus_admin');
define('DB_PASS', 'N3xu$S3cr3tP@ss2026!');
define('DB_NAME', 'nexus_prod_v2');

// Clave de API Externa (Stripe)
\$STRIPE_SECRET_KEY = "sk_live_51Hx92Lk...";
?>`);
};
