const getAll = async (req, res) => {
    res.json({
        ok: true,
        message: 'Request successfuly'
    });
}

const create = async (req, res) => {
    res.json({
        ok: true,
        message: 'Request successfuly'
    });
}

module.exports = {
    getAll,
    create
}