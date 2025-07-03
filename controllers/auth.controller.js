const authService = require('../services/auth.service');

exports.login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        res.json(result);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
    };

    exports.definirMotDePasse = async (req, res) => {
    try {
        const result = await authService.definirMotDePasse(req.body);
        res.json(result);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};
