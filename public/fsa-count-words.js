(function () {

    if (!window.angular) throw new Error('Where is Angular?!');

    var app = angular.module('fsaCountWords', []);

    app.factory('commonWord', function () {

        var commonWords = [
            "tis",
            "twas",
            "a",
            "able",
            "about",
            "across",
            "after",
            "aint",
            "all",
            "almost",
            "also",
            "am",
            "among",
            "an",
            "and",
            "any",
            "are",
            "arent",
            "as",
            "at",
            "be",
            "because",
            "been",
            "but",
            "by",
            "can",
            "cant",
            "cannot",
            "could",
            "couldve",
            "couldnt",
            "dear",
            "did",
            "didnt",
            "do",
            "does",
            "doesnt",
            "dont",
            "either",
            "else",
            "ever",
            "every",
            "for",
            "from",
            "get",
            "got",
            "had",
            "has",
            "hasnt",
            "have",
            "he",
            "hed",
            "hell",
            "hes",
            "her",
            "hers",
            "him",
            "his",
            "how",
            "howd",
            "howll",
            "hows",
            "however",
            "i",
            "id",
            "ill",
            "im",
            "ive",
            "if",
            "in",
            "into",
            "is",
            "isnt",
            "it",
            "its",
            "its",
            "just",
            "least",
            "let",
            "like",
            "likely",
            "may",
            "me",
            "might",
            "mightve",
            "mightnt",
            "most",
            "must",
            "mustve",
            "mustnt",
            "my",
            "neither",
            "no",
            "nor",
            "not",
            "of",
            "off",
            "often",
            "on",
            "only",
            "or",
            "other",
            "our",
            "own",
            "rather",
            "said",
            "say",
            "says",
            "shant",
            "she",
            "shed",
            "shell",
            "shes",
            "should",
            "shouldve",
            "shouldnt",
            "since",
            "so",
            "some",
            "than",
            "that",
            "thatll",
            "thats",
            "the",
            "their",
            "them",
            "then",
            "there",
            "theres",
            "these",
            "they",
            "theyd",
            "theyll",
            "theyre",
            "theyve",
            "this",
            "tis",
            "to",
            "too",
            "twas",
            "us",
            "wants",
            "was",
            "wasnt",
            "we",
            "wed",
            "well",
            "were",
            "were",
            "werent",
            "what",
            "whatd",
            "whats",
            "when",
            "when",
            "whend",
            "whenll",
            "whens",
            "where",
            "whered",
            "wherell",
            "wheres",
            "which",
            "while",
            "who",
            "whod",
            "wholl",
            "whos",
            "whom",
            "why",
            "whyd",
            "whyll",
            "whys",
            "will",
            "with",
            "wont",
            "would",
            "wouldve",
            "wouldnt",
            "yet",
            "you",
            "youd",
            "youll",
            "youre",
            "youve",
            "your"
        ];

        return function (w) {
            return commonWords.indexOf(w) !== -1;
        };

    });

    app.factory('countWords', function (commonWord) {

        var standardize = function (w) {
            return w.replace(/\W{1}/g, '').toLowerCase();
        };

        var reduction = function (acc, curr) {

            var word = standardize(curr);

            if (commonWord(word)) {
                return acc;
            }

            if (typeof acc[word] === 'undefined') {
                acc[word] = 0;
            }

            acc[word] = acc[word] + 1;

            return acc;

        };

        return function (s) {

            var wordCounts = s.split(' ').reduce(reduction, {});

            return Object.keys(wordCounts).map(function (word) {
                return { word: word, count: wordCounts[word] };
            });

        };

    });

})();