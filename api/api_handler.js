module.exports = (req, res) => {
    const action = req.query.action || 'none';
    const id = req.query.id || '0';
    
    res.setHeader('Content-Type', 'application/json');
    
    if (action === 'health') {
        return res.status(200).json({ status: 'operational', version: '2.4.1', uptime: '99.9%' });
    }
    if (action === 'get_users') {
        return res.status(200).json({ 
            status: 'success', 
            data: [{ id: 1, user: 'admin', role: 'superadmin' }, { id: 2, user: 'jdoni', role: 'sysadmin' }] 
        });
    }
    if (action === 'get_config') {
        return res.status(403).json({ status: 'error', message: 'Unauthorized access to configuration' });
    }
    res.status(400).json({ status: 'error', message: 'Invalid action parameter' });
};
