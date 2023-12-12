const getVerses = async (req,res) => {
    res.status(200).json({msg : "get verses"});
};

const getVersesTesting = async (req,res) => {
    res.status(200).json({msg : "get versestesrtng"});
};

module.exports = {getVerses,getVersesTesting};