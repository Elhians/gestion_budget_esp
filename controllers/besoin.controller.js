const besoinService = require('../services/besoin.service');

exports.createBesoin = async (req, res) => {
    try {
        const besoin = await besoinService.createBesoin(req.body);
        res.status(201).json(besoin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllBesoins = async (req, res) => {
    try {
        const besoins = await besoinService.getAllBesoins();
        res.status(200).json(besoins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBesoinById = async (req, res) => {
    try {
        const besoin = await besoinService.getBesoinById(req.params.id);
        res.status(200).json(besoin);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

exports.deleteBesoin = async (req, res) => {
    try {
        const result = await besoinService.deleteBesoin(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
