const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema([
    {
        "chapter" : Number,
        "chapterInfo" : [{
            "verse" : Number,
            "verseInfo" : {
                "name": String,
                "textOriginal" : String,
                "textEnglish" : String,
                "audio" : String,
                "translation" : String,
                "purport" : String,
                // "synonyms" : String,
             },
        }],
        "quiz" : [{
            "questionNumber" : Number,
            "qtext" : String,
            "options" : {
                "option1" : String,
                "option2" : String,
                "option3" : String,
                "option4" : String,
                "correctoption" : String,
            },
        }],
    },
]);

module.exports = mongoose.model("Transcript",verseSchema);